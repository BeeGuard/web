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

export function SignUp() {

}