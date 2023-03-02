import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/bee/login',
  headers: {
  'Content-Type': 'application/json;charset=UTF-8',
  'Acces-control-Allow-Origin': '*'
  }
  });


export const login = async (Correo_Electronico: string, Contraseña: string,) => {
  try {
    const response = await instance.post('/', {
      Correo_Electronico,
      Contraseña,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
