import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { useForm } from "react-hook-form";

export default function LoginScreen() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const submitHandler = ({ email, password }) => {

    }
    return (
        <Layout title="Login">
            <form className='"mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
                <h1 className='mb-4 text-xl'>Login</h1>
                <div className='mb-4'>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        {...register('email', {
                            required: 'Please enter email',
                            pattern: {
                                value: /^[a-zA-Z0-9_,+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                message: 'Please Enter Valid Email'
                            }
                        })}
                        className="w-full"
                        id="email" autoFocus
                        placeholder='Enter Email'>
                    </input>
                    {errors.email && (
                        <div className='text-red-500'>{errors.email.message}</div>
                    )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        {...register('password', {
                            required: 'Please Enter password',
                            minLength: { value: 3, message: 'Password is more than 5 character' }
                        })}
                        className="w-full"
                        id="password" autoFocus
                        placeholder='Enter Password'>
                    </input>
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
