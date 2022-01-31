import { Text, Flex, Box, SimpleGrid, Container, VStack, Grid, GridItem, Image, Heading } from "@chakra-ui/react"
import React from "react"

import { Header } from "../../components/Header"

export default function Post() {
  return (
    <>
      <Header />

      <Box 
        height="500"
        backgroundImage="/images/post/banner-post.png"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom"
        backgroundSize="cover"
        position="relative"
        align="flex-end"
      > 
        <Flex  
          maxWidth={1060} 
          position="relative" 
          align="flex-end"
          textAlign="left"
          height="100%"
          zIndex="2"
          mx="auto"
        >
          <Heading as="h1" color="light.200" fontSize="48px" fontWeight="600" mb={14}>
            Europa
          </Heading>
        </Flex>

        <Box
          backgroundColor="rgba(28, 20, 1, 0.35)"
          position="absolute"
          height="100%"
          width="100%"
          zIndex="1" 
          right="0"
          top="0"
        />
      </Box>

      <Container maxWidth={1060} mx="auto">
        <Flex columns={2} spacing={5} align="center" justify="center" my={20}>
          <Box flex="1" fontSize="24px" textAlign="justify" color="dark.200">
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, 
            a Europa geralmente divide-se da Ásia a leste pela divisória
            de águas dos montes Urais, o rio Ural, o mar Cáspio, 
            o Cáucaso, e o mar Negro a sudeste
          </Box>
          <Box flex="1">
            <SimpleGrid columns={3}>
              <VStack>
                <Text color='yellow.300' fontSize="48px" fontWeight="600" lineHeight="10">50</Text>
                <Text color='dark.200' fontSize="24px" fontWeight="600">países</Text>
              </VStack>
              <VStack>
                <Text color='yellow.300' fontSize="48px" fontWeight="600" lineHeight="10">60</Text>
                <Text color='dark.200' fontSize="24px" fontWeight="600">línguas</Text>
              </VStack>
              <VStack>
                <Text color='yellow.300' fontSize="48px" fontWeight="600" lineHeight="10">27</Text>
                <Text color='dark.200' fontSize="24px" fontWeight="600" m={0}>cidades +100</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Flex>

        <Heading as="h2" color="dark.200" fontSize="54px" fontWeight="600">
          Cidades +100
        </Heading>

        <Grid templateColumns='repeat(4, 1fr)' gap={6} my={10}>
          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius="4px"
            />
            <Flex 
              justify="space-between" 
              px={5}
              borderLeft='solid' 
              borderLeftWidth="1px"
              borderRightWidth="1px" 
              borderBottomWidth="1px" 
              borderColor="yellow.300"
              borderBottomRadius="4px"
            >
              <Box py={6} fontFamily="Barlow">
                <Text as="strong" color="dark.200" fontSize="20px">Londres</Text>
                <Text as="p" color="dark.300" mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius="4px"
            />
            <Flex 
              justify="space-between" 
              px={5}
              borderLeft='solid' 
              borderLeftWidth="1px"
              borderRightWidth="1px" 
              borderBottomWidth="1px" 
              borderColor="yellow.300"
              borderBottomRadius="4px"
            >
              <Box py={6} fontFamily="Barlow">
                <Text as="strong" color="dark.200" fontSize="20px">Londres</Text>
                <Text as="p" color="dark.300" mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius="4px"
            />
            <Flex 
              justify="space-between" 
              px={5}
              borderLeft='solid' 
              borderLeftWidth="1px"
              borderRightWidth="1px" 
              borderBottomWidth="1px" 
              borderColor="yellow.300"
              borderBottomRadius="4px"
            >
              <Box py={6} fontFamily="Barlow">
                <Text as="strong" color="dark.200" fontSize="20px">Londres</Text>
                <Text as="p" color="dark.300" mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius="4px"
            />
            <Flex 
              justify="space-between" 
              px={5}
              borderLeft='solid' 
              borderLeftWidth="1px"
              borderRightWidth="1px" 
              borderBottomWidth="1px" 
              borderColor="yellow.300"
              borderBottomRadius="4px"
            >
              <Box py={6} fontFamily="Barlow">
                <Text as="strong" color="dark.200" fontSize="20px">Londres</Text>
                <Text as="p" color="dark.300" mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius="4px"
            />
            <Flex 
              justify="space-between" 
              px={5}
              borderLeft='solid' 
              borderLeftWidth="1px"
              borderRightWidth="1px" 
              borderBottomWidth="1px" 
              borderColor="yellow.300"
              borderBottomRadius="4px"
            >
              <Box py={6} fontFamily="Barlow">
                <Text as="strong" color="dark.200" fontSize="20px">Londres</Text>
                <Text as="p" color="dark.300" mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius="4px"
            />
            <Flex 
              justify="space-between" 
              px={5}
              borderLeft='solid' 
              borderLeftWidth="1px"
              borderRightWidth="1px" 
              borderBottomWidth="1px" 
              borderColor="yellow.300"
              borderBottomRadius="4px"
            >
              <Box py={6} fontFamily="Barlow">
                <Text as="strong" color="dark.200" fontSize="20px">Londres</Text>
                <Text as="p" color="dark.300" mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>
        </Grid>

      </Container>
    </>
  )
}