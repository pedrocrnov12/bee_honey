import axios from 'axios';

interface FormData {
  Nombre: string;
  Correo_Electronico: string;
  Contraseña: string;
 

}

const instance = axios.create({
  baseURL: 'http://localhost:4000/bee/signUp'
});

export const register = (data: FormData) => instance.post('', data);
