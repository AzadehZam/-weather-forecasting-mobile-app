import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

interface WeatherCardProps {
  data: WeatherData;
  unit: string;
  darkMode?: boolean;
}

export default function WeatherCard({ data, unit, darkMode = false }: WeatherCardProps) {
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';

  const styles = getStyles(darkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{data.name}</Text>
      <Text style={styles.temperature}>{temp}{tempUnit}</Text>
      <Text style={styles.description}>{data.weather[0].description}</Text>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Feels like</Text>
          <Text style={styles.detailValue}>{feelsLike}{tempUnit}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{data.main.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Wind</Text>
          <Text style={styles.detailValue}>{data.wind.speed} {windUnit}</Text>
        </View>
      </View>
    </View>
  );
}

const getStyles = (darkMode: boolean) => StyleSheet.create({
  container: {
    backgroundColor: darkMode ? '#333' : '#f8f9fa',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#333',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 48,
    fontWeight: '300',
    color: '#007AFF',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: darkMode ? '#ccc' : '#666',
    textTransform: 'capitalize',
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: darkMode ? '#ccc' : '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#333',
  },
}); 