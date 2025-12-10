import { 
  Box,
  ChakraProvider,
  Flex
} from '@chakra-ui/react'
import { Layout } from './components/Layout'
import { Card } from './components/Card'

function App() {
  return (
    <ChakraProvider>
      <Box 
        minHeight='100vh' 
        bgGradient="linear(to-r, #2a0a4e, #6a0572)" 
        padding='25px'
      >
        <Flex 
          align="center" 
          justify="center" 
          height="100vh"
        >
          <Layout>
            <Card />
          </Layout>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;