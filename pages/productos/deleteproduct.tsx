import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css';
import { url } from "inspector";
import Navbar from "../../components/navadmin/admin";


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

.delete(`http://localhost:4000/bee/productos/${product.Id_producto}`, )
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
      
  <div style={{ backgroundImage: `url(/lkk.jpg)`,
  backgroundSize: 'cover',
  width: '100%',
  height: '110vh',
  marginTop:'6vh'
    }}>
      <div>
        <Navbar></Navbar>
      </div>
    <form onSubmit={handleSubmit} className="p-4 position-relative bg-light rounded-3 shadow-sm animate__animated animate__slideInUp" style={{ height: "65%", width: "35%", margin: "auto", }}>
      <h3 className="text-center mb-4">Eliminar Producto</h3>
      <div className="mb-3">
        <label htmlFor="Id_producto" className="form-label">Id_producto:</label>
        <input type="text" id="Id_producto" name="Id_producto" value={product.Id_producto} onChange={handleInputChange} className="form-control" />
      </div>
      
      <button
        type="submit"
        className="btn btn-primary mt-4 animate__animated animate__zoomIn"
        onClick={() => {
          Swal.fire("Producto agregado", "", "success");
        }}
      >
       Eliminar
      </button>
    </form>
  </div>
);
};




export default UpdateProduct;
