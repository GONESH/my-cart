import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { useForm } from "react-hook-form";

export default function LoginScreen() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm
    return (
        <Layout title="Login">
            <form className='"mx-auto max-w-screen-md'>
                <h1 className='mb-4 text-xl'>Login</h1>
                <div className='mb-4'>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="w-full" id="email" autoFocus placeholder='Enter Email' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="w-full" id="password" autoFocus placeholder='Enter Password' />
                </div>
                <div className='mb-4'>
                    <button className="primary-button">Login</button>
                </div>
                <div className="mb-4">
                    Don&apos;t have an account? &nbsp;
                    <Link href="register">Register</Link>
                </div>

            </form>
        </Layout>
    )
}
