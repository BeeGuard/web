import './input.css';

export interface InputProps {
    type: string;
    id: string;
    label: string | React.ReactNode;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export default function Input({ type, id, label, placeholder, value, className }: InputProps) {
    return (
        <div className={`${className} input`}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value}/>
        </div>
    )
}