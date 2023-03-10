import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../api/api';
import Link from 'next/dist/client/link';


const Login: React.FC = () => {
  const [Correo_Electronico, setCorreo_Electronico] = useState('');
  const [Contraseña, setContraseña] = useState('');
 
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await login(Correo_Electronico, Contraseña);
      console.log(response);
      
      // Guarda el token en el almacenamiento local
      localStorage.setItem('token', response.token);
      router.push('/pay');
    } catch (error) {
      setError('');
    }
  };

  return (
    <div style={{ 
        height: "100vh", 
        width: "100vw", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundImage: `url(/sunset.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative"
    }}>
      <img src={"/bee.png"} style={{ position: "absolute", top: "1em", left: "1em", height:"100px" }} alt="Logo" />
      
      <form onSubmit={handleSubmit} style={{ 
        
    backgroundImage: `url(/l.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    padding: "1em", 
    height: "65%", 
    width: "30%", 
    position: "relative" 
  }}
>  
<img src={"/p.png"} style={{  top: "1em", left: "1em", height:"100px" }} alt="Logo" />
<h2 style={{color: "white"}}>¡Inicia Sesion Para Disfrutar¡</h2>
  <input
    type="text"
    placeholder="Correo_Electronico"
    value={Correo_Electronico}
    onChange={(e) => setCorreo_Electronico(e.target.value)}
    style={{ width: "350px", padding: "0.5em", margin: "0.5em 0", borderRadius: "10px", border: "1px solid gray", fontSize: "1em", }}
  />
  <input
    type="password"
    placeholder="Contrasena"
    value={Contraseña}
    onChange={(e) => setContraseña(e.target.value)}
    style={{ width: "350px", padding: "0.5em", margin: "0.5em 0", borderRadius: "10px", border: "1px solid gray", fontSize: "1em" }}
  />
  <button type="submit" style={{ padding: "0.5em 1em", marginTop: "1em", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none", fontSize: "1em", cursor: "pointer" }}>
    iniciar Sesion
  </button>
  {error && <p  style={{ marginTop: "0.5em", color: "red", fontSize: "0.8em" }}>{error}</p>}

  <div>
   <Link href='/register' style={{   color: "white", border: "none"}}>¿no tienes cuenta?</Link>
  </div>
</form>

      
    </div>
  );



  
  
};

export default Login;
