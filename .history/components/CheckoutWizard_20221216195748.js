import React from 'react'

export default function CheckoutWizard({ activeStep = 0 }) {
    return (
        <div className='mb-5 flex flex-wrap'>
            {
                ['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
                    (step, index) => {
                        <div>

                        </div>
                    })
            }

        </div>
    )
}
