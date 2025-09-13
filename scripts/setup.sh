#!/bin/bash

# Development Setup Script for Ayomide's Portfolio
# This script sets up the development environment

echo "🚀 Setting up Ayomide's Portfolio Development Environment..."

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

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run type checking
echo "🔍 Running type check..."
npm run type-check

# Run linting
echo "🧹 Running linter..."
npm run lint

# Format code
echo "💅 Formatting code..."
npm run format

echo ""
echo "🎉 Development environment setup complete!"
echo ""
echo "Available commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run start    - Start production server"
echo "  npm run lint     - Run ESLint"
echo "  npm run format   - Format code with Prettier"
echo "  npm run type-check - Run TypeScript type checking"
echo ""
echo "🌐 Start development server with: npm run dev"
echo "📱 Open http://localhost:3000 in your browser"
