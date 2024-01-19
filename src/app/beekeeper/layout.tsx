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