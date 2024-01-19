import type {Metadata} from "next";
import Menu, {Item} from "@/app/ui/menu/menu";
import './layout.css'

export const metadata: Metadata = {
    title: 'BeeGuard - Dashboard',
    description: 'Dashboard',
}

export default function Layout({children}: {
    children: React.ReactNode
}) {
    const items: Item[] = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            iconSrc: '/dashboard.svg',
        },
        {
            name: 'Mes ruches',
            link: '/beehives',
            iconSrc: '/beehive.svg',
        },
        {
            name: 'Mes alertes',
            link: '/alerts',
            iconSrc: '/alert.svg',
        },
        {
            name: 'Paramètres',
            link: '/settings',
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