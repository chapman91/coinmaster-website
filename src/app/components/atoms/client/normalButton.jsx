import React from 'react'
import { Button } from "@chakra-ui/react";

const NormalButton = () => {
  return (
    <Button
    //  onClick={onClick}
     bg="white" // Background color
     color="black" // Text color
     fontSize="lg" // Font size
     fontWeight="bold" // Font weight
     py={6} // Padding (vertical)
     px={12}
     borderRadius="md" // Rounded corners
     boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)" // Shadow
     _hover={{ transform: "scale(1.05)", boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.4)" }} // Hover effect
     _active={{ transform: "scale(0.95)", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }} // Active effect
     _focus={{ outline: "none" }} // Remove focus outline
    >
      JOIN US
    </Button>
  )
}

export default NormalButton