# Quick Start Guide

## Setup Steps

1. **Get your NewsAPI key:**
   - Go to https://newsapi.org
   - Sign up for a free account
   - Copy your API key

2. **Configure the API key:**
   ```bash
   # Edit src/environments/environment.ts
   # Replace 'YOUR_NEWS_API_KEY_HERE' with your actual API key
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - Navigate to http://localhost:4200

## What You'll See

- A dark-themed news app styled like BBC News
- Navigation bar with news categories
- Grid of news articles with images
- Click any article to read more on the source website
- Switch between categories (General, Business, Technology, etc.)

## NGRX DevTools

If you have Redux DevTools browser extension installed:
- Open browser DevTools
- Look for Redux tab
- See state changes in real-time as you navigate categories

## Troubleshooting

**No articles showing?**
- Check your API key is correct in environment.ts
- Check browser console for errors
- Free tier limited to 100 requests/day

**Images not loading?**
- Some news sources may block CORS
- This is normal for some images

**Build errors?**
- Make sure you ran `npm install`
- Node version should be 18 or higher
