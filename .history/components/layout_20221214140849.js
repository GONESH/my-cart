import Head from 'next/head'
import { title } from 'process'
import React from 'react'

export default function Layout({ title,children}) {
    return (
        <>
            <Head>
                <title>{title? title + '- myCart ':'myCart'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <header>header</header>

                <main>{children}</main>
                <footer>footer</footer>
            </div>

        </>

    )
}