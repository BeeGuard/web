'use client'

import Card from "@/app/ui/card/card";
import Button from "@/app/ui/button/button";
import Image from "next/image";
import {useEffect, useState} from "react";
import Modal from "@/app/ui/modal/modal";
import Input from "@/app/ui/input/input";
import {beehives, createBeehive} from "@/app/services/beehives";
import {Loader} from "@/app/ui/loader/loader";
import './page.css';

export default function Beehives() {
    const [open, setOpen] = useState(false)
    const [openInfo, setOpenInfo] = useState(false)
    const [hive, setHive] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const [hives, setHives] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        beehives()
            .then((response: any) => {
                setLoading(false)
                setHives(response?.data)
            })
    }, [reload])

    const onSubmit = async (e: any) => {
        e.preventDefault()
        setOpen(false)
        setLoading(true)
        const response = await createBeehive(e.target.name.value)
        if (response?.data) {
            setReload(!reload)
        }
    }

    return (
        <div className='list-beehive'>
            {
                hives?.map((hive: any, index: number) => (
                    <Card key={index} title={hive?.name ?? 'Beehive'}>
                        <div className={'w-full'}>
                            <div className={'grid grid-cols-11 gap-2 mb-8'}>
                                <div className={'col-span-5'}>
                                    <p
                                        className={'data-value'}
                                        style={{color: getColor(hive?.latestTimestampInfo?.interiorTemperature, hive?.threshold?.lowerTemp, hive?.threshold?.upperTemp)}}>{hive?.latestTimestampInfo?.interiorTemperature ?? '~'}°C</p>
                                    <p className={'data-name'}>Température</p>
                                    <div className={'flex justify-center'}>
                                        <p className={'data-info'}>{hive?.threshold?.lowerTemp ?? '~'}°C
                                            - {hive?.threshold?.upperTemp ?? '~'}°C</p>
                                        <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18}
                                               height={18}/>
                                    </div>
                                </div>
                                <div className='separator col-span-1'/>
                                <div className={'col-span-5'}>
                                    <p className={'data-value'}
                                       style={{color: getColor(hive?.latestTimestampInfo?.interiorHumidity, hive?.threshold?.lowerHumidity, hive?.threshold?.upperHumidity)}}>{hive?.latestTimestampInfo?.interiorHumidity ?? '~'}%</p>
                                    <p className={'data-name'}>Humidité</p>
                                    <div className={'flex justify-center'}>
                                        <p className={'data-info'}>{hive?.threshold?.lowerHumidity ?? '~'}%
                                            - {hive?.threshold?.upperHumidity ?? '~'}%</p>
                                        <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18}
                                               height={18}/>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex justify-between items-center'}>
                                <p className='beehive-date'>Créée le 24/01/24</p>
                                <Button value={'Plus d\'info'} type={'button'} onClick={() => {
                                    setHive(hive)
                                    console.log(hive)
                                    setOpenInfo(true)
                                }}></Button>
                            </div>
                        </div>
                    </Card>
                ))
            }
            {
                loading && <Loader/>
            }
            <div className={'fixed bottom-20 right-20'}>
                <Button value={'Ajouter une ruche'} type={'button'} onClick={() => setOpen(true)}/>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <div className='h-auto'>
                    <p className='modal-title'>{`Ajout d'une nouvelle ruche`}</p>
                    <form className={'mt-4 p-4'} onSubmit={onSubmit}>
                        <Input
                            type={'text'}
                            id={'beehive-name'}
                            name={'name'}
                            label={'Nom de votre nouvelle ruche'}
                            placeholder={'Nom'}
                        />
                        <div className='flex justify-around modal-actions'>
                            <Button type={'button'} value={'Annuler'} onClick={() => setOpen(false)}/>
                            <Button type={'submit'} value={'Ajouter'}/>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal open={openInfo} setOpen={setOpenInfo}>
                <div className='h-auto'>
                    <p className='modal-title'>{`Informations supplémentaires`}</p>
                    <form className={'mt-4 p-4'} onSubmit={onSubmit}>
                        <Input
                            type={'text'}
                            id={'beehive-luminosity'}
                            label={'Exposition UV'}
                            placeholder={'0'}
                            defaultValue={hive?.latestTimestampInfo?.uvIndex}
                        />
                        <Input
                            type={'text'}
                            id={'beehive-weight'}
                            label={'Poids'}
                            placeholder={'0'}
                            defaultValue={hive?.latestTimestampInfo?.weight}
                        />
                        <div className='flex justify-around modal-actions-info'>
                            <Button type={'button'} value={'Quitter'} onClick={() => setOpenInfo(false)}/>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

function getColor(value: number, min: number, max: number) {
    if (value === undefined || min === undefined || max === undefined) return 'rgb(var(--foreground-rgb))'
    const percent = (value - min) / (max - min);
    const red = Math.round(255 * percent);
    const green = Math.round(255 * (1 - percent));
    return `rgb(${red}, ${green}, 0)`
}