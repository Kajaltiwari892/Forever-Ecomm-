import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe("pk_test_51R42gpJzzmPOJ6TDnzDFD9929zGJfqs5PZAi3QxDvVi3qlHnB2t7ZhjZxCZszC1Vko7I1GieiZU1qCHjkXBD9PSA00MKh8KJ4b");

const Payment = () => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
   
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    
    
    setCartTotal(Math.round(subtotal * 100));
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Stripe Payment</h1>
        {cartTotal > 0 ? (
          <CheckoutForm amount={cartTotal} />
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </Elements>
  );
};

export default Payment;
