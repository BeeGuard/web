import axios, {AxiosResponse} from 'axios'
import {baseUrl} from "@/app/services/global";

export async function login(email: string, password: string): Promise<AxiosResponse<any> | void> {
    const body = {
        username: email,
        password: password
    }

    return await axios.post(`${baseUrl}/app/login`, body)
        .catch(function (error) {
            console.error(error);
        });
}

export async function register(email: string, password: string, token: string) {
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