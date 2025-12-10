import { 
  Center,
  Input,
  Box,
  VStack,
  Heading
} from '@chakra-ui/react'
import { login } from '../services/login'
import { Button } from './Button'

export const Card = () => {
  return(
    <Box 
      backgroundColor='#FFFFFF' 
      borderRadius='25px' 
      padding='40px'
      width={['300px', '400px']} // Responsivo: maior em telas grandes
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
          variant="flushed" 
          borderColor="purple.300" 
          focusBorderColor="purple.600"
          _placeholder={{ color: 'gray.400' }}
        />
        
        <Input 
          placeholder="Senha" 
          type="password" 
          variant="flushed" 
          borderColor="purple.300"
          focusBorderColor="purple.600"
          _placeholder={{ color: 'gray.400' }}
        />
        
        <Center width="100%" paddingTop="10px">
          <Button onClick={login} />
        </Center>
      </VStack>
    </Box>
  )
}