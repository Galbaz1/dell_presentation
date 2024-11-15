# AI-Powered Slide Deck Template

An open-source, interactive presentation template built with Next.js and React. Originally created using Cursor AI for a masterclass on scaling GenAI applications at Dell Technology's event.

## 🎯 Project Story

This presentation was entirely built through natural language interactions with Cursor AI, demonstrating the power of AI-assisted development. The result is a highly interactive and animated slide deck that effectively communicates complex AI development concepts.

Feel free to use this as a template for your own presentations! Fork, clone, or modify to create engaging technical presentations.

## 🚀 Features

- Interactive slides with smooth animations using Framer Motion
- Terminal-style code demonstrations 
- Responsive design with Tailwind CSS
- Custom animations and transitions
- AI development lifecycle visualization
- Real-world GenAI scaling examples

## 🛠️ Tech Stack

- Next.js 14.2
- React 18.3
- TypeScript 5.6
- Framer Motion
- GSAP 3.12
- Tailwind CSS 3.4
- Lucide React Icons

## 📦 Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn

### Quick Start

1. Clone the repository:

2. Install dependencies:

bash
npm install
or
yarn install


3. Run the development server:


4. Open your browser:
Navigate to `http://localhost:3000` to see your presentation.

5. Customize your slides:
- Edit slides in the `pages/` directory
- Modify animations in `styles/animations/`
- Update content and styling to match your needs

## 🎨 Customization

### Slide Structure
Each slide is a separate component in the `pages/` directory. The basic structure is:
- `pages/index.tsx` - Landing page
- `pages/slideN.tsx` - Individual slide components
- `components/slides/SlideLayout.tsx` - Common layout wrapper

### Adding New Slides
1. Create a new file in `pages/` directory
2. Use the `SlideLayout` component as wrapper
3. Add your slide to the navigation flow in `SlideManager.tsx`

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a Pull Request

### Development Guidelines
1. Follow the existing code style
2. Add comments for complex animations
3. Test across different screen sizes
4. Update documentation as needed

## 📄 License

This project is open-source and available under the MIT License. Feel free to use it as a template for your own presentations!

## 🙏 Acknowledgments

- Built with [Cursor AI](https://cursor.sh/)
- Originally presented at Dell Technology's GenAI event
- Inspired by the need for better technical presentation tools

## 📫 Contact & Support

- Create an issue for bugs or feature requests
- Star the repo if you find it useful!
- Follow for updates on more AI-powered templates

---
Made with 🤖 and ❤️ using Cursor AI