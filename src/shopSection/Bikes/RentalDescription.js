import classes from "./RentalDescription.module.css";

import { BiPhoneCall } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
const RentalDescription = (props) => {
  const { name } = props;
  // console.log(name);
  return (
    <section className={classes.summary}>
      <h2>HonBil Bikes</h2>
      <hr />
      <br />
      <p className="font-extrabold text-3xl tracking-wider">{name.name}</p>
      <div className="details flex w-full justify-evenly mt-5">
        <div className="h-10 w-10 rounded-full border-2 border-[#00df9a] flex justify-center align-center items-center">
          <a>
            <BiPhoneCall style={{ fontSize: "1.4em", fill: "#00df9a" }} />
          </a>
        </div>
        <div className="h-10 w-10 rounded-full border-2 border-[#00df9a] flex justify-center align-center items-center">
          <a>
            <BiLocationPlus style={{ fontSize: "1.4em", fill: "#00df9a" }} />
          </a>
        </div>
        <div className="h-10 w-10 rounded-full border-2 border-[#00df9a] flex justify-center align-center items-center">
          <a>
            <AiOutlineShareAlt style={{ fontSize: "1.4em", fill: "#00df9a" }} />
          </a>
        </div>
        <div className="h-10 w-10 rounded-full border-2 border-[#00df9a] flex justify-center align-center items-center">
          <a>
            <AiOutlineWhatsApp style={{ fontSize: "1.4em", fill: "#00df9a" }} />
          </a>
        </div>
      </div>

      {/* <p>{name.location}</p> */}
    </section>
  );
};

export default RentalDescription;
