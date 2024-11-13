import React from 'react'
import { Box, Heading, Text, VStack, Button, Image, Flex } from "@chakra-ui/react";



const About
 = () => {
  return (
   <Box
    id="about"
    bg="yellow.100"
    py={16}
    px={8}
    display="flex"
    justifyContent="center"
   >
    {/* Card Container */}
   <Flex
   direction="row"
   alignItems="center"
   bg="white"
   borderRadius="lg"
   boxShadow="xl"
   p={8}
   maxW="4xl"
   w="100%"
   position="relative"  
   >
    {/* Text Content */}
    <VStack align="start" spacing={4} flex="1">
      <Heading as="h3" fontSize="2xl" fontWeight="bold">
       placeholder
      </Heading>
      <Text fontSize="lg" color="gray.700">
        placeholder
      </Text>
      <Text fontSize="lg" color="gray.700">
        Our mission is to inspire and empower individuals with secure and innovative solutions
      </Text>

      {/* Signature */}
      <Text fontSize="lg" fontStyle="italic" color="gray.500">
      — Cyroman
      </Text>

      {/* Read More Button */}
      <Button colorScheme="yellow" variant="solid" mt={4}>

      </Button>
    </VStack>

    {/* CoinMaster Character Image */}
    <Box flex="0.5" display="flex" justifyContent="center" alignItems="center" ml={4}>
    <Image
    src=""
    alt="CoinMaster"
    boxSize="150px"
    objectFit="cover"
    />
    </Box>
   </Flex>

   </Box>


  )
}

export default About


/**
 *  Background Color and Card Layout: 
 * 
 *  Text and Heading 
 * 
 *  Character Image (Cyroman)
 * 
 *  Button ("READ MORE")
 * 
 *  Signature("-- Cyrocman")
 * 
 * 
 * 
 */