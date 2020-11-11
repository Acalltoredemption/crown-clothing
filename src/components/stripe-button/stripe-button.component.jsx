import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hm7K4KLqRjmZSUwz8DvF8r86J5deTcdD2rJ3MnRFzDoaBc04I1bT4Vk4Y7qDZLPuuTzyZNk381dqJSg3lBfvqYe00WO0MRBiH';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://img.freepik.com/free-vector/modern-crown-logo-royal-king-queen-abstract-logo-vector_42875-428.jpg?size=338&ext=jpg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;