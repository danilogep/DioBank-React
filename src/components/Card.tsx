import { useState } from 'react'
import {
  Center,
  Input,
  Box,
  VStack,
  Heading,
  Text
} from '@chakra-ui/react'
import { useAuth } from '../contexts/AuthContext'
import { Button } from './Button'

export const Card = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn } = useAuth()

  const handleLogin = () => {
    const result = signIn(email, password)
    if (!result.success) {
      setError(result.message)
      return
    }
    setError('')
  }

  return (
    <Box
      backgroundColor='#FFFFFF'
      borderRadius='25px'
      padding='40px'
      width={['300px', '400px']}
      boxShadow="dark-lg"
    >
      <VStack spacing={6}>
        <Center>
          <Heading as="h2" size="lg" color="purple.700">
            Login
          </Heading>
        </Center>

        <Input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="flushed"
          borderColor="purple.300"
          focusBorderColor="purple.600"
          _placeholder={{ color: 'gray.400' }}
        />

        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="flushed"
          borderColor="purple.300"
          focusBorderColor="purple.600"
          _placeholder={{ color: 'gray.400' }}
        />

        {error && (
          <Text color="red.500" fontSize="sm" alignSelf="flex-start">
            {error}
          </Text>
        )}

        <Center width="100%" paddingTop="10px">
          <Button onClick={handleLogin} />
        </Center>
      </VStack>
    </Box>
  )
}