import axios, {AxiosResponse} from 'axios'

const baseUrl = 'http://api.pnapi.thibaulthenrion.com/api'

export interface LoginResponse {
    token: string
    type: string
    username: string
    email: string
    roles: string[]
}

export async function Login(email: string, password: string): Promise<AxiosResponse<any> | void> {
    const body = {
        username: email,
        password: password
    }

    return await axios.post(`${baseUrl}/app/login`, body)
        .catch(function (error) {
            console.error(error);
        });
}

export async function Register(email: string, password: string, token: string) {
    const body = {
        email: email,
        password: password,
        authCode: token
    }

    return await axios.post(`${baseUrl}/app/register`, body)
        .catch(function (error) {
            console.error(error);
        });
}