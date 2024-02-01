import axios from "axios";
import {baseUrl} from "@/app/services/global";

export async function updateThreshold(threshold: any, id: string) {
    const token = localStorage.getItem('token');


    return await axios.post(`${baseUrl}/app/set-thresholds/${id}`, threshold, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(function (error) {
            console.error(error);
        });
}