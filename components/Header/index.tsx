import { Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h="100"
      maxWidth={1480}
      mx="auto"
      w="100%"
    >
      <Image src='/images/logo.svg' alt='Logo' />
    </Flex>
  );
}
