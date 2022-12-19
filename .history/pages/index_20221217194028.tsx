/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';
import db from '../utils/db';
import Product from '../models/Product';
import { Store } from '../utils/Store';
import axios from 'axios'


export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);

  const { cart } = state;


  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      alert('Sorry, Product out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })

  }
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}>

          </ProductItem>
        ))}

      </div>
    </Layout>

  );
}
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  }


}
