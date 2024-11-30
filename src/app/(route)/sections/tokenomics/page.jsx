'use client';

import React from 'react';
import {
  SimpleGrid,
  Box,
  Heading,
  Icon,
  Tooltip,
  useToast,
  Button,
  Text,
} from '@chakra-ui/react';
import { TokenomicsCard } from '../../../components/componentsBarrel';
import images from '../../../assets/images';
import { FiCopy } from 'react-icons/fi';

/**
 * TokenomicsPage Component
 *
 * This component displays a grid of TokenomicsCard components, each representing
 * a different aspect of the tokenomics structure. The data for each card (title,
 * percentage, and image) is provided in the tokenomicsData array, allowing for easy
 * customization or expansion if additional cards are needed.
 *
 * This component is designed to be rendered on the tokenomics page, providing a
 * visually appealing breakdown of the token distribution or other tokenomics details.
 *
 * @returns {JSX.Element} A grid layout of TokenomicsCard components, spaced and responsive
 *                        to adapt to various screen sizes.
 */

const TokenomicsSection = () => {
  // useToast Initilaization
  const toast = useToast();

  // Array of tokenomics data to be displayed on the page, with each object representing a card's content.
  const tokenomicsData = [
    {
      title: 'MAX SUPPLY',
      percentage: '500 Trillion CYC',
      imageSrc: images.cyrocoinDistribution,
    },
    {
      title: 'LIQUIDITY POOL',
      percentage: '90%',
      imageSrc: images.liquidityPool,
    },
    {
      title: 'DAO TREASURY',
      percentage: '5%',
      imageSrc: images.treasuryImage,
    },
    {
      title: 'CREATORS',
      percentage: '5%',
      imageSrc: images.creatorsImage,
    },
  ];

  //  Use toast After Successful Copy: In the handdleCOpyAddress fun

  // Token Address
  const tokenAddress = '0xYourTokenAddressHere';

  /** Copies the token address to the clipboard and provides user feedback  via a toast notification
   *  indicating whether the copy action was successful or not.
   * */

  const handleCopyAddress = () => {
    console.log('Copy icon clicked');
    // Clipboard Write Operation
    /**
     *  navigator.clipboard.writeText(tokenAddress): Uses the Clipboard API's `writeText`
     *  method to copy the `tokenAddress` string to the clipboard.  `navigator.clipboard`
     *  provides an asynchronous way to access the clipboard, and writeText accepts the text
     *  you want to copy.
     *
     */

    /**
     * Attaches a `then` method to handle the successful case. If the copy operation succeeds,
     * the code inside this then block will execute.
     *
     */

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(tokenAddress)
        .then(() => {
          toast({
            title: 'Copied to clipboard',
            description: 'Token address has been copied!',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error('Failed to copy with Clipboard API:', error);
          fallbackCopyTextToClipboard(tokenAddress);
        });
    } else {
      fallbackCopyTextToClipboard(tokenAddress);
    }
  };

  // TokenomicsSection structure and styles
  return (
    <Box
      position="relative"
      p={8}
      overflow="hidden"
      color="white"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Background Video */}
      <video
        src="/assets/videos/cyronmics_bg.mp4" // Direct URL reference from the public directory
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
        }}
      />

      {/* Overlay to further darken the background and improve readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.2)"
        zIndex={0}
      />

      {/* Section Content  */}
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        mb={6}
        zIndex={4}
        color="white"
      >
        Tokenomics Overview
      </Heading>

      {/* Centered Tokenomics Cards */}
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={6}
          justifyContent="center"
          alignItems="center"
        >
          {/* Mapping tokenomicsData to Render TokenomicsCard Components */}
          {tokenomicsData.map((data, index) => (
            <TokenomicsCard
              key={index}
              title={data.title}
              percentage={data.percentage}
              imageSrc={data.imageSrc}
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Token Address footer text  */}
      <Box mt={6} zIndex={1}>
        <Tooltip label="Click to copy" aria-label="A tooltip">
          <Button
            variant="ghost"
            as="span"
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={handleCopyAddress}
            p={0}
            background="transparent"
            color="yellow.400"
            _hover={{ backgroundColor: 'transparent', color: 'yellow.300' }}
          >
            <Text fontSize="24px" fontWeight="bold">{`[ Token Address ]`}</Text>
            <Icon as={FiCopy} ml={2} color="white" />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TokenomicsSection;
