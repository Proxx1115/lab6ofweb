import React from "react";
import css from "./style.module.css";
import axios from "axios";
import Post from "../Post/index";
class UserPosts extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(`https://dummyapi.io/data/v1/user/${this.props.id}/post?limit=10`, {
        headers: { "app-id": "61911adc3864ca518755e018" },
      })
      .then((response) => {
        this.setState({ data: response.data.data });
      })
      .catch((error) => console.log("aldaa " + error));
  }
  render() {
    console.log(this.state.data);
    return (
      <div className={css.UserPosts}>
        {this.state.data.map((el) => {
          return <Post prop={el} />;
        })}
      </div>
    );
  }
}
export default UserPosts;
