import './light-button.css';

export interface LightButtonProps {
    value: string
    type: 'button' | 'submit' | 'reset'
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disable?: boolean
}

export default function LightButton({value, type, onClick, disable}: LightButtonProps) {
    return (
        <button className={`light-button`} type={type} onClick={onClick} disabled={disable}>
            {value}
        </button>
    )
}