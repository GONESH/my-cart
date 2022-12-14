import axios from 'axios';
import { useRouter } from 'next/router';
import { useReducer, useEffect } from 'react';
import { getError } from '../.././utils/error'
import Layout from '../../components/Layout'


function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, order: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            state;
    }
}
function OrderScreen() {
    const { query } = useRouter();
    const orderId = query.id;
    const [{ loading, error, order },
        dispatch,
    ] = useReducer(reducer, {
        loading: true,
        order: {},
        error: '',
    })
    useEffect(() => {
        const fetchOrder = async () => {
            try {

                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`api/orders/${orderId}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            } catch (err) {
                dispatch({ typpe: 'FETCH_FAIL', payload: getError(err) })
            }
        }
        if (
            !order._id ||
            (order._id && order._id !== orderId)
        ) {

            fetchOrder();
        }
    }, [order, orderId,]);

    const {
        shippingAddress,
        paymentMethod,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        tootalPrice,
        isPaid,
        paidAt,
        isDelivered,
        deliveredAt,
    } = order;

    return (
        <Layout title={`Order ${orderId}`}>
            <h1 className='mb-4 text-xl'>{`Order ${orderId}`}</h1>
            {loading ? (<div>Loading...</div>) :
                error ? (
                    <div className='alert-error'>{error}</div>) :
                    (
                        <div className='grid md:grid-cols-4 md:gap-5'>
                            <div className='overflow-x-auto md:col-span-3'>
                                <div className='card p-5'>
                                    <h2 className='mb-2 text-lg'>Shipping Address</h2>
                                    <div>
                                        {shippingAddress.fullName},{shippingAddress.address},{' '}
                                        {shippingAddress.city},{shippingAddress, postalCode}, {' '}
                                        {shippingAddress.country}
                                    </div>
                                    {isDelivered ? (
                                        <div className='alert-success'>Delivered at {deliveredAt}</div>
                                    ) : (
                                        <div className='alert-error'>Not delivered</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
        </Layout>
    );
}
OrderScreen.auth = true
export default OrderScreen;