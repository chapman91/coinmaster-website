// theme/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        gray: {
            800: '#545252',
        },
        customGray: {
            500: '#444444'
        },
        yellow: {
            400: '#FFD700',
        },
    },
    // Add other theme settings here (e.g )
});

export default theme; 
