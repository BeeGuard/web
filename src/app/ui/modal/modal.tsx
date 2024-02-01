import {Dispatch, ReactNode, SetStateAction} from "react";
import './modal.css'

export interface ModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    children: ReactNode
}

export default function Modal({open, children}: ModalProps) {

    return (
        <>
            {open &&
                <>
                    <div className='blur-effect'/>
                    <div className='modal'>
                        {children}
                    </div>
                </>}
        </>
    )
}