import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import MovieList from "./components/MovieList";

//my Ten components are: Button, ButtonGroup, Alert, Card, Container, Form, Table, Switch, Route, Link,

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  const API_URL = "https://68700a5e7ca4d06b34b5d005.mockapi.io/Marine";
  const [marines, setMarines] = useState([""]);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [updatedName, setUpdatedName] = useState("");

  const [newMarine, setNewMarine] = useState({
    //creating use state for newMarine, which is used in post new user
    name: "",
    rank: "",
    chapter: "",
    saint: false,
  });

  function handleName(nameValue) {
    console.log(nameValue);
    setNewMarine({
      ...newMarine,
      name: nameValue,
    });
    console.log(newMarine);
  }
  function handleSaint(isChecked) {
    setNewMarine({
      ...newMarine,
      saint: isChecked,
    });
  }

  function handleRank(rankValue) {
    setNewMarine({
      ...newMarine,
      rank: rankValue,
    });
  }

  function handleChapter(chapterValue) {
    setNewMarine({
      ...newMarine,
      chapter: chapterValue,
    });
  }

  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((resp) => setMarines(resp));
  }, []);

  function getMarine() {
    console.log("Getting Marines");
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((resp) => setMarines(resp));
  }
  function handleUpdatedName(updatedNameValue) {
    setUpdatedName(updatedNameValue);
  }

  const updateMarine = (marine) => {
    console.log("Updating marine");
    let updatedMarine = marine;
    updatedMarine.name = updatedName;
    fetch(`${API_URL}/${marine.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMarine),
    }).then(() => getMarine());
  };

  const postMarine = () => {
    console.log("Posting New Marine");
    fetch(API_URL, {
      //call the fetch function
      method: "POST", //method is posting
      headers: { "Content-Type": "application/json" }, //sending a json type object
      body: JSON.stringify(newMarine), //sends the stringified version of newUser as the body
    }).then(() => getMarine()); //calls getUser to update / re render the state and screen

    setNewMarine({ name: "", rank: "", chapter: "" });
  };

  const deleteMarine = (id) => {
    console.log("Deleting Marine");
    fetch(`${API_URL}/${id}`, {
      method: "Delete",
    }).then(() => getMarine());
  };

  const posts = [
    {
      id: 1,
      title: "My first post",
      date: "7/12/25",
      content:
        "As I stared through Abaddon’s eyes, I confess I expected the triteness of some knightly oath, or a final murmur in the Emperor’s name. Instead, the ruined thing that had been First Captain of the Imperial Fists and High Marshal of the Black Templars spoke through a mouthful of blood, committing the last of his life to biting off each word, ensuring he spoke each one in shivering, sanguine clarity. You will die as your weakling father died. Soulless. Honourless. Weeping. Ashamed. Sigismunds last word was also his last breath. It sighed out of his mouth, taking his soul with it.",
    },
    {
      id: 2,
      title: "Second post",
      date: "7/13/25",
      content: "All we have left between us is that we will die together! I AM RYLANOR OF THE EMPEROR'S CHILDREN, ANCIENT OF RITES, VENERABLE OF THE PALATINE HOST, AND PROUD SERVANT OF THE EMPEROR OF MANKIND, BELOVED BY ALL! I REJECT YOU NOW AND ALWAYS!",
    },
    {
      id: 3,
      title: "Third post",
      date: "7/11/25",
      content: "Courage and Honor, Courage and Honor, Courage and Honor. I hear you murmur these words in the mist. In their wake I hear your hearts beat faster with false conviction, seeking to convince yourselves that a brave death has meaning. There is no courage to be found here, my nephews; no honor to be had. Your souls will join the trillion others in the mist, shrieking uselessly into eternity, weeping for the empire you could not save. To the unfaithful I bring holy plagues ripe with enlightenment. To the devout I bring the blessing of immortality through the gifts of sacred rot. And to you... you born sons of Guilliman... to you flesh-crafted puppets of a failing Imperium, I bring the holiest gift of all... sssiiiiiiiiillence.",
    },
  ];

  return (
    <Container className="wholePage">
      <Router>
        <div>
          <ButtonGroup>
            <Button variant="outline-secondary">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/Marines">Marines</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/posts">Listings</Link>
            </Button>
          </ButtonGroup>

          <Switch>
            <Route path="/posts">
              <Posts posts={posts} />
            </Route>
            <Route path="/Marines">
              <Form
                newMarine={newMarine}
                handleName={handleName}
                handleRank={handleRank}
                handleChapter={handleChapter}
                handleSaint={handleSaint}
                postMarine={postMarine}
              ></Form>
              <Card>
                <Table
                  marines={marines}
                  deleteMarine={deleteMarine}
                  updateMarine={updateMarine}
                  handleUpdatedName={handleUpdatedName}
                />
              </Card>
            </Route>
            <Route path="/">
              <h4>Welcome to the Website and My Final!</h4>
              <MovieList/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}
function Post(props) {
  const { data } = props;
  return data === undefined ? (
    <h1>404 Not Found</h1>
  ) : (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Friends(props) {
  const { names } = props; //destructuring names from props

  return (
    <div>
      <ul>
        <li>
          {names.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

function Posts({ posts }) {
  const match = useRouteMatch(); //reference useRouteMatch as match
  const findPostById = (id) => posts.filter((post) => post.id == id)[0];

  return (
    <div>
      <h2>Posts</h2>

      {posts.map((post, index) => {
        return (
          <Alert key={index} variant="primary">
            <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
          </Alert>
        );
      })}

      <Switch>
        <Route
          path={`${match.path}/:postId`}
          render={(props) => (
            <Post {...props} data={findPostById(props.match.params.postId)} />
          )}
        />
        <Route path={match.path}>
          <h3>Please Select a Post</h3>
        </Route>
      </Switch>
    </div>
  );
}
