# 🚀 Retro Cyber OS - Psychological User Study

A retro terminal web app that tests user psychology through a "hidden in plain sight" secret key mechanism.

## 🎯 The Psychology Behind the Secret

This project demonstrates user psychology understanding through a "hidden in plain sight" secret mechanism. The app tests real developer skills: patience, observation, and understanding user behavior patterns.

**Secret Mechanism**: Try typing `quit` as your very first command after login - you'll discover something special! 🎭

## 🚀 Quick Start (Any Device)

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn**

### Installation Steps

1. **Clone/Download the project**
   ```bash
   # If you have git:
   git clone <your-repo-url>
   cd RetroConnect
   
   # Or just download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to `http://localhost:3000`

### Alternative Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Start production server
npm start
```

## 🎮 How to Use

1. **Login**: Enter any valid email format (e.g., `user@example.com`)
2. **Explore**: Use the terminal commands to navigate
3. **Discover**: Try different commands and observe the system behavior
4. **Secret**: The real challenge is finding the hidden psychological test!

### Available Commands
- `start dsa` - Data Structures & Algorithms module
- `start web` - Web Development Challenge
- `start ttt` - Tic Tac Toe Game
- `help` - Show available commands
- `clear` - Clear terminal
- `quit` - Exit system (try this first!)

## 🏗️ Project Structure

```
RetroConnect/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Main pages
│   │   ├── utils/         # Utility functions
│   │   └── styles/        # CSS styles
│   └── index.html         # Entry point
├── package.json           # Dependencies & scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
└── README.md             # This file
```

## 🎨 Features

- **Retro Terminal Interface** with CRT effects
- **Psychological Secret Mechanism** hidden in plain sight
- **Multiple Learning Modules** (DSA, Web Dev, Tic Tac Toe)
- **Responsive Design** works on any device
- **Modern React + TypeScript** architecture
- **Tailwind CSS** for styling

## 🔧 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then run npm run dev again
```

**Dependencies not installing:**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Check TypeScript compilation
npm run build
# Fix any type errors before building
```

### Platform-Specific Notes

- **Windows**: Works with PowerShell, Command Prompt, or Git Bash
- **macOS**: Works with Terminal or iTerm
- **Linux**: Works with any terminal emulator
- **Mobile**: Responsive design works on mobile browsers

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use the `dist` folder as source
- **Any static hosting**: Upload the `dist` folder contents

## 🧠 The Psychology Study

This app is designed to test:
- **Patience**: How long users explore before giving up
- **Observation**: Whether users notice subtle hints
- **Obedience**: Following instructions vs. exploring
- **Technical Skills**: Understanding of terminal interfaces

The secret mechanism is intentionally "hidden in plain sight" to test these psychological aspects.

## 📱 Cross-Platform Compatibility

- ✅ **Windows** (10/11)
- ✅ **macOS** (10.15+)
- ✅ **Linux** (Ubuntu, CentOS, etc.)
- ✅ **Mobile** (iOS Safari, Chrome Mobile)
- ✅ **Tablets** (iPad, Android tablets)

## 🆘 Need Help?

If you encounter any issues:

1. Check the troubleshooting section above
2. Ensure Node.js version is 16 or higher
3. Try clearing npm cache and reinstalling
4. Check that port 3000 is available

## 📄 License

MIT License - Feel free to use and modify!

---

**Remember**: The real challenge isn't just using the app - it's discovering the hidden psychological test! 🎭✨
