import { Box, Flex, Text, Heading ,Image, SimpleGrid, VStack, Center, Divider, Container, useBreakpointValue, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

const Home: NextPage = (): JSX.Element => {
  
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true
  })

  const slides = [
    { 
      src: '/images/home/slider/img1.png',
      title: 'Europa',
      subtitle: 'O continente mais antigo'
    },
    { 
      src: '/images/home/slider/img2.jpeg',
      title: 'Africa',
      subtitle: 'O continente mais moderno'
    },
    { 
      src: '/images/home/slider/img3.jpeg',
      title: 'América',
      subtitle: 'O continente mais rico'
    }
  ]

  return (
    <>
      <Header />

      <Box
        backgroundImage='url("/images/home/bg-banner-repeat.png")'
        backgroundRepeat='repeat-x'
        backgroundPosition='left'
      >
        <Box
          backgroundImage='url("/images/home/bg-banner-home.svg")'
          backgroundRepeat='no-repeat'
          backgroundPosition='left'
        >
          <Flex 
            height={{ base:'163px', md:'368' }}
            justify={{ md: 'space-around' }}
            paddingLeft={5}
            align='center'
            maxW='1160' 
            mx='auto' 
            w='100%' 
          >
            <Box w='100%' maxW='430' mt={{ md:'8' }}>
              <Heading 
                fontSize={{ base: '20px', md: '36px' }} 
                mb={{ base:2, md:6 }}
                color='light.200'
                as='h2' 
              >
                5 Continentes,
                infinitas possibilidades.
              </Heading>
              <Text fontSize={{ base: '14px', md: '20px' }} color='light.300'>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>

            <Box 
              display={{ base: 'none', md: 'flex' }}
              alignSelf='flex-end' 
              textAlign='right' 
              w='100%' 
              pr='4' 
            >
              <Image src='/images/home/airplane-banner-home.svg' width='417px' ml='auto' alt='Airplane' />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Container maxWidth={1060} mx='auto' mt={{base:10, md:20}}>
        { isDesktopVersion 
            ? 
              <SimpleGrid columns={5} spacing={4} align='center'>
                <VStack spacing={6}>
                  <Image src='/images/home/cocktail.svg' width='85' height='85' alt='Cocktail' mx='auto' />
                  <Text color='dark.200' fontSize='24' fontWeight='600'>vida noturna</Text>
                </VStack>
                <VStack spacing={6}>
                  <Image src='/images/home/surf.svg' width='85' height='85' alt='Surf' mx='auto' />
                  <Text color='dark.200' fontSize='24' fontWeight='600'>praia</Text>
                </VStack>
                <VStack spacing={6}>
                  <Image src='/images/home/building.svg' width='85' height='85' alt='Building' mx='auto' />
                  <Text color='dark.200' fontSize='24' fontWeight='600'>moderno</Text>
                </VStack>
                <VStack spacing={6}>
                  <Image src='/images/home/museum.svg' width='85' height='85' alt='Museum' mx='auto' />
                  <Text color='dark.200' fontSize='24' fontWeight='600'>clássico</Text>
                </VStack>
                <VStack spacing={6}>
                  <Image src='/images/home/earth.svg' width='85' height='85' alt='Earth' mx='auto' />
                  <Text color='dark.200' fontSize='24' fontWeight='600'>e mais...</Text>
                </VStack>
              </SimpleGrid> 
            : 
              <>
                <Flex justify='space-around' mb={8}>
                  <HStack spacing={2}>
                    <Box width={2} height={2} backgroundColor='yellow.300' display='inline-block' borderRadius='50%' />
                    <Text color='dark.200' fontSize='24' fontWeight='600'>vida noturna</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Box as='span' width={2} height={2} backgroundColor='yellow.300' display='inline-block' borderRadius='50%' />
                    <Text color='dark.200' fontSize='24' fontWeight='600'>praia</Text>
                  </HStack>
                </Flex>

                <Flex justify='space-around' mb={8}>
                  <HStack spacing={2}>
                    <Box as='span' width={2} height={2} backgroundColor='yellow.300' display='inline-block' borderRadius='50%' />
                    <Text color='dark.200' fontSize='24' fontWeight='600'>moderno</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Box as='span' width={2} height={2} backgroundColor='yellow.300' display='inline-block' borderRadius='50%' />
                    <Text color='dark.200' fontSize='24' fontWeight='600'>clássico</Text>
                  </HStack>
                </Flex>

                <Flex justify='center'>
                  <HStack spacing={2}>
                    <Box as='span' width={2} height={2} backgroundColor='yellow.300' display='inline-block' borderRadius='50%' />
                    <Text color='dark.200' fontSize='24' fontWeight='600'>e mais...</Text>
                  </HStack>
                </Flex>
              </>
        }

        <Center height={{ base:20, md: '125px' }}>
          <Divider orientation='horizontal' maxWidth={90} borderColor='dark.200'/>
        </Center>

        <Heading 
          as='h2' 
          textAlign='center' 
          fontSize='36' 
          fontWeight='400' 
          color='dark.200'
          mb={12}
        > 
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>

        <Slider slides={slides} />

        <Box mb={10} />
      </Container>
    </>
  )
}

export default Home
