#!/bin/bash

echo ""
echo "========================================"
echo "    RETRO CYBER OS - SETUP SCRIPT"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    echo "Choose the LTS version (16.x or higher)"
    echo ""
    echo "For macOS (using Homebrew):"
    echo "  brew install node"
    echo ""
    echo "For Ubuntu/Debian:"
    echo "  curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -"
    echo "  sudo apt-get install -y nodejs"
    echo ""
    echo "For CentOS/RHEL:"
    echo "  curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -"
    echo "  sudo yum install -y nodejs"
    exit 1
fi

echo "Node.js found! Version:"
node --version

echo ""
echo "Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm is not installed!"
    echo "Please reinstall Node.js to include npm"
    exit 1
fi

echo "npm found! Version:"
npm --version

echo ""
echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install dependencies!"
    echo "Try running: npm cache clean --force"
    exit 1
fi

echo ""
echo "========================================"
echo "    SETUP COMPLETE! 🎉"
echo "========================================"
echo ""
echo "To start the app, run:"
echo "  npm run dev"
echo ""
echo "The app will open at: http://localhost:3000"
echo ""
read -p "Press Enter to start the app now..."

echo "Starting Retro Cyber OS..."
npm run dev
