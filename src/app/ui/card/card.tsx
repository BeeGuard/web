import './card.css';

export interface CardProps {
    title: string,
    children: React.ReactNode,
}

export default function Card({title, children}: CardProps) {
    return (
        <div className={'card'}>
            <div className={'card-title'}>
                {title}
            </div>
            <div className={'card-content'}>
                {children}
            </div>
        </div>
    )
}