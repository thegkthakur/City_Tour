import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {

// state for information data show on click on icon
    state={
        showInfo:false
    }

    // method handling on info click

    handleInfo = ()=>{
        this.setState({
            showInfo:!this.state.showInfo
        });
    };

  render() {

    // object from json data through tour component
    const {id, city, img, name, info} = this.props.tour;

    //const for remove button functioning
    const {removeTour} = this.props;

    return (
      <article className="tour">
        {/* Tour Image container for image grid */}
        <div className="img-container">
          <img
            
            src={img}
            alt="Image are Loading"
          />

          {/* close button on hover on Image */}

          <span className="close-btn" onClick={()=>{
              removeTour(id);
              }}>
            <i className="fas fa-window-close" />
          </span>
        </div>

        {/* Tour Image Information */}

        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>

          {this.state.showInfo && <p>{info}</p>}
          
        </div>
      </article>
    );
  }
}
