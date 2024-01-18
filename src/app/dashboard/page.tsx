import Card from "@/app/ui/card/card";
import './page.css';
import Image from "next/image";
import Bubble from "@/app/ui/bubble/bubble";

export default function Dashboard() {
    return (
        <main>
            <div className={'list-card'}>
                <Card title={'Nombre de vos ruches sous notre surveillance :'}>
                    <div className={'flex items-center mt-10'}>
                        <p className={'font-bold text-2xl mr-2'}>5</p>
                        <Image
                            src={'/beehive.svg'}
                            alt={'beehive'}
                            width={40}
                            height={40}
                        />
                    </div>
                </Card>
                <Card title={'Température moyenne dans vos ruches :'}>
                    <Bubble value={20}/>
                </Card>
                <Card title={'Statistique des derniers mois pour l’ensemble de vos ruches'}>
                    <></>
                </Card>
                <Card title={'Poids moyen de vos ruches sur 1 mois en (kg)'}>
                    <></>
                </Card>
                <Card title={'Nombre d’alertes à traiter :'}>
                    <></>
                </Card>
                <Card title={'Ajouter une nouvelle ruche sous notre surveillance'}>
                    <></>
                </Card>
            </div>
        </main>
    )
}