import Card from "../UI/Card";
import RentalItem from "./RentalItem/RentalItem";
import classes from "./AvailableRentals.module.css";

const AvailableRentals = (props) => {
  const { SingleRental } = props;
  const RentalsList = SingleRental.map((rental) => (
    <RentalItem
      key={rental._id}
      id={rental._id}
      name={rental.title}
      description={rental.description}
      price={rental.price}
      image={rental.images[0].url}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{RentalsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableRentals;
