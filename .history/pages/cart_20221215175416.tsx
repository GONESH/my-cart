import Link from 'next/link';
import React, { useContext } from 'react'
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/24/outline';

export default function CartScreenb() {
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    return (
        <Layout title="Shopping Cart">
            <h1 className="mb-4 text-xl">Shopping Cart</h1>
            {
                cartItems.length === 0 ?
                    (<div>
                        Cart is empty. <Link href="/">Go Shopping</Link>
                    </div>) :
                    (
                        <div className="grid md:grid-cols-4 md:gap-5">
                            <div className="overflow-x-auto md:col-span-3">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th className="px-5 text-left">Item</th>
                                            <th className="px-5 text-left">Quantity</th>
                                            <th className="px-5 text-left">Price</th>
                                            <th className="p-5">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.slug} className="border-b">
                                                <td>
                                                    <Link href={`/product/${item.slug}`} className="flex items-center">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                        ></Image>
                                                        &nbsp;
                                                        {item.name}


                                                    </Link>
                                                </td>
                                                <td className="p-5 text-right">{item.quantity}</td>
                                                <td className="p-5 text-right">${item.price}</td>
                                                <td className="p-5 text-right">
                                                    <button>
                                                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
            }
        </Layout>
    )
}
