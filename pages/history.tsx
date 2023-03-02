import React from 'react';
import Link from 'next/link';

const HistorySection = () => (
  <div style={{
    height: '100vh',
    width: '100%',
    padding: '100px',
    backgroundImage: `url(/lkk.jpg)`,
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
    <h1 style={{
      fontWeight: 'bold',
      marginBottom: '30px',
      fontSize: '36px',
    
      color: '#fff'
    }}>
     Bee Haak
    </h1 >
    <h3  style={{
      fontWeight: 'bold',
      marginBottom: '30px',
      fontSize: '22px',
    
      color: '#fff'
    }}> 
    Nuestra Familia
    </h3>
    <p style={{
      fontSize: '18px',
      lineHeight: '1.5',
      marginBottom: '30px',
      maxWidth: '900px',
      margin: '0 auto',
      color: '#fff'
    }}>
      La producción de miel ha sido un arte que se ha transmitido de generación en generación desde hace miles de años. Los primeros apicultores domesticaron las abejas para obtener miel y cera, y desde entonces, la técnica ha evolucionado con el tiempo.
    </p>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '80%',
      margin: '50px auto'
    }}>
      <div style={{
        width: '300px',
        height: '250px',
        backgroundImage: `url(/1.JPEG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
        borderRadius: '10px'
      }} />
      <div style={{
       width: '250px',
       height: '250px',
        backgroundImage: `url(/2.JPEG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        borderRadius: '10px'
      }} />
      <div style={{
        width: '250px',
        height: '250px',
        backgroundImage: `url(/3.JPEG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
     
        borderRadius: '10px'
      }} />
      <div style={{
        width: '250px',
        height: '250px',
        backgroundImage: `url(4.JPEG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
        borderRadius: '10px'
      }} />


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
