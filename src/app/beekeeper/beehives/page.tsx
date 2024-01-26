import Card from "@/app/ui/card/card";
import Button from "@/app/ui/button/button";
import Image from "next/image";
import './page.css';

export default function Beehives() {
    return (
        <div className='list-beehive'>
            <Card title={'Beehive n°1'}>
                <div className={'w-full'}>
                    <div className={'grid grid-cols-11 gap-2 mb-8'}>
                        <div className={'col-span-5'}>
                            <p className={'data-value'} style={{color: getColor(23)}}>23°C</p>
                            <p className={'data-name'}>Température</p>
                            <div className={'flex justify-center'}>
                                <p className={'data-info'}>12°C - 40°C</p>
                                <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18} height={18}/>
                            </div>
                        </div>
                        <div className='separator col-span-1'/>
                        <div className={'col-span-5'}>
                            <p className={'data-value'} style={{color: getColor(70)}}>70%</p>
                            <p className={'data-name'}>Humidité</p>
                            <div className={'flex justify-center'}>
                                <p className={'data-info'}>30% - 80%</p>
                                <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18} height={18}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <p className='beehive-date'>Créée le 24/01/24</p>
                        <Button value={'Plus d\'info'} type={'button'}></Button>
                    </div>
                </div>
            </Card>
            <Card title={'Beehive n°2'}>
                <div className={'w-full'}>
                    <div className={'grid grid-cols-11 gap-2 mb-8'}>
                        <div className={'col-span-5'}>
                            <p className={'data-value'} style={{color: getColor(12)}}>12°C</p>
                            <p className={'data-name'}>Température</p>
                            <div className={'flex justify-center'}>
                                <p className={'data-info'}>12°C - 40°C</p>
                                <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18} height={18}/>
                            </div>
                        </div>
                        <div className='separator col-span-1'/>
                        <div className={'col-span-5'}>
                            <p className={'data-value'} style={{color: getColor(10)}}>30%</p>
                            <p className={'data-name'}>Humidité</p>
                            <div className={'flex justify-center'}>
                                <p className={'data-info'}>30% - 80%</p>
                                <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18} height={18}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <p className='beehive-date'>Créée le 24/01/24</p>
                        <Button value={'Plus d\'info'} type={'button'}></Button>
                    </div>
                </div>
            </Card>
            <Card title={'Beehive n°3'}>
                <div className={'w-full'}>
                    <div className={'grid grid-cols-11 gap-2 mb-8'}>
                        <div className={'col-span-5'}>
                            <p className={'data-value'} style={{color: getColor(35)}}>35°C</p>
                            <p className={'data-name'}>Température</p>
                            <div className={'flex justify-center'}>
                                <p className={'data-info'}>12°C - 40°C</p>
                                <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18} height={18}/>
                            </div>
                        </div>
                        <div className='separator col-span-1'/>
                        <div className={'col-span-5'}>
                            <p className={'data-value'} style={{color: getColor(70)}}>70%</p>
                            <p className={'data-name'}>Humidité</p>
                            <div className={'flex justify-center'}>
                                <p className={'data-info'}>30% - 80%</p>
                                <Image src={'/info.svg'} alt={'info'} className={'data-icon'} width={18} height={18}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <p className='beehive-date'>Créée le 24/01/24</p>
                        <Button value={'Plus d\'info'} type={'button'}></Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

function getColor(value: number) {
    const percent = (value - 12) / (40 - 12);
    const red = Math.round(255 * percent);
    const green = Math.round(255 * (1 - percent));
    return `rgb(${red}, ${green}, 0)`
}