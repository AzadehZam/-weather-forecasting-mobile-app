import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SearchBarProps {
  onSearch: (city: string) => void;
  darkMode?: boolean;
}

export default function SearchBar({ onSearch, darkMode = false }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const styles = getStyles(darkMode);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name..."
        placeholderTextColor={darkMode ? '#999' : '#666'}
        value={city}
        onChangeText={setCity}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (darkMode: boolean) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: darkMode ? '#555' : '#ccc',
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 