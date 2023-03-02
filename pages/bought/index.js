import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
    return (
        <PayPalScriptProvider options={{ "client-id": "AVWccsnntg7kXu6RIwM4yVoq7nlVYBm60g3oGr24Q6ZRqGElFnZjJ5DFqRR3fdxkFBBT9kRhnyFs8xty" }}>
            <PayPalButtons style={{ layout: "vertical" }} />
        </PayPalScriptProvider>
    );
}