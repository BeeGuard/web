import LightButton from "@/app/ui/light-button/light-button";
import Image from "next/image";
import Button from "@/app/ui/button/button";

export default function History() {

    return (
        <div className={'history'}>
            <div className={'buttons-filter'}>
                <LightButton type={'button'} value={'All'}/>
                <LightButton type={'button'} value={'Critical'}/>
                <LightButton type={'button'} value={'Warning'}/>
            </div>
            <div className={'list-alerts'}>
                <div className={'alert'}>
                    <Image
                        src={'/alert.svg'}
                        alt={'alert'}
                        width={40}
                        height={40}
                    />
                    <p>Alert on <b>beehive n°1</b> : Temperature is lower than usual</p>
                    <Button value={'Clear'} type={'button'}/>
                </div>
                <div className={'alert'}>
                    <Image
                        src={'/alert.svg'}
                        alt={'alert'}
                        width={40}
                        height={40}
                    />
                    <p>Alert on <b>beehive n°3</b> : Temperature is higher than usual</p>
                    <Button value={'Clear'} type={'button'}/>
                </div>
            </div>
        </div>
    )
}