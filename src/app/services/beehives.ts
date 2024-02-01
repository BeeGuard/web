import axios from "axios";
import {baseUrl} from "@/app/services/global";

export async function beehives() {
    const token = localStorage.getItem('token');

    return await axios.get(`${baseUrl}/app/hives`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(function (error) {
            console.error(error);
        });
}

export async function createBeehive(name: string) {
    const token = localStorage.getItem('token');

    const body = {
        name
    }

    return await axios.post(`${baseUrl}/app/create-hive`, body, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(function (error) {
            console.error(error);
        });
}

export async function beehive(id: string) {
    const token = localStorage.getItem('token');

    return await axios.get(`${baseUrl}/app/hive/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(function (error) {
            console.error(error);
        });
}