// ChakraProviderWrapper.jsx

"use client" // runs on clientside

import { ChakraProvider } from "@chakra-ui/react";





// Wraps any children with `ChakraProvider` - Chakra UI's context is applied only on the client
export default function ChakraProviderWrapper({ children }) {
    return (
    <ChakraProvider>
        {children}
    </ChakraProvider>
    );
}