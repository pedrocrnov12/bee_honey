import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

interface NewProduct {
  Id_producto: string;
  Id_Categoria: number;
  Nombre_Producto: string;
  Descripcion_Producto: string;
  Costo_Producto: number;
  Existencias: number;
}

const UpdateProduct: React.FC = () => {
const [product, setProduct] = useState<NewProduct>({Id_producto:"", Id_Categoria: 0, Nombre_Producto:"", Descripcion_Producto:"" , Costo_Producto: 0, Existencias: 0 });

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = event.target;
setProduct({ ...product, [name]: value });
};

const  updateProduct = (product: NewProduct) => {
axios

.put(`http://localhost:4000/bee/productos/${product.Id_producto}`, product)
.then(response => {(response.headers )
console.log("Product updated successfully");
// Actualiza la lista de productos después de actualizar el producto
})
.catch(error => console.error(error));
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
updateProduct(product);
};
  
  return (
    <div style={{ 
      height: "100vh", 
      width: "100vw", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundImage: `url(/add.jpg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative"
  }}>
    
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
      position: "relative" ,
      margin :'auto',
      
      marginTop:'30vh'

      
      
    }}>
      <br />
      <label htmlFor="Id_producto" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
      Id_producto
        <input
          type="number"
          id="Id_producto"
          name="Id_producto"
          value={product.Id_producto}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        />
      </label>
      
      <br />
      <label htmlFor="Id_Categoria" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
        Id_Categoria:
        <input
          type="text"
          id="Id_Categoria"
          name="Id_Categoria"
          value={product.Id_Categoria}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        />
      </label>
      <label htmlFor="Nombre_Producto" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "20px" }}>
        Nombre_Producto:
        <input
          type="text"
          id="Nombre_Producto"
          name="Nombre_Producto"
          value={product.Nombre_Producto}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        />
      </label>
      <label htmlFor="Descripcion_Producto" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "20px" }}>
        Descripcion_Producto:
        <input
          type="text"
          id="Descripcion_Producto"
          name="Descripcion_Producto"
          value={product.Descripcion_Producto}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        />
      </label>
      <label htmlFor="Costo_Producto" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "20px" }}>
        Costo_Producto:
        <input
          type="text"
          id="Costo_Producto"
          name="Costo_Producto"
          value={product.Costo_Producto}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        />
      </label>
      <label htmlFor="Existencias" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "20px" }}>
        Existencias:
        <input
          type="text"
          id="Existencias"
          name="Existencias"
          value={product.Existencias}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        />
      </label>
      
      
      
      <button
    style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", marginTop:'3em' }}
    type="submit"
    onClick={() => {
    Swal.fire("Producto Actualizado", "", "success");
  }}
>
    Actualizar Producto
</button>



    </form>
  
  </div>
  );
};




export default UpdateProduct;
