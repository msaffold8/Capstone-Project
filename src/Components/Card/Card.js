import "./Card.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
  const style = {
    marginLeft: 10,
  };

  return (
    <div className="productCard">
      {products
        ? products.map((product) => {
            return (
              <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
                <div class="card">
                  <div class="inner-card">
                    {" "}
                    <img src={product.productImage} height="250" width="auto" />
                    <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                      <h4>{product.productTitle}</h4>{" "}
                      <span class="heart">
                        <Icon icon={faHeart} />
                      </span>
                    </div>
                    <div class="mt-2 px-2">
                      {" "}
                      <small>{product.productDescription}</small>{" "}
                    </div>
                    <div class="px-2">
                      <h3>$500{product.productPrice}</h3>
                    </div>
                    <div class="px-2 mt-3">
                      {" "}
                      <button class="btn px-3">Add to Wishlist</button>{" "}
                      <button class="btn px-3">Add to cart</button>{" "}
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
