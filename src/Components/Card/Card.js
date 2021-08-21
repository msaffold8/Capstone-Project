import "./Card.scss";
import { useEffect, useState } from "react";

export const Card = (props) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3002/products`, {
        method: "GET",
      });
      const data = await response.json();
      setProducts(data.products);
    })();
  }, []);

  return (
    <div>
      {products
        ? products.map((product) => {
            return (
              <div classNameName="card">
                <div className="col-sm-6 col-lg-4">
                  <div className="product-item">
                    <h2>
                      <a href="#">{product.productTitle} </a>
                    </h2>
                    {/* <a href="www.amazon.com" target="_blank"> */}
                    <img src={product.productImage} className="photo" />
                    {/* </a> */}
                    <p>
                      {product.productDescription} ! Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <a href="#" className="save">
                          <i className="far fa-heart"></i> 20 saves
                        </a>
                      </div>
                      <div className="col-6 text-end">
                        <a href="#" className="btn-dp">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "hello World"}
    </div>
  );
};
