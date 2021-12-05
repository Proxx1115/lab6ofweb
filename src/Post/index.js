import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
const Post = (props) => {
  return (
    <div className={css.Post}>
      <div className={css.Top}>
        <Link to={"/profile/" + props.prop.id}>
          <div className={css.Img}>
            <img src={props.prop.owner.picture} />
          </div>
        </Link>
        <div className={css.Text}>
          <div className={css.leftTxt}>
            <div className={css.RealTxt}>
              <h3
                className={css.Name}
              >{`${props.prop.owner.lastName} ${props.prop.owner.firstName}`}</h3>
              <p className={css.Date}>{props.prop.publishDate}</p>
            </div>
            <div className={css.IconPlanet}>
              <i class="fas fa-globe-americas"></i>
            </div>
          </div>
          <div className={css.rightTxt}>...</div>
        </div>
      </div>
      <div className={css.Middle}>
        <p>{props.prop.text}</p>
      </div>
      <div className={css.Bottom}>
        <img src={props.prop.image} />
      </div>
      <div className={css.realBottom}>
        <div className={css.icon}>
          <div className={css.realIcon}>
            <i class="fas fa-thumbs-up"></i>
          </div>
          <p>{props.prop.likes}</p>
        </div>
        <div>
          <p className={css.com}>456 comments</p>
          <p className={css.share}>25 shares</p>
        </div>
      </div>
    </div>
  );
};
export default Post;
