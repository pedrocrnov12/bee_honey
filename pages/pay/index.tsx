import React from 'react';
import Link from 'next/link';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const HistorySection = () => (
  <div style={{
    height: '100vh',
    width: '100%',
    padding: '100px',
    backgroundImage: `url(/madera.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <img src={"/bee.png"} style={{ position: "absolute", top: "1em", left: "1em", height:"100px" }} alt="Logo" />
    <h2 style={{
      fontWeight: 'bold',
      marginBottom: '30px',
      fontSize: '40px',
        marginTop: '-10vh'
      ,
      color: '#fff'
    }}>
      Seleccione Su Metodo De Pago
    </h2>
    <p style={{
      fontSize: '18px',
      lineHeight: '1.5',
      marginBottom: '30px',
      maxWidth: '600px',
      margin: '0 auto',
      color: '#fff'
    }}>
      
    </p>

    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '80%',
      margin: '50px auto'
    }}>
        <div style={{ 
        
        backgroundImage: `url(/madera.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex", 
        flexDirection: "column", 
       
        padding: "4em", 
        height: "100%", 
        width: "50%", 
        position: "relative",
        margin:'auto'
      }} >
        <PayPalScriptProvider  options={{ "client-id": "AVWccsnntg7kXu6RIwM4yVoq7nlVYBm60g3oGr24Q6ZRqGElFnZjJ5DFqRR3fdxkFBBT9kRhnyFs8xty" }}>
            <PayPalButtons style={{ layout: "vertical" }} />
        </PayPalScriptProvider>
        </div>


    </div>
    <Link href="/" style={{
  textDecoration: 'none',
  color: '#FFF',
  fontWeight: 'bold'
}}>
  Volver a inicio
</Link>

  </div>
);

export default HistorySection
