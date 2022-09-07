import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import { UseStateProvider } from "./Contexts/StateProvider";

const Products = ({
  id,
  title,
  price,
  img_1,
  title1,
  Name2,
  Name3,
  Name4,
  img_2,
  img_3,
  img_4,
  rip,
  zip,
  rating,
}) => {
  const [{ basket }, dispatch] = UseStateProvider();

  const addtobasket = () => {
    dispatch({
      type: "added",
      item: {
        id: id,
        tit: title,
        pri: price,
        one: img_1,
        N: title1,
        two: img_2,
        N_2: Name2,
        three: img_3,
        N_3: Name3,
        four: img_4,
        N_4: Name4,
        rip: rip,
        zip: zip,
        rate: rating,
      },
    });
  };

  return (
    <div className="Product d-flex modal-dialog-centered m-2 p-4 w-100 bg-white">
      <div className="product_info fw-bolder text-center">
        <p className="fs-4">{title}</p>
        <div className="product_rating d-flex justify-content-space text-center">
          {Array(rating)
            .fill()
            .map(() => {
              <p className="modal-dialog-centered d-flex"></p>;
              return "🌟";
            })}
          <p className="product_price mt-1 text-start pb-3">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
      <div>
        <div className={`${rip}`}>
          <div className="product_info mb-3 fw-bolder">
            <img className="w-100 mb-3" src={img_1} alt="Amazon_Product" />
          </div>
          <div className="product_info mb-3 fw-bolder">
            <img
              className={`w-75 pb-5 ${zip}`}
              src={img_2}
              alt="Amazon_Product"
            />
          </div>
        </div>
        <div className={`${zip}`}>
          <div className="product_info mb-3 fw-bolder">
            <img className="w-100 mb-3" src={img_3} alt="Amazon_Product" />
          </div>
          <div className="product_info mb-3 fw-bolder">
            <img className="w-100 mb-3" src={img_4} alt="Amazon_Product" />
          </div>
        </div>
      </div>

      <button
        className="text-dark mt-2 fw-bolder text-center"
        onClick={addtobasket}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Products;
