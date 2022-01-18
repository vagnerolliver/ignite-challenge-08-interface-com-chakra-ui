import { Box, Flex, Text, Heading } from "@chakra-ui/react"
import type { NextPage } from 'next'

import { Header } from '../components/Header'
 
const Home: NextPage = () => {
  return (
    <>
      <Header />
        <Box
          backgroundImage="url('/images/bg-banner-home.svg')"
          backgroundPosition="left"
          backgroundRepeat="repeat-x"
          height="368"
        >
          <Flex w="100%" maxWidth="1160" mx="auto" align="center" height="368">
            <Box w="100%" maxWidth="430">
              <Heading as='h2' fontSize="36" mb="5" mt="8" color="gray.100">
                5 Continentes,
                infinitas possibilidades.
              </Heading>
              <Text fontSize="20" color='gray.300'>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>
          </Flex>
        </Box>
    </>
  )
}

export default Home
