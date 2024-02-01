'use client'

import Image from "next/image";
import Button from "@/app/ui/button/button";
import Input from "@/app/ui/input/input";
import Link from "next/link";
import {redirect, useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import {Register} from '@/app/services/authentification'
import './page.css';

export default function Home() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) redirect('/beekeeper/dashboard')
    })

    async function onSubmit(event: any) {
        event.preventDefault()
        setLoading(true)
        const response = await Register(event.target.email.value, event.target.password.value, event.target.token.value)
        const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        if (response?.data?.token) {
            localStorage.setItem('user', response?.data?.username)
            localStorage.setItem('token', response?.data?.token)
            toast.success(`Bienvenue ${response?.data?.username}`, {theme})
            setLoading(false)
            router.push('/beekeeper/dashboard')
        } else {
            setLoading(false)
            toast.error('Erreur lors de l\'enregistrement', {theme})
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
                        <p className='login-subtitle'>Bienvenue</p>
                        <p className='login-title'>Inscrivez-vous à Pnapi !</p>
                        <div className='mt-8'>
                            <form onSubmit={onSubmit}>
                                <Input
                                    type={'email'}
                                    id={'email'}
                                    label={'E-mail ou Username'}
                                    name={'email'}
                                    placeholder={'Entrez votre e-mail ou votre nom d\'utilisateur'}
                                />
                                <Input
                                    type={'password'}
                                    id={'password'}
                                    name={'password'}
                                    label={'Mot de passe'}
                                    placeholder={'Entrez votre mot de passe'}
                                />
                                <Input
                                    type={'text'}
                                    id={'text'}
                                    label={'Token'}
                                    name={'token'}
                                    placeholder={'Token'}
                                />
                                <div className='flex justify-center my-5'>
                                    <Button type={'submit'} value={loading ? 'Chargement...' : 'S\'inscrire'}
                                            disable={loading}/>
                                </div>
                            </form>
                        </div>
                        <p><span className='login-text-light'>Déjà un compte ?</span> <Link
                            href={'/'}>Connexion</Link></p>
                    </div>
                </div>
            </main>
        </>
    )
}
