import { Fragment } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={props.image} alt="HonBil Rentals!" />
      </div>
    </Fragment>
  );
};

export default Header;
