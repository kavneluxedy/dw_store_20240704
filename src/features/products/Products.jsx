import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "./productSlice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const product = { id: 0, name: "Kart", cc: 250 };

  useEffect(() => {
    console.log(products);
  }, []);

  const Product = ({ children }) => {
    return children;
  };

  return (
    <div>
      {/* <button type="button" onClick={() => dispatch(increment())}>
        Increment Products
      </button> */}
      <button type="button" onClick={() => dispatch(add(product))}>
        Add Product
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(update({ id: 1, name: "Kart Yamaha", cc: 300 }))
        }
      >
        Update Product
      </button>
      <br />
      {products.length > 0
        ? products.map((pr, i) => (
            <Product key={pr.name}>
              <b>{pr.name}</b> cc: {pr.cc}
            </Product>
          ))
        : "Le store product est vide"}
    </div>
  );
};

export default Products;
