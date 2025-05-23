import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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

interface ForecastProps {
  data: ForecastItem[];
  unit: string;
  darkMode?: boolean;
}

export default function Forecast({ data, unit, darkMode = false }: ForecastProps) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  const formatDate = (dt: number) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const styles = getStyles(darkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5-Day Forecast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {data.map((item, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text style={styles.date}>{formatDate(item.dt)}</Text>
            <Text style={styles.description}>{item.weather[0].main}</Text>
            <Text style={styles.temperature}>
              {Math.round(item.main.temp)}{tempUnit}
            </Text>
            <Text style={styles.minMaxTemp}>
              {Math.round(item.main.temp_min)}/{Math.round(item.main.temp_max)}{tempUnit}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const getStyles = (darkMode: boolean) => StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  scrollView: {
    flexDirection: 'row',
  },
  forecastItem: {
    backgroundColor: darkMode ? '#333' : '#f8f9fa',
    padding: 16,
    marginRight: 12,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: darkMode ? '#ccc' : '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  minMaxTemp: {
    fontSize: 12,
    color: darkMode ? '#ccc' : '#666',
  },
}); 