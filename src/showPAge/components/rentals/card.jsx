import React, { useState } from "react";
import "./rental.css";
import "./card-list.style.css";

const Card = (props) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { rentals } = props;

  console.log(rentals);
  return (
    <div className="services__content">
      <div className="card-list">
        {rentals.map((monsters) => {
          return (
            <div className="card-container" key={monsters._id}>
              <img alt={`monster ${monsters.title}`} src={monsters.image} />
              <h2>{monsters.name}</h2>
              <p>{monsters.roll}</p>
            </div>
          );
        })}
      </div>
      <div>
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">Heloo1</h3>
      </div>
      <span
        className="services__button"
        onClick={() => {
          toggleTab(1);
        }}
      >
        View More <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          <h3 className="services__modal-title">helo</h3>
          <p className="services__modal-description">
            {" "}
            lorem lorem lorem lorem
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-services">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info"> check data</p>
            </li>
            <li className="services__modal-services">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info"> check data</p>
            </li>
            <li className="services__modal-services">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info"> check data</p>
            </li>
            <li className="services__modal-services">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info"> check data</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
