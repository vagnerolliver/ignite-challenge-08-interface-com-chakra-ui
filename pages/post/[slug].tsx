import { Text, Flex, Box, SimpleGrid, Container, VStack, Grid, GridItem } from "@chakra-ui/react"
import React from "react"

import { Header } from "../../components/Header"

export default function Post() {
  return (
    <>
      <Header />

      <Box 
        height="500"
        backgroundImage="/images/banner-post.png"
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
          <Text color="gray.100" fontSize="48px" fontWeight="600" mb={14}>
            Europa
          </Text>
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

      <Container maxWidth={1060} mx="auto" mt={20}>
        <Flex columns={2} spacing={5} align="center" justify="center">
          <Box flex="1" fontSize="24px" textAlign="justify" color="gray.900">
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
                <Text color='gray.900' fontSize="24px" fontWeight="600">países</Text>
              </VStack>
              <VStack>
                <Text color='yellow.300' fontSize="48px" fontWeight="600" lineHeight="10">60</Text>
                <Text color='gray.900' fontSize="24px" fontWeight="600">línguas</Text>
              </VStack>
              <VStack>
                <Text color='yellow.300' fontSize="48px" fontWeight="600" lineHeight="10">27</Text>
                <Text color='gray.900' fontSize="24px" fontWeight="600" m={0}>cidades +100</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Flex>


        <Grid templateColumns='repeat(4, 1fr)' gap={6} my={20}>
          <GridItem w='100%' bg='blue.500'>ssss</GridItem>
          <GridItem w='100%' bg='blue.500'>ss</GridItem>
          <GridItem w='100%' bg='blue.500'>sss</GridItem>
          <GridItem w='100%' bg='blue.500'>ss</GridItem>
          <GridItem w='100%' bg='blue.500'>sss</GridItem>
          <GridItem w='100%' bg='blue.500'>sss</GridItem> 
          <GridItem w='100%' bg='blue.500'>sss</GridItem> 
          <GridItem w='100%' bg='blue.500'>sss</GridItem> 
          <GridItem w='100%' bg='blue.500'>sss</GridItem> 
          <GridItem w='100%' bg='blue.500'>sss</GridItem> 
        </Grid>

      </Container>
    </>
  )
}