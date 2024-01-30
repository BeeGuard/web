'use client'

import {useState} from "react";
import History from "@/app/beekeeper/alerts/history";
import Alert from "@/app/beekeeper/alerts/alert";
import './page.css';

export default function Dashboard() {
    const [currentIndex, setCurrentIndex] = useState(1)

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
                <History/>
            }
            {currentIndex === 1 &&
                <Alert/>
            }
        </main>
    )
}
