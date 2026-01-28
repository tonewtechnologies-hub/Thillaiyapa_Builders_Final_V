# Thillaiyappa Jamakkalams - Heritage Handloom Website

A responsive, deployable portfolio website for Thillaiyappa Jamakkalams, showcasing 100 years of handloom heritage.

## Features

- **Responsive Design**: Optimized for Desktop (1440px), Tablet (768px), and Mobile (390px).
- **Pastel Aesthetic**: Custom color palette inspired by natural dyes and weaving materials.
- **Product Catalogue**: Categorized display for Silk, Woolen, and Cotton Jamakkalams.
- **Visual Storytelling**: Gallery and Process pages to highlight the craftsmanship.
- **Floating WhatsApp Button**: Direct integration for customer inquiries.
- **Contact Form**: Functional form layout (frontend only).

## Tech Stack

- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS v4 (using CSS variables for theming)
- **Routing**: wouter
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, Layout
│   │   ├── ui/           # Reusable UI components (ProductCard, Buttons, etc.)
│   ├── pages/            # Page components (Home, About, Products, etc.)
│   ├── lib/
│   │   ├── data.ts       # Sample product and content data
│   │   └── utils.ts      # Utilities
│   ├── App.tsx           # Routing configuration
│   └── index.css         # Global styles & Tailwind theme
├── index.html            # Entry point & Meta tags
```

## Setup & Deployment

### Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```

### Deployment

This project is ready to be deployed on Replit or Vercel.

**Replit:**
- Simply hit the "Run" button. The project is configured with `vite` and will serve on port 5000.

**Vercel:**
- Connect your repository.
- Build command: `npm run build`
- Output directory: `dist`

## Customization Notes

- **WhatsApp Number**: Update the phone number in `client/src/components/ui/WhatsAppButton.tsx` (currently set to placeholder).
- **Images**: Replace the placeholder images in `client/src/lib/data.ts` with actual product photography.
- **Contact Email**: Update the `mailto` link in `client/src/pages/Contact.tsx`.
- **Theme Colors**: Modify the HSL values in `client/src/index.css` under `@theme`.

## Design Decisions

- **Typography**: Used 'Poppins' for a clean, modern yet approachable feel, supporting the "traditional-modern" aesthetic.
- **Texture**: Added a subtle woven pattern to the background (`bg-texture-woven`) to give a tactile feel without distracting from content.
- **Navigation**: Sticky header ensures easy access to all sections, with a simplified mobile drawer for better UX on small screens.
- **Performance**: Used `wouter` for lightweight routing and standard `img` tags (optimized by Vite in production).
