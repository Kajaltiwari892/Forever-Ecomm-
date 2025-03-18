import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // Call your backend to create a PaymentIntent using the calculated amount
    const response = await fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }), // amount in cents
    });
    const data = await response.json();
    const clientSecret = data.clientSecret;

    // Confirm the payment with the card details
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: "Customer Name" },
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      // Optionally, update your backend that payment succeeded
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <CardElement options={{ hidePostalCode: true }} />
      <button
        disabled={processing || succeeded}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {succeeded && <div className="text-green-500 mt-2">Payment succeeded!</div>}
    </form>
  );
};

export default CheckoutForm;
