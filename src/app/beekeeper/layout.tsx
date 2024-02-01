'use client'

import Menu, {Item} from "@/app/ui/menu/menu";
import {redirect} from "next/navigation";
import {useEffect} from "react";
import './layout.css'

export default function Layout({children}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        const user = localStorage.getItem('user')
        if(!user) redirect('/')
    })

    const items: Item[] = [
        {
            name: 'Dashboard',
            link: '/beekeeper/dashboard',
            iconSrc: '/dashboard.svg',
        },
        {
            name: 'Mes ruches',
            link: '/beekeeper/beehives',
            iconSrc: '/beehive.svg',
        },
        {
            name: 'Mes alertes',
            link: '/beekeeper/alerts',
            iconSrc: '/alert.svg',
        },
        {
            name: 'Paramètres',
            link: '/beekeeper/settings',
            iconSrc: '/settings.svg',
        }
    ]
    return (
        <div className={'layout-dashboard'}>
            <Menu items={items}/>
            {children}
        </div>
    )
}