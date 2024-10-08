'use client'

import { loginWithCredentials } from '@/lib/actions/auth.action'
import { useState } from 'react'
import { useFormState } from 'react-dom'
import Button from './SubmitButton'
import { BiSolidError } from "react-icons/bi"

export default function LoginForm() {

    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const [message, clientAction] = useFormState(loginWithCredentials, undefined)
    
    return (
        <div className="flex flex-col h-[90vh] w-full">
            <form action={clientAction} className="flex flex-col items-center m-auto justify-center w-full max-w-md">
                <input
                    name="email"
                    className='w-full border border-gray-300 h-10 px-4 rounded-t-md focus:outline-none font-sans text-sm font-normal'
                    type="text"
                    placeholder="Email address"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
                <input
                    name="password"
                    className='w-full border-t-0 border border-gray-300 h-10 px-4 rounded-b-md focus:outline-none font-sans text-sm font-normal'
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
                <Button className='w-full' disable={!loginData.password || !loginData.email} />
                {message?.error && (
                    <div className='flex gap-4 p-4 mt-6 bg-red-200 rounded-sm'>
                        <BiSolidError className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{message.message}</p>
                    </div>
                )}
            </form >
        </div>
    )
}