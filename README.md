# Asante - African-Centered Transformational Learning Platform

> "I am because we are" - Ubuntu Philosophy

Asante is a Next.js 14+ platform that embodies Ubuntu philosophy, connecting learners with African heritage, wisdom traditions, and community for personal and collective transformation.

## 🌟 Vision

Asante serves as a bridge between traditional African wisdom and modern learning, creating a space where individuals can:
- Discover and connect with their ancestral heritage
- Learn from African wisdom traditions and philosophy
- Build meaningful community connections
- Track their impact on personal and community growth
- Embark on transformative learning journeys

## 🏗️ Project Structure

```
asante-platform/
├── src/
│   ├── app/ (Next.js 14 app directory)
│   │   ├── (auth)/           # Authentication pages
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   └── onboarding/
│   │   ├── (dashboard)/      # Main application pages
│   │   │   ├── ubuntu/       # Main dashboard
│   │   │   ├── heritage/     # Family tree & DNA integration
│   │   │   ├── wisdom-paths/ # Learning journeys
│   │   │   ├── circles/      # Community spaces
│   │   │   └── impact/       # Impact tracking
│   │   ├── (marketing)/      # Public marketing pages
│   │   │   ├── page.tsx      # Landing page
│   │   │   ├── about/
│   │   │   ├── pricing/
│   │   │   └── download/
│   │   ├── api/              # API routes
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── ui/               # shadcn/ui base components
│   │   ├── ubuntu/           # Custom Ubuntu-inspired components
│   │   ├── heritage/         # Family tree, DNA integration
│   │   ├── community/        # Circles, forums
│   │   └── layout/           # Layout components
│   ├── lib/
│   │   ├── utils.ts          # Utility functions
│   │   ├── auth.ts           # Authentication logic
│   │   ├── database.ts       # Database utilities
│   │   └── heritage.ts       # Heritage-related functions
│   ├── types/                # TypeScript type definitions
│   └── hooks/                # Custom React hooks
├── public/
│   ├── images/
│   │   ├── heritage/         # Heritage-related images
│   │   ├── cultural/         # Cultural practice images
│   │   └── symbols/          # Traditional symbols
│   └── icons/                # Custom icons
├── docs/                     # Documentation
└── tests/                    # Test files
```

## 🚀 Features

### Core Learning Platform
- **Ubuntu Dashboard**: Personal learning space with progress tracking
- **Wisdom Paths**: Curated learning journeys from African traditions
- **Heritage Discovery**: Family tree and ancestral connection tools
- **Community Circles**: Supportive learning communities
- **Impact Tracking**: Measure personal and community contributions

### Authentication & Onboarding
- Secure user authentication
- Personalized onboarding experience
- Heritage background collection
- Learning preference setup

### Design System
- Ubuntu-inspired color palette (amber, orange, warm tones)
- Responsive design with mobile-first approach
- shadcn/ui component library integration
- Custom components embodying African aesthetics

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Hooks + Context
- **Authentication**: Custom auth service (ready for integration)

## 🎨 Design Philosophy

### Ubuntu-Inspired Design
- **Colors**: Warm amber and orange tones representing African earth and sun
- **Typography**: Clean, readable fonts with cultural sensitivity
- **Layout**: Community-centered, circular design elements
- **Imagery**: African cultural symbols and patterns

### User Experience
- **Accessibility**: WCAG compliant design
- **Mobile-First**: Responsive design for all devices
- **Cultural Sensitivity**: Respectful representation of African cultures
- **Community Focus**: Features that encourage connection and collaboration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/asante-platform.git
   cd asante-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## 📱 Pages & Routes

### Public Pages
- `/` - Landing page
- `/about` - About Asante
- `/pricing` - Pricing plans
- `/download` - Mobile app download

### Authentication
- `/login` - User login
- `/signup` - User registration
- `/onboarding` - User onboarding

### Dashboard (Protected)
- `/ubuntu` - Main dashboard
- `/heritage` - Heritage discovery
- `/wisdom-paths` - Learning journeys
- `/circles` - Community circles
- `/impact` - Impact tracking

## 🎯 Key Components

### WisdomCard
A custom component for displaying learning paths with Ubuntu-inspired design:
- Progress tracking
- Difficulty indicators
- Cultural category icons
- Ubuntu philosophy integration

### Navigation
Responsive navigation with:
- Ubuntu-inspired branding
- User avatar and menu
- Mobile-friendly design
- Active state indicators

### Heritage Components
- Family tree visualization
- Cultural practice cards
- Ancestral region information
- Story sharing features

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
# Database (for future implementation)
DATABASE_URL=your_database_url

# Authentication (for future implementation)
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

# API Keys (for future integrations)
# DNA_TESTING_API_KEY=your_api_key
# HERITAGE_API_KEY=your_api_key
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with Ubuntu-inspired colors:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          // ... other amber shades
          600: '#d97706', // Primary brand color
        }
      }
    }
  }
}
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 📚 Documentation

- [Component Library](./docs/components.md)
- [API Documentation](./docs/api.md)
- [Design System](./docs/design-system.md)
- [Heritage Features](./docs/heritage.md)

## 🤝 Contributing

We welcome contributions that align with Ubuntu philosophy and respect for African cultures.

### Contribution Guidelines
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code of Conduct
- Respect for all cultures and backgrounds
- Inclusive and welcoming environment
- Constructive feedback and collaboration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- African wisdom traditions and philosophy
- Ubuntu philosophy and community values
- Traditional storytellers and knowledge keepers
- The global African diaspora community

## 📞 Support

For support and questions:
- Email: support@asante-platform.com
- Community: [Discord Server](https://discord.gg/asante)
- Documentation: [docs.asante-platform.com](https://docs.asante-platform.com)

---

**Asante** - "Thank you" in Swahili, representing gratitude for the wisdom of our ancestors and the community that supports our growth.
