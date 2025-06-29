# Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI components. This portfolio showcases your skills, projects, work experience, and provides a contact form for potential clients or employers to reach out.

**Live Demo:** [https://developer-portfolio-task.vercel.app/](https://developer-portfolio-task.vercel.app/)

![Developer Portfolio Screenshot](public/portfolio-screenshot.png)

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Performance Optimized**: Implements list virtualization for large datasets
- **Accessibility Focus**: ARIA attributes and keyboard navigation
- **Error Boundaries**: Robust error handling with meaningful fallback UIs
- **Modern Stack**: Built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI
- **Dark/Light Mode**: Supports theme switching with system preference detection
- **Modular Architecture**: Clean separation of concerns for easy maintenance

## Tech Stack

### Frontend
- **Framework**: Next.js 15.3.4
- **Runtime**: Bun (Package Manager)
- **Language**: TypeScript
- **Styling**: TailwindCSS v3.4.17
- **Components**: Shadcn UI with Radix UI primitives
- **Icons**: Lucide React
- **Toast Notifications**: React Toast

### Backend & Data
- **Development Database**: SQLite
- **Production Database**: Supabase
- **ORM**: Prisma
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Bun (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. Install dependencies using Bun (preferred):
   ```bash
   bun install
   ```
   Or using npm:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   And update the values in `.env.local` with your own.

4. Initialize the database:
   ```bash
   bun prisma migrate dev --name init
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
bun run build
bun start
```

## Project Structure

```
├── src/
│   ├── app/           # Next.js App Router files
│   ├── components/    # React components
│   │   ├── common/    # Shared components like ErrorBoundary
│   │   ├── home/      # Home page section components
│   │   │   └── sections/  # Individual portfolio sections
│   │   └── ui/        # UI components, reusable primitives
│   ├── lib/           # Utility functions and helpers
│   ├── services/      # Data fetching and business logic
│   ├── types/         # TypeScript type definitions
│   └── styles/        # Global CSS and Tailwind directives
├── prisma/           # Prisma schema and migrations
├── public/           # Static assets
└── tailwind.config.js # Tailwind CSS configuration
```

## Customization

### Adding Your Own Projects

Update the `projectService.ts` file in the `src/services/` directory to include your own projects or connect to your own API.

### Modifying Styles

This project uses Tailwind CSS. You can modify the theme in `tailwind.config.js`.

## Limitations and Tradeoffs

- **Image Optimization**: Currently uses placeholder graphics; implement optimized images for production
- **Form Handling**: Contact form submission needs to be connected to a backend service
- **Authentication**: Does not include authentication for admin updates; consider adding if needed
- **Testing**: Limited test coverage; expand for production use
- **SEO**: Basic SEO implementation; enhance with more meta tags for production

## Performance Considerations

- The VirtualizedList component is used to handle large datasets efficiently
- Code-splitting is implemented via Next.js page/component level splitting
- Static generation is used for most pages to improve load time

## Accessibility

This project follows accessibility best practices including:

- Proper heading hierarchy
- ARIA attributes for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Screen reader compatibility

## License

MIT

## Acknowledgements

- [Next.js](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com)
- [Lucide Icons](https://lucide.dev)
