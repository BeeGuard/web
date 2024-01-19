'use client'

import Image from "next/image";
import Button from "@/app/ui/button/button";
import './page.css';
import Input from "@/app/ui/input/input";
import Link from "next/link";
import {FormEvent} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(event)
        router.push('/beekeeper/dashboard')
    }

    return (
        <main>
            <div className='flex justify-center pt-4'>
                <p>BeeGuard</p>
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
                                placeholder={'Enter your e-mail or username'}
                            />
                            <Input
                                type={'password'}
                                id={'password'}
                                label={<div className='flex justify-between'><p>Password</p><p className='login-text-light text-sm'>Forget password ?</p></div>}
                                placeholder={'Enter your password'}
                            />
                            <div className='flex justify-center my-5'>
                                <Button type={'submit'} value={'Login'}/>
                            </div>
                        </form>
                    </div>
                    <p><span className='login-text-light'>Not registered yet ? </span> <Link href={'/signup'}>Register</Link></p>
                </div>
            </div>
        </main>
    )
}