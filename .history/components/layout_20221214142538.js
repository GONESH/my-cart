import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Layout({ title,children}) {
    return (
        <>
            <Head>
                <title>{title? title + '- myCart ':'myCart'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
                        <Link href="/" className="text-lg font-bold">
                            myCart
                        </Link>
                        <div>
                            <Link href="/cart"><a className='p-2'>Cart</a></Link>
                            <Link href="/login"><a className='p-2'></a>
                            </Link>

                        </div>
                    </nav>
                </header>

                <main>{children}</main>
                <footer>footer</footer>
            </div>

        </>

    );
}