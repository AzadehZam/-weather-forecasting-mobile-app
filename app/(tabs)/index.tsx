import Forecast from '@/components/Forecast';
import LoadingSpinner from '@/components/LoadingSpinner';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import { WEATHER_API_KEY } from '@env';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
}

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const apiKey = WEATHER_API_KEY;

  const fetchWeather = async (city: string) => {
    if (!apiKey) {
      Alert.alert(
        'API Key Required',
        'Please add your OpenWeatherMap API key to use this app. You can get one free at openweathermap.org'
      );
      return;
    }

    setLoading(true);
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      const weatherJson = await weatherRes.json();

      if (weatherJson.cod !== 200) {
        throw new Error(weatherJson.message);
      }

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
      );
      const forecastJson = await forecastRes.json();

      // Get one forecast per day (first entry of each unique date)
      const dailyMap = new Map();
      forecastJson.list.forEach((item: any) => {
        const date = item.dt_txt.split(" ")[0]; // "YYYY-MM-DD"
        if (!dailyMap.has(date)) {
          dailyMap.set(date, item);
        }
      });
      const fiveDayForecast = Array.from(dailyMap.values()).slice(0, 5);

      setWeatherData(weatherJson);
      setForecastData(fiveDayForecast);
      setError('');
    } catch (err: any) {
      setError(err.message);
      setWeatherData(null);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  const styles = getStyles(darkMode);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather App</Text>
      </View>
      
      <SearchBar onSearch={fetchWeather} darkMode={darkMode} />
      
      <View style={styles.controls}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
        >
          <Text style={styles.buttonText}>
            Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Text style={styles.buttonText}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>

      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {weatherData && <WeatherCard data={weatherData} unit={unit} darkMode={darkMode} />}
          {forecastData.length > 0 && <Forecast data={forecastData} unit={unit} darkMode={darkMode} />}
        </>
      )}
    </ScrollView>
  );
}

const getStyles = (darkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: darkMode ? '#ffffff' : '#333333',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 10,
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorContainer: {
    margin: 20,
    padding: 16,
    backgroundColor: '#ffebee',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f44336',
  },
  errorText: {
    color: '#c62828',
    fontSize: 16,
    textAlign: 'center',
  },
});
