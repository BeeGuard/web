import Image from "next/image";
import './alert.css';

export default function Alert() {
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

    return (
        <div className={'flex flex-col'}>
            <div className={'beehive-alert'}>
                <div className={'flex flex-row justify-center items-center mx-4'}>
                    <p className={'beehive-alert-name'}>Beehive n°1</p>
                    <Image
                        src={'/shield.svg'}
                        alt={'shield'}
                        width={20}
                        height={20}
                    />
                </div>
                {alerts.map((alert, index) => (
                    <div className={'editable-alert'} key={index}>
                        <div className={'flex justify-around items-center'}>
                            <p>{alert.title}</p>
                            <Image
                                src={'/shield.svg'}
                                alt={'shield'}
                                width={15}
                                height={15}
                            />
                        </div>
                        <div className={'editable-value flex justify-around items-center'}>
                            <p>{alert.min}</p>
                            <div className={'divider'}></div>
                            <p>{alert.max}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={'beehive-alert'}>
                <div className={'flex flex-row justify-center items-center mx-4'}>
                    <p className={'beehive-alert-name'}>Beehive n°2</p>
                    <Image
                        src={'/shield.svg'}
                        alt={'shield'}
                        width={20}
                        height={20}
                    />
                </div>
                {alerts.map((alert, index) => (
                    <div className={'editable-alert'} key={index}>
                        <div className={'flex justify-around items-center'}>
                            <p>{alert.title}</p>
                            <Image
                                src={'/shield.svg'}
                                alt={'shield'}
                                width={15}
                                height={15}
                            />
                        </div>
                        <div className={'editable-value flex justify-around items-center'}>
                            <p>{alert.min}</p>
                            <div className={'divider'}></div>
                            <p>{alert.max}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}