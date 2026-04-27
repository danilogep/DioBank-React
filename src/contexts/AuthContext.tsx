import { createContext, ReactNode, useContext, useState } from 'react'
import { login as loginService } from '../services/login'

interface IUser {
    name: string
    email: string
}

interface IAuthContext {
    user: IUser | null
    isAuthenticated: boolean
    signIn: (email: string, password: string) => { success: boolean; message: string }
    signOut: () => void
}

const STORAGE_KEY = '@DioBank:user'

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // Inicializa lendo do localStorage — se já estiver logado, não exibe a tela de login
    const [user, setUser] = useState<IUser | null>(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : null
    })

    const signIn = (email: string, password: string) => {
        const result = loginService(email, password)

        if (result.success && result.user) {
            setUser(result.user)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(result.user))
        }

        return { success: result.success, message: result.message }
    }

    const signOut = () => {
        setUser(null)
        localStorage.removeItem(STORAGE_KEY)
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider')
    }
    return context
}