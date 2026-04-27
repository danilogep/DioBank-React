interface IUser {
    name: string
    email: string
    password: string
}

// "Banco de dados" simulado — em produção viria de uma API
const USERS: IUser[] = [
    { name: 'Danilo Evangelista', email: 'danilo@dio.com', password: '123456' }
]

export interface ILoggedUser {
    name: string
    email: string
}

export interface ILoginResult {
    success: boolean
    user?: ILoggedUser
    message: string
}

export const login = (email: string, password: string): ILoginResult => {
    if (!email || !password) {
        return { success: false, message: 'E-mail e senha são obrigatórios' }
    }

    const user = USERS.find(u => u.email === email)

    if (!user) {
        return { success: false, message: 'Usuário não encontrado' }
    }

    if (user.password !== password) {
        return { success: false, message: 'Senha incorreta' }
    }

    return {
        success: true,
        user: { name: user.name, email: user.email },
        message: 'Bem vindo(a)!'
    }
}