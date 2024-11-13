// ChakraProviderWrapper.jsx

"use client"; // runs on clientside

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";




// Wraps any children with `ChakraProvider` - Chakra UI's context is applied only on the client
export default function ChakraProviderWrapper({ children }) {
    return (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
    );
}