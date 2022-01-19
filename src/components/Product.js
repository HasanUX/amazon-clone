import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../Context/StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast(`${title} Added to Basket`);
  };

  // const notify = () => toast("Wow so easy !");
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="product__StarIcon" />
            ))}
        </div>
      </div>
      <img className="product__img" src={image} alt="product__img" />
      <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
