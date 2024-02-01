import Image from "next/image";
import './alert.css';
import {useRouter} from "next/navigation";

export default function Alert() {
    const router = useRouter()
    const alerts = [
        {
            title: 'Temperature (°C)',
            min: 12,
            max: 40,
        },
        {
            title: 'Humidity (%)',
            min: 30,
            max: 70,
        },
        {
            title: 'Weight (kg)',
            min: 30,
            max: 70,
        }
    ]
    const beehives = [
        {
            id: 1,
            name: 'beehive n°1',
            alerts: alerts
        },
        {
            id: 2,
            name: 'beehive n°2',
            alerts: alerts
        },
    ]

    return (
        <div className={'flex flex-col'}>
            {
                beehives.map((beehive, index) => (
                    <div key={index} className={'beehive-alert'}>
                        <div className={'flex flex-row justify-center items-center mx-4'}>
                            <p className={'beehive-alert-name'}>{beehive.name}</p>
                        </div>
                        {beehive.alerts.map((alert, index) => (
                            <div className={'editable-alert'} key={index}>
                                <div className={'flex justify-around items-center'}>
                                    <p>{alert.title}</p>
                                </div>
                                <div className={'editable-value flex justify-around items-center'}>
                                    <p>{alert.min}</p>
                                    <div className={'divider'}></div>
                                    <p>{alert.max}</p>
                                </div>
                            </div>
                        ))}
                        <Image
                            src={'/pencil.svg'}
                            alt={'pencil'}
                            width={20}
                            height={20}
                            onClick={() => {
                                router.push(`alerts/${beehive.id}`)
                            }}
                        />
                    </div>
                ))
            }
        </div>
    )
}