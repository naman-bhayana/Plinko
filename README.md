# 🎰 Plinko Game

A modern, interactive Plinko game built with React, TypeScript, and Node.js. Drop balls from the top of a triangular pin pyramid and watch them bounce through pegs to land on multipliers!

## 🌟 Live Demo

**🚀 Live Link:** [https://plinko-frontend.onrender.com](https://plinko-frontend.onrender.com)

## 🎮 About the Game

Plinko is inspired by the classic Japanese Pachinko game. Players drop a ball from the top of a triangular pin pyramid and watch it bounce through pegs to land on different multipliers. The game offers:

- **Interactive Gameplay**: Real-time ball physics and animations
- **Customizable Risk Levels**: Different multiplier configurations
- **Visual Feedback**: Smooth animations and visual effects
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Canvas API** - Game rendering and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe server development
- **CORS** - Cross-origin resource sharing

## 🚀 Features

### Core Gameplay
- ✅ Interactive ball dropping mechanics
- ✅ Real-time physics simulation
- ✅ Multiplier-based scoring system
- ✅ Visual ball trajectory tracking
- ✅ Responsive canvas rendering

### User Interface
- ✅ Modern, clean design
- ✅ Responsive layout
- ✅ Smooth animations
- ✅ Dark theme support
- ✅ Mobile-friendly interface

### Technical Features
- ✅ TypeScript for type safety
- ✅ Hot Module Replacement (HMR)
- ✅ Environment-based configuration
- ✅ API integration
- ✅ Production-ready build system

## 📁 Project Structure

```
plinkoo/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── game/           # Game logic and classes
│   │   ├── utils/          # Utility functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json        # Frontend dependencies
├── backend/                 # Node.js backend API
│   ├── src/
│   │   ├── index.ts        # Main server file
│   │   └── outcomes.ts     # Game outcome logic
│   └── package.json        # Backend dependencies
└── README.md               # This file
```

## 🎯 Game Mechanics

### How to Play
1. **Start the Game**: Click "Play Plinko" to begin
2. **Drop Balls**: Click to drop balls from the top
3. **Watch Physics**: Balls bounce through pegs automatically
4. **Land on Multipliers**: Balls land on different multiplier values
5. **Track Results**: See your score and multiplier outcomes

### Multiplier System
- **High Risk**: 16x, 9x multipliers (rare)
- **Medium Risk**: 2x, 1.4x multipliers (uncommon)
- **Low Risk**: 1.2x, 1.1x, 1x multipliers (common)
- **Loss**: 0.5x multiplier (occasional)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/naman-bhayana/Plinko.git
   cd plinkoo
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Development

1. **Start Backend Server**
   ```bash
   cd backend
   npm run build
   npm start
   ```
   Backend will run on: `http://localhost:3000`

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on: `http://localhost:5173`

3. **Open in Browser**
   Navigate to `http://localhost:5173` to play the game!



## 🎨 Customization

### Styling
- Modify `frontend/src/index.css` for global styles
- Update component-specific styles in individual files
- Tailwind CSS classes for rapid styling

### Game Logic
- Adjust multipliers in `backend/src/index.ts`
- Modify ball physics in `frontend/src/game/classes/`
- Update game outcomes in `backend/src/outcomes.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Naman Bhayana**
- 🌐 Website: [namanbhayana.com](https://www.namanbhayana.com/)
- 💼 LinkedIn: [@namanbhayana007](https://www.linkedin.com/in/namanbhayana007/)
- 🐙 GitHub: [@naman-bhayana](https://github.com/naman-bhayana)
- 🐦 Twitter: [@bhayana_naman](https://x.com/bhayana_naman)

## 🙏 Acknowledgments

- Inspired by the classic Japanese Pachinko game
- Built with modern web technologies
- Special thanks to the React and TypeScript communities

---

**Made with ❤️ by Naman Bhayana** 