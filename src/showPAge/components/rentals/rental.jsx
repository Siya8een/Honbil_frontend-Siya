import React, { useState, useEffect } from "react";
import "../../App.css";
// import "./rental.css";
import SearchBox from "./search-box/searchBox.component";
import RentalCard from "./rentalCard";

const Rentals = () => {
  const [searchField, setSearchField] = useState("");

  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch("https://honbil-back.onrender.com/api/v1/rentals")
      .then((response) => response.json())
      .then((users) => setRentals(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredRentals = rentals.filter((rental) => {
    return rental.title.toLocaleLowerCase().includes(searchField);
  });

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Rentals</h2>
      <span className="section__subtitle">
        {" "}
        <SearchBox onChangeHandler={onSearchChange} />
      </span>
      <div className="services__container conatiner grid">
        <RentalCard rentals={filteredRentals} />

        {/* <div className="services__content">
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
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
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
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Heloo2</h3>
          </div>
          <span
            onClick={() => {
              toggleTab(2);
            }}
            className="services__button"
          >
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
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
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Heloo3</h3>
          </div>
          <span
            onClick={() => {
              toggleTab(3);
            }}
            className="services__button"
          >
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
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
        </div> */}
      </div>
    </section>
  );
};

export default Rentals;
