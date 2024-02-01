'use client'

import Card from "@/app/ui/card/card";
import Image from "next/image";
import Bubble from "@/app/ui/bubble/bubble";
import Button from "@/app/ui/button/button";
import {CartesianGrid, Line, LineChart, Tooltip} from "recharts";
import './page.css';

export default function Dashboard() {
    const data = [
        {name: 'Page A', kg: 100},
        {name: 'Page B', kg: 200},
        {name: 'Page C', kg: 250},
        {name: 'Page D', kg: 400}
    ];

    return (
        <main>
            <div className={'list-card'}>
                <Card title={'Nombre de vos ruches sous notre surveillance :'}>
                    <div className={'flex items-center mt-10'}>
                        <p className={'font-bold text-2xl mr-2'}>2</p>
                        <Image
                            src={'/beehive.svg'}
                            alt={'beehive'}
                            width={40}
                            height={40}
                        />
                    </div>
                </Card>
                <Card title={'Température intérieur moyenne des ruches :'}>
                    <Bubble value={new Date().getHours()}/>
                </Card>
                <Card title={'Statistique des derniers mois pour l’ensemble de vos ruches'}>
                    <div className={'mt-6'}>
                        <Button type={'button'} value={'Télécharger'} icon={'/download.svg'}/>
                    </div>
                </Card>
                <Card title={'Poids moyen de vos ruches sur 1 mois en (kg)'}>
                    <LineChart width={290} height={140} data={data} margin={{top: 10, right: 10, left: 10}}>
                        <Line type="monotone" dataKey="kg" stroke="rgb(var(--foreground-rgb))" fill='rgb(var(--foreground-rgb))'/>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                    </LineChart>
                </Card>
                <Card title={'Nombre d’alertes à traiter :'}>
                    <div className={'flex flex-col items-center mt-2'}>
                        <div className={'flex items-center mb-6'}>
                            <p className={'font-bold text-2xl mr-2'}>5</p>
                            <Image
                                src={'/alert.svg'}
                                alt={'alert'}
                                width={40}
                                height={40}
                            />
                        </div>
                        <Button type={'button'} value={'Voir mes alertes'}/>
                    </div>
                </Card>
                <Card title={'Ajouter une nouvelle ruche sous notre surveillance'}>
                    <div className={'mt-6'}>
                        <Button type={'button'} value={'Nouvelle ruche'} color={'primary'}/>
                    </div>
                </Card>
            </div>
        </main>
    )
}