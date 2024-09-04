import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import ReviewCard from "./Review";
import AddReview from "./submitReview";
import ReactMapGL, { Marker } from "react-map-gl";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import RatingStars from "./RatingStars";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  RentalCards,
  CardImage,
  CardContent,
  CardTitle,
  Tags,
  Buttons,
  Button28,
} from "./cardCss";
import Header from "./Header";
import AvailableRentals from "./Bikes/AvailableRentals";
import RentalDescription from "./Bikes/RentalDescription";

const MapContainer = styled.div`
  width: 100%; /* Adjust width as needed */
  height: 300px; /* Adjust height as needed */
`;

const MapWrapper = styled.div`
  width: 100%; /* Make the map container width equal to the card */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// import { useProductContext } from "../context/productcontext";
// import PageNavigation from "./components/PageNavigation";
// import MyImage from "./components/MyImage";

// import AddToCart from "./AddToCart";

// const API = "https://honbil-back.onrender.com/api/v1/rentals";

const Container = styled.div`
  width: 100%;
  padding: 0rem 12rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const SingleProduct = () => {
  // const { getSingleProduct, isSingleLoading, singleProduct } =
  //   useProductContext();

  const navigate = useNavigate();
  const Navigatetocontactpage = () => {
    navigate("/contact");
  };

  const calculateRentalRating = (reviews) => {
    if (reviews.length !== 0) {
      let rating = 0;
      reviews.map((review) => {
        return (rating = rating + review.rating);
      });
      return rating / reviews.length;
    } else {
      return 0;
    }
  };

  const params = useParams();
  const rentalId = params.id;

  const [SingleRental, setSingleRentals] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  //screen loading
  const [screenLoading, setScreenLoading] = useState(true);

  let initialViewports = {
    latitude: 0,
    longitude: 0,
    zoom: 5,
    width: 300,
    height: 300,
  };

  useEffect(() => {
    fetch(`https://honbil-back.onrender.com/api/v1/rentals/${rentalId}`)
      .then((response) => response.json())
      .then((users) => {
        console.log("single_rental_data", users.data);
        setSingleRentals(users.data.rentals);
        setName(users.data.username);
        setPhone(users.data.phone);

        setLocation(users.data.geometry);

        setImage(users.data.images[0].url);

        setScreenLoading(false);
        initialViewports.latitude = users.data.geometry.coordinates[1];
        initialViewports.longitude = users.data.geometry.coordinates[0];
      });
  }, [rentalId]);

  const Locationdata = { ...location.coordinates };

  const [viewport, setViewport] = useState(initialViewports);

  return (
    <>
      {" "}
      {screenLoading ? (
        <CenteredDiv>
          <BounceLoader color="#36d7b7" />
        </CenteredDiv>
      ) : (
        <Wrapper>
          {/* <PageNavigation title={title} /> */}

          <Container className="container">
            <Header image={image} />
            <div className="grid grid-two-column">
              {/* product Images  */}
              <div className="product_images">
                {/* <div className="grid grid-four-column"> */}
                <figure>
                  <img
                    src={image}
                    alt=""
                    className="box-image--style"
                    key="1"
                  />
                </figure>
                {/* </div> */}
              </div>

              {/* product dAta  */}
              <div className="product-data">
                <hr />

                <div className="product-data-info">
                  <p>
                    Owner : <span> {name} </span>
                  </p>
                  <p>
                    Contact :<span> {phone} </span>
                  </p>
                </div>
                {/* <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price} />
              </del>
            </p> */}
                {/* <p className="product-data-price product-data-real-price">
                  Price: <FormatPrice price={price} />
                </p> */}
                <p>
                  <b>Description : </b>
                  {SingleRental[0].description}
                </p>
                <div className="product-data-warranty">
                  <div className="product-warranty-data">
                    {/* <TbTruckDelivery className="warranty-icon" /> */}
                    <a
                      href={`https://www.google.com/maps?saddr=My+Location&daddr=${Locationdata[1]}%2C${Locationdata[0]}&travelmode=car`}
                      className="text-black"
                    >
                      {" "}
                      Click here for directions
                    </a>
                  </div>
                  {/* 
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>Lorem</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Lorem </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Lorem </p>
              </div> */}
                </div>

                <hr />

                <br />
                <RentalDescription />
                <AvailableRentals SingleRental={SingleRental} />

                {SingleRental.map((rental, index) => {
                  return (
                    <div className="cardss" key={index}>
                      <div className="rental-cards">
                        <div className="card-img">
                          <Image
                            className="rounded-t-lg"
                            src={rental.images[0].url}
                            alt={rental.title}
                          />
                        </div>
                        <div className="card-content">
                          <h2 className="card-title"> {rental.title}</h2>
                          <br />
                          <h3>Price</h3>
                          <FormatPrice price={rental.price} />
                          <hr />
                          <br />
                          <p className="tags">{rental.quantity}</p>
                          <br />

                          <div className="buttons">
                            <button className="button-28" role="button">
                              Add To Cart
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button
                              className="button-28"
                              role="button"
                              onClick={Navigatetocontactpage}
                            >
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <hr />
                {/* <h1 className="product-data-info">Reviews</h1>
                <RatingStars rating={calculateRentalRating(reviews)} />
                <div>
                  {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                      <ReviewCard key={index} {...review} />
                    ))
                  ) : (
                    <h3> No Reviews yet</h3>
                  )}
                  <br />
                  <br />
                  <AddReview />
                </div> */}
              </div>
              <MapWrapper>
                <MapContainer>
                  <ReactMapGL
                    width="100%" // Make the map width fill the container
                    height={300}
                    latitude={Locationdata[1]}
                    longitude={Locationdata[0]}
                    zoom={10}
                    {...viewport}
                    onMove={(evt) => setViewport(evt.viewState)}
                    mapboxAccessToken="pk.eyJ1IjoibXJpZ2VzaHRoYWt1ciIsImEiOiJjbDdwdjZ2MG4wbGVmM3JzMzVtb2U1MnJ0In0.nbEGuAgv1N1c-tXDyR7d4g"
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                  >
                    <Marker
                      latitude={Locationdata[1]}
                      longitude={Locationdata[0]}
                    >
                      <img
                        src="honbil.png"
                        alt="Bike Marker"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Marker>
                  </ReactMapGL>
                </MapContainer>
              </MapWrapper>
            </div>
          </Container>
        </Wrapper>
      )}
    </>
  );
};

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
