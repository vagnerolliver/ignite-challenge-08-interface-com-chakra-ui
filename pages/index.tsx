import { Box, Flex, Text, Heading ,Image, SimpleGrid, VStack, Center, Divider, Container } from "@chakra-ui/react"
import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

const Home: NextPage = (): JSX.Element => {
  
  const slides = [
    { 
      src: '/images/slider/img1.png',
      title: 'Europa',
      subtitle: 'O continente mais antigo'
    },
    { 
      src: '/images/slider/img2.jpeg',
      title: 'Africa',
      subtitle: 'O continente mais moderno'
    },
    { 
      src: '/images/slider/img3.jpeg',
      title: 'América',
      subtitle: 'O continente mais rico'
    }
  ]

  return (
    <>
      <Header />
      <Box
        backgroundImage="url('/images/bg-banner-repeat.png')"
        backgroundPosition="left"
        backgroundRepeat="repeat-x"
      >
        <Box
          backgroundImage="url('/images/bg-banner-home.svg')"
          backgroundPosition="left"
          backgroundRepeat="no-repeat"
        >
          <Flex 
            maxW="1160" 
            align="center"
            justify="space-around" 
            height="368"
            mx="auto" 
            w="100%" 
          >
            <Box w="100%" maxW="430" mt="8">
              <Heading as='h2' fontSize="36" mb={6} color="gray.100">
                5 Continentes,
                infinitas possibilidades.
              </Heading>
              <Text fontSize="20" color='gray.300'>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>

            <Box w="100%" textAlign="right" alignSelf="flex-end" pr="4">
              <Image src='/images/airplane-banner-home.svg' width="417px" ml="auto" alt='Airplane' />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Container maxWidth={1060} mx="auto" mt="100">
        <SimpleGrid columns={5} spacing={4} align="center">
          <VStack spacing={6}>
            <Image src='/images/cocktail.svg' width="85" height="85" alt='Cocktail' mx="auto" />
            <Text color='gray.900' fontSize="24" fontWeight="600">vida noturna</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src='/images/surf.svg' width="85" height="85" alt='Surf' mx="auto" />
            <Text color='gray.900' fontSize="24" fontWeight="600">praia</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src='/images/building.svg' width="85" height="85" alt='Building' mx="auto" />
            <Text color='gray.900' fontSize="24" fontWeight="600">moderno</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src='/images/museum.svg' width="85" height="85" alt='Museum' mx="auto" />
            <Text color='gray.900' fontSize="24" fontWeight="600">clássico</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src='/images/earth.svg' width="85" height="85" alt='Earth' mx="auto" />
            <Text color='gray.900' fontSize="24" fontWeight="600">e mais...</Text>
          </VStack>
        </SimpleGrid>
   

        <Center height='125'>
          <Divider orientation='horizontal' maxWidth={90} borderColor='gray.900'/>
        </Center>

        <Heading 
          as="h2" 
          textAlign="center" 
          fontSize="36" 
          fontWeight='400' 
          color="gray.900"
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
