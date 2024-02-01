'use client'

import Input from "@/app/ui/input/input";
import Button from "@/app/ui/button/button";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {Loader} from "@/app/ui/loader/loader";
import './page.css';
import {beehive} from "@/app/services/beehives";
import {updateThreshold} from "@/app/services/alert";

export default function Beehive({params}: { params: { id: string } }) {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const [hive, setHive] = useState<any>({})

    useEffect(() => {
        beehive(params.id)
            .then((response: any) => {
                setLoading(false)
                setHive(response?.data)
                console.log(response?.data)
            })
    }, [params])


    async function onSubmit(event: any) {
        event.preventDefault()
        setLoading(true)
        const data = {
            lowerTemp: event?.target.tempMin?.value,
            upperTemp: event?.target.tempMax?.value,
            lowerHumidity: event?.target.humMin?.value,
            upperHumidity: event?.target.humMax?.value,
            lowerWeight: event?.target.weiMin?.value,
            upperWeight: event?.target.weiMax?.value
        }
        await updateThreshold(data, hive.id)
        setLoading(false)
        router.push('/beekeeper/alerts')
    }

    return (
        <main className='alert-beehive'>
            <form onSubmit={onSubmit}>
                <p className='title'>Modification des seuils de la ruche : {hive?.name}</p>
                <div className={'grid grid-cols-4 mb-4'}>
                    <div className='beehive-properties col-span-2'>
                        <b>Température</b>
                        <div className='flex flex-row justify-center items-center'>
                            <Input
                                id={'temp-min'}
                                type={'text'}
                                label={'Minimum'}
                                name={'tempMin'}
                                placeholder={hive?.threshold?.lowerTemp?.toString()}
                                defaultValue={hive?.threshold?.lowerTemp}
                            />
                            <Input
                                id={'temp-max'}
                                type={'text'}
                                label={'Maximum'}
                                name={'tempMax'}
                                placeholder={hive?.threshold?.upperTemp?.toString()}
                                defaultValue={hive?.threshold?.upperTemp}
                            />
                        </div>
                    </div>
                    <div className='beehive-properties col-span-2'>
                        <b>Humidité</b>
                        <div className='flex flex-row justify-center items-center'>
                            <Input
                                id={'hum-min'}
                                type={'text'}
                                label={'Minimum'}
                                name={'humMin'}
                                placeholder={hive?.threshold?.lowerHumidity?.toString()}
                                defaultValue={hive?.threshold?.lowerHumidity}
                            />
                            <Input
                                id={'temp-max'}
                                type={'text'}
                                label={'Maximum'}
                                name={'humMax'}
                                placeholder={hive?.threshold?.upperHumidity.toString()}
                                defaultValue={hive?.threshold?.upperHumidity}
                            />
                        </div>
                    </div>
                    <div className='beehive-properties col-span-2'>
                        <b>Poids</b>
                        <div className='flex flex-row justify-center items-center'>
                            <Input
                                id={'wei-min'}
                                type={'text'}
                                label={'Minimum'}
                                name={'weiMin'}
                                placeholder={hive?.threshold?.lowerWeight?.toString()}
                                defaultValue={hive?.threshold?.lowerWeight}
                            />
                            <Input
                                id={'temp-max'}
                                type={'text'}
                                label={'Maximum'}
                                name={'weiMax'}
                                placeholder={hive?.threshold?.upperWeight?.toString()}
                                defaultValue={hive?.threshold?.upperWeight}
                            />
                        </div>
                    </div>
                </div>
                <Button type={'submit'} value={'Valider'} disable={loading}/>
            </form>
            {loading && <Loader/>}
        </main>
    )
}