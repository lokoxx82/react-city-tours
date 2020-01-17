import React, { Component } from "react";
import "./tour.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class Tour extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tour: this.props,
    showInfo: false
  };

  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { img, city, name, info, id } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="tour__img-container">
          <img className="tour__img" src={img}></img>
          <span className="tour__icon-delete" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>

        <div className="tour__description">
          <h2 className="tour__city">{city}</h2>
          <h3 className="tour__name">{name}</h3>
          <div className="tour__info-box">
            <div className="tour__info-line">
              <p className="tour__info-label">info</p>
              <span className="tour__icon-info" onClick={this.toggleInfo}>
                <i className="fas fa-angle-double-down"></i>
              </span>
            </div>

            {this.state.showInfo && <p className="tour__info-text">{info}</p>}
          </div>
        </div>
      </article>
    );
  }
}
