import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import FadeLoader from "react-spinners/FadeLoader";
import styled from "styled-components";
import CartContext from "../store/cart-context";
import axios from "axios";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  //screen loading
  const [screenLoading, setScreenLoading] = useState(false);
  const [userId, setUserId] = useState(null); // Initialize userId with null

  const id = localStorage.getItem("id");
  console.log(cartCtx.items, id, "in cart");

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleOpenRazorPay = (data) => {
    console.log(data);
    const options = {
      key: "rzp_test_kV55L7JMPIuXkr",
      amount: data.amount,
      currency: data.currency,
      name: "HonBil",
      description:
        "Before payment please ensure that you have an active working mail id as we will send the transaction receipt on your mail",
      image: "honbil.png",
      order_id: data.id,
      handler: function (response) {
        console.log("response_rzp", response);
        axios
          .post("https://honbil-back.onrender.com/orders/verify", {
            response: response,
            id: id,
          })
          .then((result) => {
            console.log(result, "order");
          })
          .catch((error) => {
            console.log(error);
          });
      },
      theme: {
        color: "#00df9a",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = (id, totalAmount, data) => {
    setScreenLoading(true);
    axios
      .post("https://honbil-back.onrender.com/orders/create", {
        user: id,
        amount: totalAmount * 100,
        data,
      })
      .then((result) => {
        console.log(result.data.order, "order");
        setScreenLoading(false);
        handleOpenRazorPay(result.data.order);
      })
      .catch((error) => {
        setScreenLoading(false);
        console.log(error);
      });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      {screenLoading ? (
        <Modal>
          <h2 className="section__title text-[#00df9a]">
            Getting the Payment Service Ready
          </h2>
          <br />
          <FadeLoader color="#36d7b7" />
        </Modal>
      ) : (
        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>&#8377; {totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button
                className={classes.button}
                onClick={() => {
                  handlePayment(id, totalAmount, cartCtx.items);
                }}
              >
                Order
              </button>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
