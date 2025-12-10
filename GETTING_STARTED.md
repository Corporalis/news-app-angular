## 🚀 BBC News App - Getting Started

### What is this?

An Angular 18 news application that:
- Fetches real news from NewsAPI.org
- Displays it in a BBC-inspired dark theme
- Uses NGRX for state management
- Built with Tailwind CSS v3

### Prerequisites

1. **Node.js** (v18+) - [Download here](https://nodejs.org/)
2. **NewsAPI Key** - Get free at [https://newsapi.org](https://newsapi.org)

### Step-by-Step Setup

#### 1. Get Your API Key
```
1. Visit https://newsapi.org
2. Click "Get API Key"
3. Sign up (it's free!)
4. Copy your API key
```

#### 2. Configure the API Key
Open these two files and replace `YOUR_NEWS_API_KEY_HERE` with your actual API key:
- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

Example:
```typescript
export const environment = {
  production: false,
  newsApiKey: 'abc123your-actual-key-here', // ← Paste your key here
  newsApiUrl: 'https://newsapi.org/v2'
};
```

#### 3. Start the App
```bash
npm start
```

Wait for the message: `Application bundle generation complete`

#### 4. Open in Browser
Navigate to: **http://localhost:4200**

### What You Should See

✅ Dark-themed news website  
✅ BBC-style red header with logo  
✅ Category navigation (General, Business, Tech, etc.)  
✅ Grid of news articles with images  
✅ Click any article to read on the source website  

### Features to Try

1. **Switch Categories** - Click tabs at the top (Business, Technology, etc.)
2. **Read Articles** - Click any news card to open the full article
3. **NGRX DevTools** - Install Redux DevTools browser extension to see state changes

### Troubleshooting

**Problem: No articles showing**
- ✓ Check your API key is correct in both environment files
- ✓ Check browser console (F12) for errors
- ✓ Free tier limited to 100 requests/day

**Problem: Some images don't load**
- ✓ Normal! Some news sources block external image loading (CORS)

**Problem: Build errors**
- ✓ Run `npm install` again
- ✓ Make sure Node.js version is 18+

### Project Structure

```
src/app/
├── components/
│   ├── header/          ← Navigation & categories
│   ├── news-list/       ← Main news grid
│   ├── news-card/       ← Individual article
│   └── footer/          ← Footer
├── store/               ← NGRX state management
│   ├── news.actions.ts
│   ├── news.effects.ts
│   ├── news.reducer.ts
│   └── news.selectors.ts
├── services/
│   └── news.service.ts  ← API calls
└── models/
    └── news.model.ts    ← TypeScript interfaces
```

### Technologies Used

- **Angular 18** - Modern framework
- **NGRX** - State management (like Redux)
- **Tailwind CSS v3** - Utility-first styling
- **NewsAPI.org** - Real news data
- **TypeScript** - Type-safe development

### Next Steps

Want to customize?
- Change colors in `tailwind.config.js`
- Add more categories in `header.component.ts`
- Modify the card layout in `news-card.component.html`
- Add search functionality using `news.service.ts`

### Need Help?

- Check the main `README.md` for detailed documentation
- Review `QUICKSTART.md` for quick reference
- Check NewsAPI docs: https://newsapi.org/docs

---

**Enjoy your BBC-style news app!** 📰
