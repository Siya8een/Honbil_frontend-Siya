import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../UI/Input";
import classes from "./RentalItemForm.module.css";

const RentalItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const params = useParams();
  const rentalId = params.id;

  const loginCheck = () => {
    if (user === undefined || user === null) {
      console.log("inlogincheck1");
      navigate("/login");
    } else {
      console.log("inlogincheck2");
      navigate(`/rentals/${rentalId}`);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={loginCheck}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default RentalItemForm;
