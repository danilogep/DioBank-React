import { act, renderHook } from '@testing-library/react'
import { ReactNode } from 'react'
import { AuthProvider, useAuth } from './AuthContext'

const wrapper = ({ children }: { children: ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
)

describe('AuthContext', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('deve iniciar sem usuário autenticado quando não há dados no localStorage', () => {
        const { result } = renderHook(() => useAuth(), { wrapper })
        expect(result.current.isAuthenticated).toBe(false)
        expect(result.current.user).toBeNull()
    })

    it('deve autenticar e persistir no localStorage com credenciais válidas', () => {
        const { result } = renderHook(() => useAuth(), { wrapper })

        act(() => {
            result.current.signIn('danilo@dio.com', '123456')
        })

        expect(result.current.isAuthenticated).toBe(true)
        expect(result.current.user?.email).toBe('danilo@dio.com')
        expect(localStorage.getItem('@DioBank:user')).not.toBeNull()
    })

    it('não deve autenticar com senha incorreta', () => {
        const { result } = renderHook(() => useAuth(), { wrapper })

        act(() => {
            result.current.signIn('danilo@dio.com', 'errada')
        })

        expect(result.current.isAuthenticated).toBe(false)
        expect(localStorage.getItem('@DioBank:user')).toBeNull()
    })

    it('deve carregar o usuário do localStorage ao iniciar', () => {
        const userData = { name: 'Danilo Evangelista', email: 'danilo@dio.com' }
        localStorage.setItem('@DioBank:user', JSON.stringify(userData))

        const { result } = renderHook(() => useAuth(), { wrapper })

        expect(result.current.isAuthenticated).toBe(true)
        expect(result.current.user).toEqual(userData)
    })

    it('deve fazer logout e remover do localStorage', () => {
        const { result } = renderHook(() => useAuth(), { wrapper })

        act(() => {
            result.current.signIn('danilo@dio.com', '123456')
        })
        act(() => {
            result.current.signOut()
        })

        expect(result.current.isAuthenticated).toBe(false)
        expect(localStorage.getItem('@DioBank:user')).toBeNull()
    })
})