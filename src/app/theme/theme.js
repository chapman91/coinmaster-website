// theme/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        customGray: {
            500: '#545252',
        },
        yellow: {
            400: '#FFD700',
        },
    },
    // Add other theme settings here (e.g )
});

export default theme; 
