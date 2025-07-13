// ReviewList: a container inside of a Movie that houses Review components.

import React from "react";
import Review from "./Review";

export default class ReviewList extends React.Component { 
  constructor(props) {
    super(props);

    this.reviews = props.reviews;
  }

  render() {
    return (
      //for each review in the list of the reviews, return a review
      <div>
        {this.props.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    );
  }
}
