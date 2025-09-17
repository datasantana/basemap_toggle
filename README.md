# Basemap Toggle Map

A simple web application that displays an interactive Mapbox map with the ability to toggle between light and dark basemaps.

## Features

- Interactive Mapbox GL JS map
- Toggle between light and satellite basemaps
- Navigation controls (zoom in/out)
- Geolocate control for user location
- Responsive design filling the entire viewport

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/datasantana/basemap_toggle.git
   cd basemap_toggle
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Setup

1. Create a `.env` file in the root directory of the project.

2. Get a Mapbox access token:
   - Go to [https://account.mapbox.com/](https://account.mapbox.com/)
   - Sign up or log in to your Mapbox account
   - Create a new access token or use an existing one
   - Copy the token (it starts with `pk.`)

3. Add the following environment variables to your `.env` file:
   ```
   # Mapbox Configuration (REQUIRED)
   # 1) Get a Mapbox access token from https://account.mapbox.com/
   # 2) Paste it below like: VITE_MAPBOX_ACCESS_TOKEN=pk.XXXX
   # IMPORTANT: Do NOT commit real tokens to version control. Keep .env private.
   VITE_MAPBOX_ACCESS_TOKEN=pk.YOUR_MAPBOX_ACCESS_TOKEN_HERE
   VITE_MAPBOX_STANDARD_BASEMAP=mapbox://styles/geostudio/cmfl3fgpy001j01s82205hrxq
   VITE_MAPBOX_SATELLITE_BASEMAP=mapbox://styles/geostudio/cmfl6xt04003a01rxccb4hs82
   ```

   **Note:** Replace the example token with your actual Mapbox access token. The basemap URLs are already configured for light (standard) and dark (satellite) styles.

## Running the Application

To start the development server:

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` (or the URL shown in the terminal).

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Usage

- Use the dropdown in the top-left corner to switch between "Light" and "Dark" basemaps
- Use the zoom controls in the top-right corner to zoom in/out
- Click the geolocate button to center the map on your current location

## Project Structure

```
basemap_toggle/
├── index.html          # Main HTML file
├── package.json        # Project dependencies and scripts
├── .env                # Environment variables (not committed)
├── src/
│   ├── main.js         # Main JavaScript file with map initialization
│   ├── style.css       # CSS styles
│   └── ...             # Other source files
└── README.md           # This file
```

## Technologies Used

- [Vite](https://vitejs.dev/) - Build tool and development server
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) - Interactive maps
- [Mapbox Styles](https://docs.mapbox.com/api/maps/styles/) - Map styling

## License

This project is for educational purposes. Please check Mapbox's terms of service for commercial use.
