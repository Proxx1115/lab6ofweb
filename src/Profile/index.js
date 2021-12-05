import React from "react";
import UserPosts from "../UserPosts";
import css from "./style.module.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let id = window.location.pathname;
    id = id.slice(1, id.length);
    for (let i of id) {
      if (i !== "/") {
        id = id.slice(1, id.length);
      } else break;
    }
    id = id.slice(1, id.length);
    let selectedUser = this.props.prop.filter((el) => {
      if (el.id === id) return el;
    });
    return (
      <div className={css.Container}>
        <div className={css.Profile}>
          <div className={css.CoverImg}>
            <img src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/260182583_636521920836099_7987660319940845944_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=hLcCtaKPiBIAX-A1GKe&_nc_ht=scontent.fuln6-1.fna&oh=b0d2d644cda49c8a7932a193defc9a72&oe=61B04E8D" />
          </div>
          <div className={css.ProfImg}>
            <img src={selectedUser[0].owner.picture} />
          </div>
          <div className={css.ProfName}>
            {selectedUser[0].owner.firstName +
              " " +
              selectedUser[0].owner.lastName}
          </div>
          <div className={css.ProfIcon}>
            <i class="fas fa-camera"></i>
          </div>
          <div className={css.bio}>
            <p>gimme five</p>
          </div>
          <div className={css.fuk}>
            <i className="fas fa-camera"></i>
            <p> Edit Cover Photo</p>
          </div>
        </div>
        <UserPosts id={selectedUser[0].owner.id} />
      </div>
    );
  }
}
export default Profile;
