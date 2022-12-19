import React from 'react'
import Layout from '../components/Layout'
import CheckoutWizard from '../components/CheckoutWizard'
import { useForm } from 'react-hook-form';

export default function ShippingScreen() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setvalue,
        getValue,
    } = useForm();
    const submitHandler = () => {

    };
    return (
        <Layout title="Shipping Address">
            <CheckoutWizard activeStep={1} />
            <form action="" className='mx-aut0 max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
                <h1 className='mb-4 text-xl'>Shipping Address</h1>
                <div className='mb-4'>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className='w-full'
                        id="fullName" autoFocus
                        {...register('fullName', {
                            required: 'Pleaase enter full name',
                        })}
                    />
                    {errors.fullName && (
                        <div className='text-red-500'>{errors.fullName.message}</div>
                    )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="fullName">Address</label>
                    <input
                        className='w-full'
                        id="fullName" autoFocus
                        {...register('address', {
                            required: 'Pleaase enter address',
                            minLength: { value: 3, message: 'Address is more than 2 Character' }
                        })}
                    />
                    {errors.address && (
                        <div className='text-red-500'>{errors.address.message}</div>
                    )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="city">City</label>
                    <input
                        className='w-full'
                        id="city" autoFocus
                        {...register('city', {
                            required: 'Pleaase enter city',
                        })}
                    />
                    {errors.city && (
                        <div className='text-red-500'>{errors.city.message}</div>
                    )}
                </div>
                <div className='mb-4'>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        className='w-full'
                        id="postalCode" autoFocus
                        {...register('postalCode', {
                            required: 'Pleaase enter full name',
                        })}
                    />
                    {errors.postalCode && (
                        <div className='text-red-500'>{errors.postalCode.message}</div>
                    )}
                </div>
            </form>
        </Layout>
    )
}
