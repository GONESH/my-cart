import { useRouter } from 'next/router';
import React from 'react'
import data from '../../utils/data';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ProductScreen() {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find((x) => x.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <Layout title={product.name}>
            <div className='py-2'>
                <Link href='/'>back To Product</Link>
            </div>

        </Layout>

    );
}
