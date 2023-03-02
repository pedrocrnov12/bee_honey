import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

interface NewProduct {
  Id_producto: string;
  
}

const UpdateProduct: React.FC = () => {
const [product, setProduct] = useState<NewProduct>({Id_producto:"" });

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = event.target;
setProduct({ ...product, [name]: value });
};

const  deleteProduct = (product: NewProduct) => {
axios

.delete(`http://localhost:4000/bee/productos/${product.Id_producto}`, product, )
.then(response => {(response.headers )
console.log("Product updated successfully");
// Actualiza la lista de productos después de actualizar el producto
})
.catch(error => console.error(error));
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
deleteProduct(product);
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
      
     
      
      
      
      <button
    style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", marginTop:'3em' }}
    type="submit"
    onClick={() => {
    Swal.fire("Producto Eliminado", "", "success");
  }}
>
    Eliminar
</button>



    </form>
  
  </div>
  );
};




export default UpdateProduct;
