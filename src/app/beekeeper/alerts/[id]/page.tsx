'use client'

import Input from "@/app/ui/input/input";
import Button from "@/app/ui/button/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import './page.css';

export default function Beehive({params}: { params: { id: string } }) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const beehive = {
        name: 'beehive n°1',
        temperature: {
            min: 0,
            max: 10
        },
        humidity: {
            min: 0,
            max: 10
        },
        weight: {
            min: 0,
            max: 10
        }
    }

    async function onSubmit(event: any) {
        event.preventDefault()
        setLoading(true)
        console.log(params.id)
        setLoading(false)
        router.push('/beekeeper/alerts')
    }

    return (
        <main className='alert-beehive'>
            <form onSubmit={onSubmit}>
                <p className='title'>Modification des seuils de la ruche : {beehive.name}</p>
                <div className={'grid grid-cols-4 mb-4'}>
                    <div className='beehive-properties col-span-2'>
                        <b>Température</b>
                        <div className='flex flex-row justify-center items-center'>
                            <Input
                                id={'temp-min'}
                                type={'text'}
                                label={'Minimum'}
                                placeholder={beehive.temperature.min.toString()}
                                defaultValue={beehive.temperature.min}
                            />
                            <Input
                                id={'temp-max'}
                                type={'text'}
                                label={'Maximum'}
                                placeholder={beehive.temperature.max.toString()}
                                defaultValue={beehive.temperature.max}
                            />
                        </div>
                    </div>
                    <div className='beehive-properties col-span-2'>
                        <b>Humidité</b>
                        <div className='flex flex-row justify-center items-center'>
                            <Input
                                id={'temp-min'}
                                type={'text'}
                                label={'Minimum'}
                                placeholder={beehive.humidity.min.toString()}
                                defaultValue={beehive.humidity.min}
                            />
                            <Input
                                id={'temp-max'}
                                type={'text'}
                                label={'Maximum'}
                                placeholder={beehive.humidity.max.toString()}
                                defaultValue={beehive.humidity.max}
                            />
                        </div>
                    </div>
                    <div className='beehive-properties col-span-2'>
                        <b>Poids</b>
                        <div className='flex flex-row justify-center items-center'>
                            <Input
                                id={'temp-min'}
                                type={'text'}
                                label={'Minimum'}
                                placeholder={beehive.weight.min.toString()}
                                defaultValue={beehive.weight.min}
                            />
                            <Input
                                id={'temp-max'}
                                type={'text'}
                                label={'Maximum'}
                                placeholder={beehive.weight.max.toString()}
                                defaultValue={beehive.weight.max}
                            />
                        </div>
                    </div>
                </div>
                <Button type={'submit'} value={loading ? 'Chargement...' : 'Valider'} disable={loading}/>
            </form>
        </main>
    )
}