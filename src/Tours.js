import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="">
      <h2>Our Tours</h2>

      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
      })}
    </section>
  );
};

export default Tours;
