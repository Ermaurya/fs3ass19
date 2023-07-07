import { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div style={{ padding: "30px" }}>
      <h2 >All Products section</h2>
      
      {products.length > 0 ? (
        <div className="container">
          {products.map((product) => {
            return (
              <div className="cardStyle">
                <Link to={`/productdetails/${product.id}`}>
                <img src={product.image} width="200" height="200"alt="img"/>
                <h3 className="text-style">{product.title}</h3>
                <div className="d-flex">

                <p className="price-style">$ {product.price} </p>
                <Link to={`/productdetails/${product.id}`}>
                  <button>Add To Cart</button>
                </Link>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 className="no-product" >
          
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWcmNY2GAwiYRNhEIjngTkRQ-C-lJ8anv8tlkL9lo&s" alt="not fount"/>
        </h2>
      )}
    </div>
  );
}

export default Products;
