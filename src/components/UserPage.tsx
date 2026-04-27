import {
  Box,
  Heading,
  Text,
  VStack,
  Avatar,
  Button as ChakraButton,
  Flex
} from '@chakra-ui/react'
import { useAuth } from '../contexts/AuthContext'

export const UserPage = () => {
  const { user, signOut } = useAuth()

  if (!user) return null

  return (
    <Box
      backgroundColor='#FFFFFF'
      borderRadius='25px'
      padding='40px'
      width={['320px', '450px']}
      boxShadow="dark-lg"
    >
      <VStack spacing={6}>
        <Avatar name={user.name} size="xl" bg="purple.600" color="white" />

        <Heading as="h2" size="lg" color="purple.700">
          Bem vindo(a)!
        </Heading>

        <Flex direction="column" align="center" gap={1}>
          <Text fontSize="xl" fontWeight="bold" color="gray.700">
            {user.name}
          </Text>
          <Text fontSize="md" color="gray.500">
            {user.email}
          </Text>
        </Flex>

        <ChakraButton
          onClick={signOut}
          colorScheme='purple'
          variant='outline'
          size='lg'
          width='100%'
          borderRadius='full'
          marginTop='10px'
        >
          Sair
        </ChakraButton>
      </VStack>
    </Box>
  )
}