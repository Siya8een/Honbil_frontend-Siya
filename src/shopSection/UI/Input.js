import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  //console.log("RentalItemForm", props.input);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
