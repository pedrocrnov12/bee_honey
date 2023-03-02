import React, { useState, useEffect } from "react";
import axios from "axios";


interface Product {
    Id_producto: any ;
    Id_Categoria: any;
    Nombre_Producto: string;
    Descripcion_Producto: any
    Costo_Producto: any;
    Existencias: any;
    

    
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/bee/productos")
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    
    <div style={{ 
       
      display: "flex", 
      
     
      backgroundImage: `url(/add.jpg)`,
      
      
      
  }}>


      <div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr ',
  gridGap: '1em',
textAlign:'center',
borderRadius: '1em',
  fontFamily: 'cursive',
  padding: '1em',
  height: '100%',
  width: '100%',
}}>
  {products.map(product => (
    <div key={product.Id_producto} style={{ backgroundColor: 'white', padding: '1em',backgroundImage: `url(/9.jpg)` }}>
      <h3>{product.Nombre_Producto}</h3>
      <p>{product.Descripcion_Producto}</p>
      <p>Costo: ${product.Costo_Producto}</p>
      <p>Existencias: {product.Existencias}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img style={{ width: '40%', height: '40%' }} src="/dulce5.png" alt="" />
  <button style={{ marginTop: '1em', borderRadius:'1em' }}>Comprar</button>
</div>

    </div>
  ))}
</div>

    </div>
  );
};

export default ProductList;
