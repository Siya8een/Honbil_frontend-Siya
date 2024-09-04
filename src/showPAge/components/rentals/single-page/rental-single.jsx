import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles, { layout } from "./style";
import Button from "./Button";
import Send from "../../../../assets/owner.png";
import Shield from "../../../../assets/price.png";
import Star from "../../../../assets//Screenshot_2023-01-24_at_22.00.27-removebg-preview.png";

import urlencode from "urlencode";

const RentalSingle = () => {
  const params = useParams();
  const rentalId = params.id;
  console.log(rentalId);

  const [SingleRental, setSingleRentals] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch(`https://honbil-back.onrender.com/api/v1/rentals/${rentalId}`)
      .then((response) => response.json())
      .then((users) => {
        setSingleRentals(users);
        setName(users.data.author.username);
        setPhone(users.data.author.phone);
        setPrice(users.data.price);
        setLocation(users.data.geometry);
      });
  }, [rentalId]);

  const data = SingleRental.data;

  const Locationdata = { ...location.coordinates };
  // setName(data.author.username);

  // console.log(data.geometry);
  const features = [
    {
      id: "feature-1",
      icon: Star,
      title: "Phone no.",
      content: `Contact for booking your rental here:-${phone}`,
    },
    {
      id: "feature-2",
      icon: Send,
      title: "Name of Owner ",
      content: `The name of the owner is :-${name} contact for booking `,
    },
    {
      id: "feature-3",
      icon: Shield,
      title: "Price",
      content: `The pricing is :- ${price}/day please contact the owner for further information`,
    },
  ];
  // const name = data.title;

  // console.log(data.author.phone);
  const FeatureCard = ({ icon, title, content, index }) => (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
  return (
    <body className="h-screen bg-gradient-to-b from-green-200 to-green-500 ">
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Contact the owner , <br className="sm:block hidden" /> and get your
            rental booked.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            To contact a bike rental company, you can try searching online for
            bike rental companies in your area and reach out to them through
            their website or phone number. You could also try asking for
            recommendations from friends or looking for local bike rental shops.
            Once you have found a place, you can inquire about their rental
            policies and prices, and arrange for a rental.
          </p>
        </div>

        <div className={`${layout.sectionImg} flex-col  `}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
          <a
            href={`https://www.google.com/maps?saddr=My+Location&daddr=${Locationdata[1]}%2C${Locationdata[0]}&travelmode=car`}
            className="text-white"
          >
            {" "}
            Click here for directions
          </a>
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Book your ride again <br className="sm:block hidden" /> with us
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
        </div>
      </section>
    </body>
  );
};
export default RentalSingle;
