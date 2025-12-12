# BBC News App - Angular 18 with NGRX

A modern news application built with Angular 18, styled with Tailwind CSS to resemble the BBC dark theme, and using NGRX for state management. News data is fetched from NewsAPI.org.

## Features

- 📰 Real-time news from NewsAPI.org
- 🎨 BBC-inspired dark theme with Tailwind CSS
- 🔄 State management with NGRX (Store, Effects, Selectors)
- 📱 Responsive design
- 🎯 Category filtering (General, Business, Technology, Science, Sports, Entertainment, Health)
- ⚡ Server-Side Rendering (SSR) enabled
- 🎭 Standalone components

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- NewsAPI.org API key (get it free at https://newsapi.org)

## Installation

1. Navigate to the project directory:

```bash
cd newsdit-app
```

2. Install dependencies (if not already installed):

```bash
npm install
```

3. **IMPORTANT: Configure your NewsAPI key:**
   - Open `src/environments/environment.ts`
   - Replace `YOUR_NEWS_API_KEY_HERE` with your actual API key from https://newsapi.org
   - Also update `src/environments/environment.prod.ts` with the same key

## Development

Run the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser.

## Build

Build the project for production:

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/           # Navigation header with categories
│   │   ├── news-card/        # Individual news article card
│   │   └── news-list/        # Grid of news articles
│   ├── models/
│   │   └── news.model.ts     # TypeScript interfaces
│   ├── services/
│   │   └── news.service.ts   # NewsAPI integration
│   ├── store/
│   │   ├── news.actions.ts   # NGRX actions
│   │   ├── news.effects.ts   # NGRX effects
│   │   ├── news.reducer.ts   # NGRX reducer
│   │   └── news.selectors.ts # NGRX selectors
│   ├── app.config.ts         # App configuration with NGRX providers
│   └── app.ts                # Root component
├── environments/
│   ├── environment.ts        # Development environment
│   └── environment.prod.ts   # Production environment
└── styles.css                # Global Tailwind styles
```

## NGRX Architecture

The app uses NGRX for predictable state management:

- **Store**: Central state container for news articles
- **Actions**: Load news, change category, success/failure handlers
- **Reducers**: Pure functions to update state
- **Effects**: Handle side effects like API calls
- **Selectors**: Efficiently select slices of state

## Tailwind Configuration

Custom BBC-inspired color palette defined in `tailwind.config.js`:

- `bbc-bg`: #1e1e1e (background)
- `bbc-card`: #2b2b2b (card background)
- `bbc-border`: #3a3a3a (borders)
- `bbc-text`: #e4e4e4 (primary text)
- `bbc-text-secondary`: #9b9b9b (secondary text)
- `bbc-red`: #bb1919 (BBC brand red)
- `bbc-hover`: #373737 (hover states)

## API Information

This app uses the NewsAPI.org v2 API:

- Free tier: 100 requests per day
- Endpoint: `https://newsapi.org/v2/top-headlines`
- Categories: general, business, technology, science, sports, entertainment, health
- Country filter: US

## Technologies Used

- **Angular 18**: Latest version with standalone components
- **NGRX**: @ngrx/store, @ngrx/effects, @ngrx/store-devtools
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **RxJS**: Reactive programming

## Getting Your NewsAPI Key

1. Visit https://newsapi.org
2. Click "Get API Key"
3. Sign up for a free account
4. Copy your API key
5. Paste it in the environment files

## Notes

- The free NewsAPI tier has rate limits (100 requests/day)
- Images may fail to load due to CORS or source restrictions
- The app filters news by US country and selected category
- NGRX DevTools are enabled for debugging in development mode

## License

MIT
