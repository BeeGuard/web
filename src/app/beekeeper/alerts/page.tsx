'use client'

import {useState} from "react";
import Button from "@/app/ui/button/button";
import Image from "next/image";
import LightButton from "@/app/ui/light-button/light-button";
import './page.css';

export default function Dashboard() {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <main className={'alerts'}>
            <div className={'panel grid grid-cols-12 gap-2 my-8'}>
                <div className={`col-span-5 ${currentIndex !== 0 && 'unselected-panel'}`}
                     onClick={() => setCurrentIndex(0)}>Mon historique
                </div>
                <div className={'col-span-2 separator'}/>
                <div className={`col-span-5 ${currentIndex !== 1 && 'unselected-panel'}`}
                     onClick={() => setCurrentIndex(1)}>Mes alertes
                </div>
            </div>
            {currentIndex === 0 &&
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
            }
            {currentIndex === 1 &&
                <h1>Hello custom alert</h1>
            }
        </main>
    )
}
