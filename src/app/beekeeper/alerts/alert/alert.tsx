import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {beehives} from "@/app/services/beehives";
import {Loader} from "@/app/ui/loader/loader";
import './alert.css';

export default function Alert() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [hives, setHives] = useState([])

    useEffect(() => {
        beehives()
            .then((response: any) => {
                setLoading(false)
                setHives(response?.data)
                console.log(response?.data)
            })
    }, [])

    return (
        <div className={'flex flex-col'}>
            {
                hives?.map((hive: any, index) => (
                    <div key={index} className={'beehive-alert'}>
                        <div className={'flex flex-row justify-center items-center mx-4'}>
                            <p className={'beehive-alert-name'}>{hive?.name ?? 'Beehive'}</p>
                        </div>
                        <div className={'editable-alert'} key={index}>
                            <div className={'flex justify-around items-center'}>
                                <p>Température</p>
                            </div>
                            <div className={'editable-value flex justify-around items-center'}>
                                <p>{hive?.threshold?.lowerTemp ?? '~'}</p>
                                <div className={'divider'}></div>
                                <p>{hive?.threshold?.upperTemp ?? '~'}</p>
                            </div>
                        </div>
                        <div className={'editable-alert'} key={index}>
                            <div className={'flex justify-around items-center'}>
                                <p>Humidité</p>
                            </div>
                            <div className={'editable-value flex justify-around items-center'}>
                                <p>{hive?.threshold?.lowerHumidity ?? '~'}</p>
                                <div className={'divider'}></div>
                                <p>{hive?.threshold?.upperHumidity ?? '~'}</p>
                            </div>
                        </div>
                        <div className={'editable-alert'} key={index}>
                            <div className={'flex justify-around items-center'}>
                                <p>Poids</p>
                            </div>
                            <div className={'editable-value flex justify-around items-center'}>
                                <p>{hive?.threshold?.lowerWeight ?? '~'}</p>
                                <div className={'divider'}></div>
                                <p>{hive?.threshold?.upperWeight ?? '~'}</p>
                            </div>
                        </div>
                        <Image
                            src={'/pencil.svg'}
                            alt={'pencil'}
                            width={20}
                            height={20}
                            onClick={() => {
                                router.push(`alerts/${hive.id}`)
                            }}
                        />
                    </div>
                ))
            }
            {
                loading && <Loader/>
            }
        </div>
    )
}