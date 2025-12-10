import { Button as ChakraButton } from '@chakra-ui/react'

interface IButton {
    onClick: () => void
}

export const Button = ({ onClick }: IButton) => {
    return (
        <ChakraButton 
            onClick={onClick} 
            colorScheme='purple' 
            size='lg' 
            width='100%' 
            borderRadius="full"
            _hover={{ bg: 'purple.600', transform: 'scale(1.02)' }}
            _active={{ bg: 'purple.700' }}
            marginTop='10px'
            boxShadow="md"
        >
            Entrar
        </ChakraButton>
    )
}