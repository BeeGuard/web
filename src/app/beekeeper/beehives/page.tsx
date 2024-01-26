import Card from "@/app/ui/card/card";
import './page.css';
import Button from "@/app/ui/button/button";

export default function Beehives() {
    return (
        <div className='list-beehive'>
            <Card title={'Beehives n°1'}>
                <div>
                    <div>
                        <p>23°C</p>
                        <p>Température</p>
                        <p>12°C - 40°C</p>
                    </div>
                    <div className='separator' />
                    <div>
                        <p>23°C</p>
                        <p>Température</p>
                        <p>12°C - 40°C</p>
                    </div>
                    <div className={'flex justify-center items-center'}>
                        <p className=''>Crée le  24/01/24</p>
                        <Button value={'Plus d\'info'} type={'button'}></Button>
                    </div>
                </div>
            </Card>
            <Card title={'Beehives n°2'}>Beehives</Card>
            <Card title={'Beehives n°3'}>Beehives</Card>
            <Card title={'Beehives n°4'}>Beehives</Card>
        </div>
    )
}