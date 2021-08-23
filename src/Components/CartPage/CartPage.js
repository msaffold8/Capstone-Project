import "./CartPage.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProductQuantity } from "../ProductQuantity/ProductQuantity";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faLongArrowAltLeft,
  faAngleDown,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImageThumbnail } from "../ImageThumbnail/ImageThumbnail";

export const CartPage = (props) => {
  const [cart, setCart] = useState({ items: [] }); //default value of cart. Mapping over Arr

  useEffect(() => {
    //get items[] data from cart endpoint => .map over arr for new rows of data
    axios
      .get(`http://localhost:3002/cart`, {
        method: "GET",
      })
      .then((response) => {
        const newCart = response.data;
        setCart(newCart);
      });
  }, []);

  const style = {
    color: "#fff",
    marginRight: 180,
  };
  const price = {
    marginRight: 10,
  };
  return (
    <div>
      <Header />
      <div className="cartPage">
        <div class="container mt-5 p-3 rounded cart">
          <div class="row no-gutters">
            <div class="col-md-8">
              <div class="product-details mr-2">
                <h6 className="mb-4">Shopping cart</h6>

                <div class="d-flex flex-row align-items-center">
                  <Icon icon={faLongArrowAltLeft} />
                  <span class="mr-5">Continue Shopping</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                  <span>Item</span>
                  <span>Quantity</span>
                  <span>Price</span>
                </div>

                {/* Map over items Arr in cart   */}

                {cart.items.map((item) => {
                  // return row of cart items
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded"
                  >
                    <div class="d-flex flex-row">
                      <ImageThumbnail isThumbnail={true} />
                      <div class="ml-2">
                        <span class="font-weight-bold d-block">
                          Iphone {item.productTitle}
                        </span>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                      <span style={style}>
                        <ProductQuantity />
                      </span>
                      <a>
                        {" "}
                        <span style={price}>$900 {item.productPrice}</span>
                      </a>
                      <a href="hello.com">
                        <Icon icon={faTrash} />
                      </a>
                    </div>
                  </div>;
                })}
              </div>
            </div>

            <div class="col-md-4">
              <div class="payment-info1">
                <div class="d-flex justify-content-between align-items-center">
                  <span>Card details</span>
                  <img class="rounded" src="" width="30" />
                </div>
                <span class="type d-block mt-3 mb-1">Card type</span>
                <label class="radio">
                  {" "}
                  <input type="radio" name="card" value="payment" />{" "}
                  <span>
                    <img
                      width="30"
                      src="https://img.icons8.com/officel/48/000000/visa.png"
                    />
                  </span>{" "}
                </label>

                <label class="radio">
                  {" "}
                  <input type="radio" name="card" value="payment" />{" "}
                  <span>
                    <img
                      width="30"
                      src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                    />
                  </span>{" "}
                </label>
                <label class="radio">
                  {" "}
                  <input type="radio" name="card" value="payment" />{" "}
                  <span>
                    <img
                      width="30"
                      src="https://img.icons8.com/officel/48/000000/paypal.png"
                    />
                  </span>{" "}
                </label>
                <div>
                  <label class="credit-card-label">Name on card</label>
                  <input type="text" class="form-control " placeholder="Name" />
                </div>
                <div>
                  <label class="credit-card-label">Card number</label>
                  <input
                    type="text"
                    class="form-control credit-inputs"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label class="credit-card-label">Date</label>
                    <input
                      type="text"
                      class="form-control "
                      placeholder="12/24"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="credit-card-label">CVV</label>
                    <input
                      type="text"
                      class="form-control credit-inputs"
                      placeholder="342"
                    />
                  </div>
                </div>
                <hr class="line" />
                <div class="d-flex justify-content-between information">
                  <span>Subtotal</span>
                  <span>$3000.00</span>
                </div>
                <div class="d-flex justify-content-between information">
                  <span>Shipping</span>
                  <span>$20.00</span>
                </div>
                <div class="d-flex justify-content-between information">
                  <span>Total(Incl. taxes)</span>
                  <span>$3020.00</span>
                </div>
                <button
                  class="btn btn-block d-flex justify-content-center mt-3"
                  type="button"
                >
                  <span>
                    Checkout<i class="fa fa-long-arrow-right ml-1"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
