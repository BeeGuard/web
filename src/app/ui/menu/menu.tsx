import Image from "next/image";
import Link from "next/link";
import "./menu.css";

export interface MenuProps {
    items: Item[]
}

export interface Item {
    name: string,
    link: string,
    iconSrc: string,
}

export default function Menu({items}: MenuProps) {
    return (
        <div className={'menu'}>
            <Link href={'/'} className={'menu-title'}>
                <div className={'flex justify-center'}>
                    Pnapi
                    <Image
                        className={'menu-title-icon'}
                        src={'/shield.svg'}
                        alt={'shield'}
                        width={50}
                        height={50}
                    />
                </div>
            </Link>
            {items?.map((item, index) => (
                <Link href={item.link} className={'menu-item'} key={index}>
                    <div className={'flex items-center'}>
                        <Image
                            className={'menu-item-icon'}
                            src={item.iconSrc}
                            alt={item.name}
                            width={40}
                            height={40}
                        />
                        {item.name}
                    </div>
                </Link>
            ))}
            <Link href={'/'} className={'menu-item menu-last-item'}>
                <div className={'flex items-center'}>
                    <Image
                        className={'menu-item-icon'}
                        src={'/logout.svg'}
                        alt={'logout'}
                        width={40}
                        height={40}
                    />
                    Deconnexion
                </div>
            </Link>
        </div>
    )
}