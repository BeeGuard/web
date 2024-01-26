import Image from "next/image";
import './button.css';

export interface ButtonProps {
    value: string
    type: 'button' | 'submit' | 'reset'
    color?: 'primary' | 'secondary'
    icon?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disable?: boolean
}

export default function Button({value, type, color, icon, onClick, disable}: ButtonProps) {
    return (
        <button className={`button button-${color}`} type={type} onClick={onClick} disabled={disable}>
            <div className={'flex justify-center items-center'}>
                {value}
                {icon && <Image
                    src={icon ?? ''}
                    alt={'button-icon'}
                    className={'button-icon ml-2'}
                    width={20}
                    height={20}
                />}
            </div>
        </button>
    )
}