import React from "react";
import css from "./style.module.css";
import Post from "../Post";

class Newsfeed extends React.Component {
  render() {
    return (
      <div className={css.Newsfeed}>
        {this.props.prop.map((el) => (
          <Post prop={el} />
        ))}
      </div>
    );
  }
}
export default Newsfeed;
