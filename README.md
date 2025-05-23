# 🌤️ Weather Forecasting Mobile App

A React Native mobile application built with Expo for real-time weather forecasting and 5-day weather predictions. This educational project demonstrates modern mobile app development practices including API integration, component-based architecture, and environment variable management.

## 🚀 Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **5-Day Forecast**: View detailed weather predictions for the next 5 days
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience
- **Unit Conversion**: Switch between Metric (°C) and Imperial (°F) units
- **Responsive Design**: Beautiful, modern UI with reusable components
- **Secure API Integration**: Environment variable management for API keys
- **Error Handling**: User-friendly error messages and loading states
- **Search Functionality**: Search weather by city name

## 🛠️ Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform and toolchain
- **TypeScript** - Type-safe JavaScript
- **OpenWeatherMap API** - Weather data provider
- **react-native-dotenv** - Environment variable management
- **Expo Router** - Navigation and routing

## 📱 Screenshots

*Screenshots will be added soon*

## ⚙️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- OpenWeatherMap API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/AzadehZam/-weather-forecasting-mobile-app.git
   cd -weather-forecasting-mobile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your OpenWeatherMap API key:
     ```
     WEATHER_API_KEY=your_api_key_here
     ```
   - Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run the app**
   - Scan the QR code with Expo Go app (Android/iOS)
   - Or press `i` for iOS simulator
   - Or press `a` for Android emulator
   - Or press `w` for web browser

## 🏗️ Project Structure

```
weather-forecasting-mobile-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Main weather app screen
│   │   └── explore.tsx        # Explore tab
│   ├── _layout.tsx            # Root layout
│   └── +not-found.tsx         # 404 page
├── components/
│   ├── SearchBar.tsx          # City search component
│   ├── WeatherCard.tsx        # Current weather display
│   ├── Forecast.tsx           # 5-day forecast component
│   └── LoadingSpinner.tsx     # Loading indicator
├── types/
│   └── env.d.ts              # Environment variable types
├── assets/                    # Images and icons
├── constants/                 # App constants
├── .env                      # Environment variables (not in git)
├── babel.config.js           # Babel configuration
└── package.json             # Dependencies and scripts
```

## 🔑 API Configuration

This app uses the OpenWeatherMap API for weather data. To set up:

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Add the key to your `.env` file as shown above

**Note**: The `.env` file is not tracked by git for security reasons.

## 🎯 Usage

1. **Search for Weather**: Enter a city name in the search bar
2. **View Current Weather**: See temperature, description, and weather conditions
3. **Check Forecast**: Scroll down to view the 5-day weather forecast
4. **Toggle Units**: Switch between Celsius and Fahrenheit
5. **Change Theme**: Toggle between dark and light mode

## 🧩 Components

- **SearchBar**: Handles city search input and validation
- **WeatherCard**: Displays current weather information
- **Forecast**: Shows 5-day weather forecast with daily details
- **LoadingSpinner**: Provides loading feedback during API calls

## 🎓 Educational Purpose

This project was created as part of the **UBC Bootcamp** curriculum to demonstrate:

- React Native mobile app development
- API integration and data fetching
- State management with React hooks
- Component-based architecture
- Environment variable security
- TypeScript implementation
- Modern UI/UX practices

## 🤝 Contributing

This is an educational project, but contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Expo](https://expo.dev/) for the excellent development platform
- UBC Bootcamp for the educational guidance
- React Native community for the amazing ecosystem

## 📞 Contact

- GitHub: [@AzadehZam](https://github.com/AzadehZam)
- Project Link: [https://github.com/AzadehZam/-weather-forecasting-mobile-app](https://github.com/AzadehZam/-weather-forecasting-mobile-app)

---

⭐ If you found this project helpful, please give it a star!
