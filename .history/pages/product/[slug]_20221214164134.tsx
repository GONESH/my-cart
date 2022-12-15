import { useRouter } from 'next/router';
import React from 'react'
import data from '../../utils/data';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

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
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className="md:col-span-2">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        layout="responsive"
                    ></Image>
                </div>
                <div>
                    <li className='list-style-none'>
                        <h1 className="text-lg">{product.name}</h1>
                    </li>
                    <li>Category: {product.category}</li>
                    <li>Brand: {product.brand}</li>
                    <li>{product.rating} of {product.numReview} reviews</li>
                    <li>Description: {product.description}</li>
                </div>
        </div>

        </Layout >

    );
}
