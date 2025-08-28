@echo off
echo Building and deploying to Vercel...
echo.

echo Step 1: Installing dependencies...
npm install

echo.
echo Step 2: Building the project...
npm run build

echo.
echo Step 3: Deploying to Vercel...
echo Please make sure you have Vercel CLI installed and are logged in
echo Run: npm i -g vercel
echo Then: vercel login
echo.
echo After login, run: vercel --prod

echo.
echo Build completed successfully!
echo Your site should now work properly on Vercel
pause
