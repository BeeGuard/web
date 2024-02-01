import './input.css';

export interface InputProps {
    type: string;
    id: string;
    label: string | React.ReactNode;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name?: string;
    disable?: boolean;
    defaultValue?: string | number
}

export default function Input({ type, id, label, placeholder, value, className, onChange, name, disable, defaultValue }: InputProps) {
    return (
        <div className={`${className} input`}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} name={name} defaultValue={defaultValue} disabled={disable}/>
        </div>
    )
}