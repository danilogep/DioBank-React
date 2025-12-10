import { Heading, Text, Flex } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Flex direction="column" align="center" marginBottom="20px">
      <Heading color="#FFFFFF" fontSize="4xl" fontWeight="bold">
        Dio Bank
      </Heading>
      <Text color="whiteAlpha.800" fontSize="md">
        O banco para quem quer ser dev
      </Text>
    </Flex>
  )
}