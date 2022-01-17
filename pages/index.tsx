import { Box, Flex } from "@chakra-ui/react"
import type { NextPage } from 'next'

import { Header } from '../components/Header'
 
const Home: NextPage = () => {
  return (
    <>
      <Header />
        <Flex
          backgroundImage="url('/images/bg-banner-home.svg')"
          backgroundPosition="left"
          backgroundRepeat="repeat-x"
          height="368"
        >
        
        </Flex>
    </>
  )
}

export default Home
