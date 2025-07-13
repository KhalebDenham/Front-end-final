// MovieList: a container for all the Movie components and their data.
import React from "react";
import Movie from "./Movie";
import blobImg from "../img/theBlob.jpg";
import styles from "../styles/MovieList.module.css";
import eclaireImg from "../img/eclaire.jpg";
import choccyImg from "../img/choccyasp.jpg";
import ReviewList from "./ReviewList";
import theFlower from "../img/theFlower.jpg";
import kissy from "../img/kissy.jpg";
import astro from "../img/2gayastronauts.jpg";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.movies = [
      {
        id: 1,
        img: blobImg,
        title: "The Blob",
        year: 2001,
        synopsis: "Man Melting Horror beyond comprehension",
        reviews: [
          {
            name: "Test name",
            rating: 2,
            text: "Not gonna lie, cgi holds up for the time but the writing is awful",
          },
        ],
      },
      {
        id: 2,
        img: eclaireImg,
        title: "Serene Eclaire",
        year: 1998,
        synopsis: "Your mothers favorite cooking documentary",
        reviews: [],
      },
      {
        id: 3,
        img: choccyImg,
        title: "Chocolate Asparagus",
        year: 2000,
        synopsis: "A sweet escape into the world of gardening",
        reviews: [
          {
            name: "MargaritaMargarett",
            rating: 5,
            text: "Keeps me cozy in bed",
          },
          {
            name: "TooShortSteve",
            rating: 3,
            text: "It is what it is :(",
          },
        ],
      },
      {
        id: 4,
        img: theFlower,
        title: "The Way We Are",
        year: 1998,
        synopsis: "Psychological thriller of the nature of humanity",
        reviews: [],
      },
      {
        id: 5,
        img: kissy,
        title: "Upside down yardrats",
        year: 1985,
        synopsis: "Quippy summer blockbuster friendly for all ages",
        reviews: [],
      },
      {
        id: 6,
        img: astro,
        title: "Silent Walk: Farscape Expression",
        year: 1955,
        synopsis: "Classic heros journey in space; NO NOISE",
        reviews: [],
      },
    ];
  }

  render() {
    return (
      <div className={styles.movieListWrapper}>
        {this.movies.map((movie, index) => (
          <div key={index}>
            <Movie
              id={movie.id}
              img={movie.img}
              title={movie.title}
              year={movie.year}
              synopsis={movie.synopsis}
            />
            <ReviewForm movie={movie.reviews}/>
            {/* <ReviewList reviews={movie.reviews} /> */}
            
          </div>
        ))}
      </div>
    );
  }
}
