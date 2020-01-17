import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tours: tourData
  };
  removeTour = id => {
    const updatedTours = this.state.tours.filter(item => item.id !== id);
    this.setState({
      tours: updatedTours
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tour__list">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
