# React Marvel App 🦸‍♂️

A modern React application for exploring Marvel characters using the official Marvel API. Browse through your favorite superheroes and villains with an intuitive and responsive interface.

## 🚀 Live Demo

Check out the live application: [https://victoralfonsoperez.github.io/react_marvel_app/](https://victoralfonsoperez.github.io/react_marvel_app/)

## ✨ Features

- **Character Browser**: Explore Marvel characters with detailed information
- **Responsive Design**: Works seamlessly on desktop and mobile devices  
- **Marvel API Integration**: Real-time data from the official Marvel API
- **Search Functionality**: Find characters by name
- **Favorites System**: Save your favorite Marvel characters
- **Loading States**: Smooth user experience with loading indicators
- **Redux State Management**: Centralized state management for better data flow

## 🛠️ Built With

- **React 16.2** - JavaScript library for building user interfaces
- **Redux** - Predictable state container for JavaScript apps
- **React Redux** - Official React bindings for Redux
- **Axios** - Promise-based HTTP client for API requests
- **React Icons** - Popular icons as React components
- **React Modal** - Accessible modal dialog component
- **MD5** - Hash function for Marvel API authentication
- **Lodash** - Modern JavaScript utility library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 12 or higher)
- **npm** or **yarn** package manager
- **Marvel API Keys** (public and private keys from [Marvel Developer Portal](https://developer.marvel.com/))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/victoralfonsoperez/react_marvel_app.git
cd react_marvel_app
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Configure Marvel API Keys

Create a configuration file in the `src/utils/` directory:

```bash
touch src/utils/config.js
```

Add the following configuration to `src/utils/config.js`:

```javascript
// Marvel API Configuration
export const apikey = 'your_marvel_public_api_key'
export const privatekey = 'your_marvel_private_api_key'  
export const baseUrl = 'https://gateway.marvel.com/v1/public/'
```

> **🔐 Security Note**: Never commit your API keys to version control. Add `src/utils/config.js` to your `.gitignore` file.

### 4. Get Your Marvel API Keys

1. Visit the [Marvel Developer Portal](https://developer.marvel.com/)
2. Create a free account or sign in
3. Navigate to "My Developer Account"
4. Create a new application
5. Copy your **Public Key** (apikey) and **Private Key** (privatekey)

### 5. Start the Development Server

Using npm:
```bash
npm start
```

Using yarn:
```bash
yarn start
```

The application will open in your browser at `http://localhost:3000`.

## 📁 Project Structure

```
react_marvel_app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── actions/          # Redux actions
│   ├── assets/           # Images and static assets
│   ├── components/       # React components
│   │   ├── App.js        # Main application component
│   │   ├── Header.js     # Navigation header
│   │   ├── ComicCard.js  # Character card component
│   │   ├── Footer.js     # Application footer
│   │   └── ...           # Other components
│   ├── reducers/         # Redux reducers
│   ├── utils/
│   │   ├── api.js        # API utility functions
│   │   └── config.js     # API configuration (create this file)
│   ├── index.js          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Project dependencies and scripts
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
└── README.md
```

## 🧪 Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `yarn test`
Launches the test runner in interactive watch mode.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

### `npm run deploy` or `yarn deploy`
Deploys the application to GitHub Pages.

## 🌐 API Integration

This application uses the Marvel Comics API to fetch character data. The API requires authentication using:

- **Public Key (apikey)**: Your public API key
- **Private Key**: Your private API key  
- **Timestamp (ts)**: Current timestamp
- **Hash**: MD5 hash of timestamp + private key + public key

The hash is automatically generated for each API request to ensure secure authentication.

### API Endpoints Used:
- `GET /v1/public/characters` - Fetch all characters
- `GET /v1/public/characters?nameStartsWith={value}` - Search characters by name

## 🎨 Styling

The application uses custom CSS with a focus on:
- **Responsive Design**: Mobile-first approach
- **Marvel Theme**: Colors and styling inspired by Marvel branding
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions. To deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines:
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## 🙏 Acknowledgments

- **Marvel Entertainment** - For providing the amazing Marvel Comics API
- **Create React App** - For the initial project setup
- **React Community** - For the excellent ecosystem and documentation

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Marvel API Documentation](https://developer.marvel.com/docs)
2. Review the [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
3. Open an issue in this repository

---

Made with ❤️ by [Victor Pérez](https://github.com/victoralfonsoperez)