@echo off
echo.
echo ========================================
echo    RETRO CYBER OS - SETUP SCRIPT
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    echo Choose the LTS version (16.x or higher)
    pause
    exit /b 1
)

echo Node.js found! Version:
node --version

echo.
echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed!
    echo Please reinstall Node.js to include npm
    pause
    exit /b 1
)

echo npm found! Version:
npm --version

echo.
echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    echo Try running: npm cache clean --force
    pause
    exit /b 1
)

echo.
echo ========================================
echo    SETUP COMPLETE! 🎉
echo ========================================
echo.
echo To start the app, run:
echo   npm run dev
echo.
echo The app will open at: http://localhost:3000
echo.
echo Press any key to start the app now...
pause >nul

echo Starting Retro Cyber OS...
npm run dev
