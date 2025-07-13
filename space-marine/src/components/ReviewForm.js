// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: 0,
            name: '',
            text: '',
            movie: this.props.movie
        };
    }

    handleName (e) {
        this.setState({name: e.target.value})
    }
    handleRating (newRating) {
        this.setState({rating: newRating})
    }
   
    handleText(e) {
        this.setState({text: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const review = {
            ...this.state,
        }

        this.props.movie.push(review) //pushes the review from the input information into the current review
        this.setState({movie: [...this.props.movie, review]}) //sets the state from the previously pushed review and the movie prop information
        this.forceUpdate(); //forces a re-render

    }
  render() {
    return (
        <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Rating:</label>
        <Stars handleRating={this.handleRating.bind(this)}/>

        <label>Name:</label>
        <input onChange={(e) => this.handleName(e)}></input>
        
        <label>Review:</label>
        <textarea onChange={(e) => this.handleText(e)}></textarea>
        <button>Post Review</button>
      </form>
      <ReviewList reviews={this.props.movie}/>
      </div>
    );
  }
}
