import { Flex, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link' 

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
      <NextLink href="/" passHref>
        <Link>
          <Image src='/images/logo.svg' alt='Logo' />
        </Link>
      </NextLink>
    </Flex>
  );
}
