import React, { Component } from "react";
import "./TourList.scss";   //importing tourList SASS stylesheet
import Tour from "../Tour/Tour";         //importing tour component
import {tourData} from '../tourData';    //importing the json data


export default class TourList extends Component {

    // setting the state of json data as array data
  state = {
    tours: tourData
  };

  //method for handling function on close button click
  removeTour =id=>{

    console.log(id);

    const {tours} = this.state;
    const sotrtedTours = tours.filter(tour =>tour.id !==id); 
        this.setState({
            tours:sotrtedTours
        });
  };

  render() {

    const {tours} = this.state;
    return (
      <section className="tourlist">
       
        {/* fetching the json data using map method using ES6 approach*/}

        {tours.map(tour =>{

            return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>;
            

        })}

      </section>
    );
  }
}
