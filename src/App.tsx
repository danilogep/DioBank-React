import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { Layout } from './components/Layout'
import { Card } from './components/Card'
import { UserPage } from './components/UserPage'
import { AuthProvider, useAuth } from './contexts/AuthContext'

const AppContent = () => {
  const { isAuthenticated } = useAuth()
  return (
    <Layout>
      {isAuthenticated ? <UserPage /> : <Card />}
    </Layout>
  )
}

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Box
          minHeight='100vh'
          bgGradient="linear(to-r, #2a0a4e, #6a0572)"
          padding='25px'
        >
          <Flex align="center" justify="center" height="100vh">
            <AppContent />
          </Flex>
        </Box>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App