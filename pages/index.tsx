import { Box, Flex, Text, Heading ,Image } from "@chakra-ui/react"
import type { NextPage } from 'next'

import { Header } from '../components/Header'
 
const Home: NextPage = () => {
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
                <Heading as='h2' fontSize="36" mb="5" color="gray.100">
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
    </>
  )
}

export default Home
