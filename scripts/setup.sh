#!/bin/bash

echo "🚀 Setting up Yusif Imanov Portfolio Website"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Setup complete! Your portfolio is ready."
    echo ""
    echo "Next steps:"
    echo "1. Run 'npm run dev' to start development server"
    echo "2. Open http://localhost:3000 in your browser"
    echo "3. Customize content in the component files"
    echo "4. Deploy to Vercel using the deployment guide"
    echo ""
    echo "Happy coding! 🚀"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
