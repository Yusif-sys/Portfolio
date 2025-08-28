@echo off
echo 🚀 Setting up Yusif Imanov Portfolio Website
echo ==============================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies.
    pause
    exit /b 1
)

echo 🔨 Building the project...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🎉 Setup complete! Your portfolio is ready.
    echo.
    echo Next steps:
    echo 1. Run 'npm run dev' to start development server
    echo 2. Open http://localhost:3000 in your browser
    echo 3. Customize content in the component files
    echo 4. Deploy to Vercel using the deployment guide
    echo.
    echo Happy coding! 🚀
) else (
    echo ❌ Build failed. Please check the error messages above.
    pause
    exit /b 1
)

pause
