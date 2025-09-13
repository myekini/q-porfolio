@echo off
REM Development Setup Script for Ayomide's Portfolio
REM This script sets up the development environment on Windows

echo 🚀 Setting up Ayomide's Portfolio Development Environment...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Check if installation was successful
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Run type checking
echo 🔍 Running type check...
npm run type-check

REM Run linting
echo 🧹 Running linter...
npm run lint

REM Format code
echo 💅 Formatting code...
npm run format

echo.
echo 🎉 Development environment setup complete!
echo.
echo Available commands:
echo   npm run dev      - Start development server
echo   npm run build    - Build for production
echo   npm run start    - Start production server
echo   npm run lint     - Run ESLint
echo   npm run format   - Format code with Prettier
echo   npm run type-check - Run TypeScript type checking
echo.
echo 🌐 Start development server with: npm run dev
echo 📱 Open http://localhost:3000 in your browser
pause
