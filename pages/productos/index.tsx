import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../../components/navadmin/admin";
import Link from "next/link";

interface Product {
  Id_producto: any;
  Id_Categoria: any;
  Nombre_Producto: string;
  Descripcion_Producto: any;
  Costo_Producto: any;
  Existencias: any;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/bee/productos")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container

    
      fluid
      style={{
        backgroundImage: `url(/lkk.jpg)`,


        paddingTop: "6rem",
        paddingBottom: "2rem",
      }}
    >
      <div>
        <Navbar></Navbar>
      </div>
      <Row xs={1} sm={2} md={4} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.Id_producto}>
            <Card>
              <Card.Img
                variant="top"
                src="/dulce5.png"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.Nombre_Producto}</Card.Title>
                <Card.Text>{product.Descripcion_Producto}</Card.Text>
                <Card.Text>
                  <strong>Costo:</strong> ${product.Costo_Producto}
                </Card.Text>
                <Card.Text>
                  <strong>Existencias:</strong> {product.Existencias}
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    <Link style={{color:'white'}} href={'/productos/updateproduct'}>Editar</Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
