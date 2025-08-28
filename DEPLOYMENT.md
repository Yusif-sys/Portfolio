# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain (Optional)
- In your Vercel project settings, go to "Domains"
- Add your custom domain
- Update DNS records as instructed

## 🌐 Netlify

### Steps:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: None required

## 📦 Manual Deployment

### Build for Production
```bash
npm run build
npm start
```

### Static Export (Alternative)
```bash
npm run build
npm run export
```

## 🔧 Environment Variables

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Performance Optimization

- Images are automatically optimized by Next.js
- CSS is automatically minified
- JavaScript is automatically bundled and minified
- Static assets are cached

## 🚨 Common Issues

1. **Build Fails**: Check that all dependencies are installed
2. **Images Not Loading**: Verify image paths and domains in `next.config.js`
3. **Styling Issues**: Ensure TailwindCSS is properly configured

## 📊 Analytics (Optional)

Add Google Analytics or other tracking:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to `app/layout.tsx`
3. Deploy to see data

## 🔒 Security

- HTTPS is automatically enabled on Vercel
- Environment variables are secure
- No sensitive data in client-side code

---

Your portfolio is now ready for the world! 🎉
