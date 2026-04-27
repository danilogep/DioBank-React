import { login } from './login'

describe('login', () => {
    it('deve retornar erro quando o e-mail estiver vazio', () => {
        const result = login('', '123456')
        expect(result.success).toBe(false)
        expect(result.message).toBe('E-mail e senha são obrigatórios')
    })

    it('deve retornar erro quando a senha estiver vazia', () => {
        const result = login('danilo@dio.com', '')
        expect(result.success).toBe(false)
        expect(result.message).toBe('E-mail e senha são obrigatórios')
    })

    it('deve retornar erro quando o usuário não existe', () => {
        const result = login('inexistente@dio.com', '123456')
        expect(result.success).toBe(false)
        expect(result.message).toBe('Usuário não encontrado')
    })

    it('deve retornar erro quando a senha está incorreta', () => {
        const result = login('danilo@dio.com', 'senhaerrada')
        expect(result.success).toBe(false)
        expect(result.message).toBe('Senha incorreta')
    })

    it('deve retornar sucesso e os dados do usuário com credenciais corretas', () => {
        const result = login('danilo@dio.com', '123456')
        expect(result.success).toBe(true)
        expect(result.user).toEqual({
            name: 'Danilo Evangelista',
            email: 'danilo@dio.com'
        })
    })
})