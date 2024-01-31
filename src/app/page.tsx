'use client'

import Image from "next/image";
import Button from "@/app/ui/button/button";
import Input from "@/app/ui/input/input";
import Link from "next/link";
import {redirect, useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import {Login} from '@/app/services/authentification'
import './page.css';

export default function Home() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user) redirect('/beekeeper/dashboard')
    })

    async function onSubmit(event: any) {
        event.preventDefault()
        setLoading(true)
        const response = await Login(event.target.email.value, event.target.password.value)
        const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        if (response?.data?.token) {
            localStorage.setItem('user', response?.data?.username)
            localStorage.setItem('token', response?.data?.token)
            toast.success(`Welcome ${response?.data?.username}`, {theme})
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
