import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams(); // { id:5}
  const [state, setState] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    category: "",
  });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, [id]);
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div className="details">

      <div className="details-left">

      <img src={state.image} width={300} height={300} alt="ss"/>
      </div>
      <div className="details-right">
        <h2 className="margin">{state.title}</h2>
        <p className="margin">
          {state.description}
        </p>
        <div className="price-rat">

        <h4>
          {/* {state.rating.rate} */}
        </h4>
        <h3 className="font">
         $ {state.price}
        </h3>
        <div className=" buttons">

        <button> Add to card</button>
        <button> Buy Now</button>
        </div>
        </div>
      </div>
    </div>
     
      </div>
  );
}

export default ProductDetails;
