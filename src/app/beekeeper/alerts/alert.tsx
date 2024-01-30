import Image from "next/image";
import './alert.css';

export default function Alert() {
    return (
        <div className={'flex '}>
            <div className={'beehive-alert'}>
                <p className={'beehive-alert-name'}>Beehive n°1</p>
                <Image
                    src={'/shield.svg'}
                    alt={'shield'}
                    width={15}
                    height={15}
                />

                <div>
                    <p>Temperature</p>
                    <Image
                        src={'/shield.svg'}
                        alt={'shield'}
                        width={15}
                        height={15}
                    />
                    <p>12°</p>
                    <div></div>
                    <p>40°</p>
                </div>
            </div>
        </div>
    )
}