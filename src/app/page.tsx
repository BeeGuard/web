'use client'

import Image from "next/image";
import Button from "@/app/ui/button/button";
import './page.css';
import Input from "@/app/ui/input/input";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useState} from "react";

export default function Home() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function onSubmit(event: any) {
        event.preventDefault()
        setLoading(true)
        console.log(event.target.email.value)
        await new Promise(resolve => setTimeout(resolve, 500));
        const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        if (event.target.email.value?.includes('beekeeper')) {
            toast.success('Welcome', {theme})
            setLoading(false)
            router.push('/beekeeper/dashboard')
        } else {
            setLoading(false)
            toast.error('Incorrect email or password !', {theme})
        }
    }

    return (
        <>
            <main>
                <div className='flex justify-center pt-4'>
                    <p>Pnapi</p>
                    <Image
                        src={'/shield.svg'}
                        alt={'shield'}
                        width={20}
                        height={20}
                    />
                </div>
                <div className={'flex items-center justify-center h-[80vh]'}>
                    <div className={'login-card'}>
                        <p className='login-subtitle'>Welcome back</p>
                        <p className='login-title'>Log into your account</p>
                        <div className='mt-8'>
                            <form onSubmit={onSubmit}>
                                <Input
                                    type={'email'}
                                    id={'email'}
                                    label={'E-mail or Username'}
                                    name={'email'}
                                    placeholder={'Enter your e-mail or username'}
                                />
                                <Input
                                    type={'password'}
                                    id={'password'}
                                    name={'password'}
                                    label={<div className='flex justify-between'><p>Password</p><p
                                        className='login-text-light text-sm'>Forget password ?</p></div>}
                                    placeholder={'Enter your password'}
                                />
                                <div className='flex justify-center my-5'>
                                    <Button type={'submit'} value={loading ? 'Loading...' : 'Login'} disable={loading}/>
                                </div>
                            </form>
                        </div>
                        <p><span className='login-text-light'>Not registered yet ? </span> <Link
                            href={'/signup'}>Register</Link></p>
                    </div>
                </div>
            </main>
        </>
    )
}