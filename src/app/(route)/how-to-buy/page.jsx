"use client"

import { Box, Heading, Text, VStack, HStack, Flex, Icon, Divider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import images from '../../assets/images';

export default function HowToBuy() {
    return (
        <Box
            bgImage={`url(${images.howToBuyPageBg})`} // Replace with your background image path
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            minH="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            color="white"
        >
            {/* Header Section */}
            <VStack mt={8} spacing={2} textAlign="center">
                <Heading as="h1" size="2xl" color="yellow.400" textShadow="2px 2px black">
                    How To Buy
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                    INSTRUCTIONS
                </Text>
                <Text fontSize="sm" color="gray.300">
                    Interactive Dialogue in Progress
                </Text>
                <ChevronDownIcon boxSize={8} color="white" />
            </VStack>

            {/* Main Section */}
            <Flex
                direction="column"
                alignItems="center"
                bg="blackAlpha.800"
                border="2px solid yellow"
                borderRadius="lg"
                p={6}
                w={{ base: '90%', md: '80%', lg: '60%' }}
                maxW="600px"
                boxShadow="lg"
            >
                {/* Speech Bubble Top */}
                <Box
                    bg="white"
                    border="2px solid black"
                    borderRadius="md"
                    p={4}
                    mb={4}
                    alignSelf="flex-start"
                    position="relative"
                    _before={{
                        content: `''`,
                        position: 'absolute',
                        bottom: '-10px',
                        left: '20px',
                        borderWidth: '10px',
                        borderStyle: 'solid',
                        borderColor: 'white transparent transparent transparent',
                    }}
                >
                    <Text fontSize="sm" color="black">
                        First step to buy...
                    </Text>
                </Box>

                {/* Character Top */}
                <Box
                    bgImage="url('/path-to-character-1.jpg')" // Replace with character image
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgPos="center"
                    w="60px"
                    h="60px"
                    alignSelf="flex-start"
                    ml="auto"
                    mb={4}
                />

                {/* Speech Bubble Bottom */}
                <Box
                    bg="white"
                    border="2px solid black"
                    borderRadius="md"
                    p={4}
                    mt={4}
                    alignSelf="flex-end"
                    position="relative"
                    _before={{
                        content: `''`,
                        position: 'absolute',
                        top: '-10px',
                        right: '20px',
                        borderWidth: '10px',
                        borderStyle: 'solid',
                        borderColor: 'transparent transparent white transparent',
                    }}
                >
                    <Text fontSize="sm" color="black">
                        Second step to buy...
                    </Text>
                </Box>

                {/* Character Bottom */}
                <Box
                    bgImage="url('/path-to-character-2.jpg')" // Replace with character image
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgPos="center"
                    w="60px"
                    h="60px"
                    alignSelf="flex-end"
                    mt={4}
                />
            </Flex>

            {/* Footer Section */}
            
        </Box>
    );
}
