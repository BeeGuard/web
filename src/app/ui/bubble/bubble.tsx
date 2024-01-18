import './bubble.css'

export interface BubbleProps {
    value: number
}

export default function Bubble({value}: BubbleProps) {
    return (
        <div className={'bubble'} style={{backgroundColor: getColor(value)}}>
            <div className={'bubble-value'}>
                {value}°C
            </div>
        </div>
    )
}

function getColor(value: number) {
    const percent = (value - 12) / (40 - 12);
    const red = Math.round(255 * percent);
    const green = Math.round(255 * (1 - percent));
    return `rgb(${red}, ${green}, 0)`
}