/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Pratibha-inspired Minimal Palette with Teal
        primary: '#FFFFFF',      // White background
        secondary: '#F5F5F5',    // Light grey
        tertiary: '#E8E8E8',     // Medium grey
        'text-primary': '#000000',   // Pure black
        'text-secondary': '#666666', // Medium grey
        'text-tertiary': '#999999',  // Light grey
        accent: {
          DEFAULT: '#0891B2',    // Teal (our accent)
          light: '#06B6D4',
          dark: '#0E7490',
          hover: '#0E7490',
          subtle: '#E0F2F7',     // Very subtle teal
        },
        border: {
          DEFAULT: '#E8E8E8',    // Light grey
          light: '#F5F5F5',
          dark: '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero-mobile': ['40px', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h1': ['56px', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h1-mobile': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2-mobile': ['30px', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3-mobile': ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.5', fontWeight: '600' }],
        'h4-mobile': ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['22px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['18px', { lineHeight: '1.75', fontWeight: '400' }],
        'body-sm': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        '4xl': '8rem',     // 128px
        '5xl': '10rem',    // 160px
      },
      maxWidth: {
        'content': '1280px',
        'readable': '720px',
        'narrow': '600px',
      },
      borderRadius: {
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 12px 30px -4px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 40px -5px rgba(0, 0, 0, 0.1), 0 20px 50px -8px rgba(0, 0, 0, 0.08)',
        'accent': '0 8px 30px -6px rgba(8, 145, 178, 0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, #FAFBFC 0%, #F4F6F8 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale': 'scale 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};
