# Weather Forecasting Mobile App

A React Native weather app built with Expo that provides current weather conditions and 5-day forecasts for any city worldwide.

## Features

- 🌤️ Current weather conditions
- 📅 5-day weather forecast
- 🌡️ Temperature unit switching (Celsius/Fahrenheit)
- 🌙 Dark/Light mode toggle
- 🔍 City search functionality
- 📱 Cross-platform (iOS, Android, Web)

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- An OpenWeatherMap API key

## Getting Started

### 1. Get an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key

### 2. Setup the Project

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd my-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### 3. Configure API Key

Open `app/(tabs)/index.tsx` and replace `'your_openweathermap_api_key_here'` with your actual API key:

```typescript
const apiKey = 'your_actual_api_key_here';
```

### 4. Run the App

Start the development server:
```bash
npm start
```

This will open the Expo developer tools. You can then:
- Press `i` to run on iOS simulator
- Press `a` to run on Android emulator
- Press `w` to run on web browser
- Scan the QR code with the Expo Go app on your phone

## Usage

1. **Search for a city**: Type a city name in the search bar and tap "Search"
2. **View current weather**: See temperature, weather description, humidity, and wind speed
3. **Check forecast**: Scroll through the 5-day forecast horizontally
4. **Switch units**: Toggle between Celsius and Fahrenheit
5. **Change theme**: Switch between light and dark mode

## Components

- **SearchBar**: City input and search functionality
- **WeatherCard**: Displays current weather conditions
- **Forecast**: Shows 5-day weather forecast
- **LoadingSpinner**: Loading indicator during API calls

## API

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) for weather data:
- Current Weather Data API
- 5 Day Weather Forecast API

## Technologies Used

- React Native
- Expo
- TypeScript
- OpenWeatherMap API

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
