import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Newsfeed from "../NewsFeed";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import css from "./style.module.css";
import Profile from "../Profile";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: { "app-id": "61911adc3864ca518755e018" },
      })
      .then((response) => {
        this.setState({ data: response.data.data });
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <div className={css.App}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/profile/:id"
              element={<Profile prop={this.state.data} />}
            />
            <Route path="/" element={<Newsfeed prop={this.state.data} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
