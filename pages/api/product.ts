import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/products');
    
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchProducts;