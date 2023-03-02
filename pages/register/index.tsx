import React, { useState } from 'react';
import { register } from '../api/register';
import { useRouter } from 'next/router';

;

interface FormData {
  Nombre: string;
  Correo_Electronico: string;
  Contraseña: string;
}

const Login: React.FC = () => {
  const router= useRouter();
  const [formData, setFormData] = useState<FormData>({
    Nombre: '',
    Correo_Electronico: '',
    Contraseña: '',
    

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await register(formData);
      router.push('/login');

      console.log(response.data);
    } catch (error) {
      console.error(error);
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
      }} >
        <img src={"/p.png"} style={{  top: "1em", left: "1em", height:"100px" }} alt="Logo" />
<h2 style={{color: "white"}}>Crear Una Cuenta</h2>
      <input
        type="text"
        name="Nombre"
        placeholder="Nombre"
        value={formData.Nombre}
        onChange={handleChange}
        style={{ width: "350px", padding: "0.5em", margin: "0.5em 0", borderRadius: "10px", border: "1px solid gray", fontSize: "1em", }}
      />
      <input
        type="email"
        name="Correo_Electronico"
        placeholder="Correo_Electronico"
        value={formData.Correo_Electronico}
        onChange={handleChange}
        style={{ width: "350px", padding: "0.5em", margin: "0.5em 0", borderRadius: "10px", border: "1px solid gray", fontSize: "1em", }}
      />
      <input
        type="password"
        name="Contraseña"
        placeholder="Contraseña"
        value={formData.Contraseña}
        onChange={handleChange}
        style={{ width: "350px", padding: "0.5em", margin: "0.5em 0", borderRadius: "10px", border: "1px solid gray", fontSize: "1em", }}
      />
      <button type="submit"style={{ padding: "0.5em 1em", marginTop: "1em", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none", fontSize: "1em", cursor: "pointer" }} >Registrarse</button>
      
    </form>
    </div>
  );
};

export default Login;
