import { Text, Flex, Box } from "@chakra-ui/react"

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
    </>
  )
}