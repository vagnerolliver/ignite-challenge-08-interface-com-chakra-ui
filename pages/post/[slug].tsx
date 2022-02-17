import { Text, Flex, Box, SimpleGrid, Container, VStack, Grid, GridItem, Image, Heading } from '@chakra-ui/react'
import React from 'react'

import { Header } from '../../components/Header'

export default function Post() {
  return (
    <>
      <Header />

      <Box 
        backgroundImage='/images/post/banner-post.png'
        height={{ base: '150px', md: '500' }}
        backgroundRepeat='no-repeat'
        backgroundPosition='bottom'
        backgroundSize='cover'
        position='relative'
      > 
        <Flex  
          position='relative' 
          textAlign='left'
          align={{ base: 'center', md: 'flex-end' }}
          justifyContent={{ base: 'center', md: 'flex-start' }}
          maxWidth={1060} 
          height='100%'
          zIndex='2'
          mx='auto'
        >
          <Heading 
            fontSize={{ base: '28px', md: '48px' }} 
            mb={{base: 0, md: 14 }}
            color='light.200' 
            fontWeight='600' 
            as='h1' 
          >
            Europa
          </Heading>
        </Flex>

        <Box
          backgroundColor='rgba(28, 20, 1, 0.35)'
          position='absolute'
          height='100%'
          width='100%'
          zIndex='1' 
          right='0'
          top='0'
        />
      </Box>

      <Container maxWidth={1060} mx='auto'>
        <Flex 
          flexDirection={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md:'center' }} 
          my={{ base: 6, md:  20 }}
          justify='center' 
          spacing={5} 
        >
          <Box  
            fontSize={{ base: '14px', md: '24px' }} 
            mb={{ base: 8, md: 0 }} 
            textAlign='justify' 
            color='dark.200'
            flex='1'
          >
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, 
            a Europa geralmente divide-se da Ásia a leste pela divisória
            de águas dos montes Urais, o rio Ural, o mar Cáspio, 
            o Cáucaso, e o mar Negro a sudeste
          </Box>
          <Box flex='1'>
            <SimpleGrid columns={3}>
              <VStack align="flex-start">
                <Text 
                  fontSize={{ base: '24px', md: '48px' }} 
                  lineHeight={{ base: .5, md: '10'}}
                  color='yellow.300' 
                  fontWeight='600' 
                >
                  50
                </Text>
                <Text color='dark.200' fontSize={{ base: '18px', md: '24px' }} fontWeight='600'>países</Text>
              </VStack>
              <VStack align="flex-start">
                <Text 
                   fontSize={{ base: '24px', md: '48px' }} 
                   lineHeight={{ base: .5, md: '10'}}
                   color='yellow.300' 
                   fontWeight='600' 
                >
                  60
                </Text>
                <Text color='dark.200' fontSize={{ base: '18px', md: '24px' }} fontWeight='600'>línguas</Text>
              </VStack>
              <VStack align="flex-start">
                <Text 
                  fontSize={{ base: '24px', md: '48px' }} 
                  lineHeight={{ base: .5, md: '10'}}
                  color='yellow.300' 
                  fontWeight='600'
                >
                  27
                </Text>
                <Text color='dark.200' fontSize={{ base: '18px', md: '24px' }} fontWeight='600' m={0}>cidades +100</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Flex>

        <Heading 
          as='h2' 
          color='dark.200' 
          fontSize={{ base: '24px', md: '54px' }} 
          fontWeight='600'
        >
          Cidades +100
        </Heading>

        <Grid 
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
          px={{ base: 10 }}
          gap={6} 
          my={{ base: 6, md: 10 }}
        >
          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius='4px'
            />
            <Flex 
              justify='space-between' 
              px={5}
              borderLeft='solid' 
              borderLeftWidth='1px'
              borderRightWidth='1px' 
              borderBottomWidth='1px' 
              borderColor='yellow.300'
              borderBottomRadius='4px'
            >
              <Box py={6} fontFamily='Barlow'>
                <Text as='strong' color='dark.200' fontSize='20px'>Londres</Text>
                <Text as='p' color='dark.300' mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius='4px'
            />
            <Flex 
              justify='space-between' 
              px={5}
              borderLeft='solid' 
              borderLeftWidth='1px'
              borderRightWidth='1px' 
              borderBottomWidth='1px' 
              borderColor='yellow.300'
              borderBottomRadius='4px'
            >
              <Box py={6} fontFamily='Barlow'>
                <Text as='strong' color='dark.200' fontSize='20px'>Londres</Text>
                <Text as='p' color='dark.300' mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius='4px'
            />
            <Flex 
              justify='space-between' 
              px={5}
              borderLeft='solid' 
              borderLeftWidth='1px'
              borderRightWidth='1px' 
              borderBottomWidth='1px' 
              borderColor='yellow.300'
              borderBottomRadius='4px'
            >
              <Box py={6} fontFamily='Barlow'>
                <Text as='strong' color='dark.200' fontSize='20px'>Londres</Text>
                <Text as='p' color='dark.300' mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius='4px'
            />
            <Flex 
              justify='space-between' 
              px={5}
              borderLeft='solid' 
              borderLeftWidth='1px'
              borderRightWidth='1px' 
              borderBottomWidth='1px' 
              borderColor='yellow.300'
              borderBottomRadius='4px'
            >
              <Box py={6} fontFamily='Barlow'>
                <Text as='strong' color='dark.200' fontSize='20px'>Londres</Text>
                <Text as='p' color='dark.300' mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius='4px'
            />
            <Flex 
              justify='space-between' 
              px={5}
              borderLeft='solid' 
              borderLeftWidth='1px'
              borderRightWidth='1px' 
              borderBottomWidth='1px' 
              borderColor='yellow.300'
              borderBottomRadius='4px'
            >
              <Box py={6} fontFamily='Barlow'>
                <Text as='strong' color='dark.200' fontSize='20px'>Londres</Text>
                <Text as='p' color='dark.300' mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>

          <GridItem w='100%'>
            <Image 
              src='/images/post/city.jpeg' 
              alt='Europa' 
              borderTopRadius='4px'
            />
            <Flex 
              justify='space-between' 
              px={5}
              borderLeft='solid' 
              borderLeftWidth='1px'
              borderRightWidth='1px' 
              borderBottomWidth='1px' 
              borderColor='yellow.300'
              borderBottomRadius='4px'
            >
              <Box py={6} fontFamily='Barlow'>
                <Text as='strong' color='dark.200' fontSize='20px'>Londres</Text>
                <Text as='p' color='dark.300' mt={2}>Reino Unido</Text>
              </Box>
              <Image src='/images/post/country-flag.svg' alt='Europa'/>
            </Flex>
          </GridItem>
        </Grid>

      </Container>
    </>
  )
}