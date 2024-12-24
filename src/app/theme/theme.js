// theme/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gray: {
      800: '#545252',
    },
    customGray: {
      500: '#444444',
    },
    yellow: {
      400: '#FFD700',
    },
    transparentDisclaimerColor: 'rgba(var(--border-color), 0.9)',
  },
  breakpoints: {
    xs: '20em', // 320px, for extra-small screens
    sm: '30em', // 480px (default)
    md: '48em', // 768px (default)
    lg: '62em', // 992px (default)
    xl: '80em', // 1280px (default)
    '2xl': '96em', // 1536px (default)
  },
  // Add other theme settings here (e.g )
});

export default theme;
