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
  Id_Categoria: number;
  Nombre_Producto: string;
  Descripcion_Producto: string;
  Costo_Producto: number;
  Existencias: number;
  image_url: string;
}

const UpdateProduct: React.FC = () => {
const [product, setProduct] = useState<NewProduct>({Id_producto:"", Id_Categoria: 0, Nombre_Producto:"", Descripcion_Producto:"" , Costo_Producto: 0, Existencias: 0, image_url:""});

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
      
  <div style={{ backgroundImage: `url(/lkk.jpg)`,
    
    width: '100%',
    padding: '100px',
    backgroundSize: 'cover',

    
    }}>
      <div>
        <Navbar></Navbar>
      </div>
    <form onSubmit={handleSubmit} className="p-4 position-relative bg-light rounded-3 shadow-sm animate__animated animate__slideInUp" style={{ height: "65%", width: "35%", margin: "auto", }}>
      <h3 className="text-center mb-4">Actualizar Producto</h3>
      <div className="mb-3">
        <label htmlFor="Id_producto" className="form-label">Id_producto:</label>
        <input type="text" id="Id_producto" name="Id_producto" value={product.Id_producto} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Id_Categoria" className="form-label">Id_Categoria:</label>
        <input type="text" id="Id_Categoria" name="Id_Categoria" value={product.Id_Categoria} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Nombre_Producto" className="form-label">Nombre_Producto:</label>
        <input type="text" id="Nombre_Producto" name="Nombre_Producto" value={product.Nombre_Producto} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Descripcion_Producto" className="form-label">Descripcion_Producto:</label>
        <input type="text" id="Descripcion_Producto" name="Descripcion_Producto" value={product.Descripcion_Producto} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Costo_Producto" className="form-label">Costo_Producto:</label>
        <input type="text" id="Costo_Producto" name="Costo_Producto" value={product.Costo_Producto} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Existencias" className="form-label">Existencias:</label>
        <input type="text" id="Existencias" name="Existencias" value={product.Existencias} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="image_url" className="form-label">Image URL:</label>
        <input type="text" id="image_url" name="image_url" value={product.image_url} onChange={handleInputChange} className="form-control" />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-4 animate__animated animate__zoomIn"
        onClick={() => {
          Swal.fire("Producto agregado", "", "success");
        }}
      >
        Actualizar producto
      </button>
    </form>
  </div>
);
};




export default UpdateProduct;
