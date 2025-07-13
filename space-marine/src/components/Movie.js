// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
import React from "react";
import styles from "../styles/Movie.module.css";

export default class Movie extends React.Component { //
  constructor(props) { //all possible movie information being supered over the class
    super(props);

    this.id = props.id;
    this.img = props.img;
    this.title = props.title;
    this.year = props.year;
    this.synopsis = props.synopsis;
  }

  render() { //rendering the class visually
    return (
      <div className={styles.movieWrapper}> 
        <img height="350px" src={this.img} alt={this.title}></img>
        <h4>
          {this.title} {this.year}
        </h4>
        <p>{this.synopsis}</p>
      </div>
    );
  }
}
