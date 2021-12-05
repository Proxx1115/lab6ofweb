import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={css.Navbar}>
      <div className={css.Left}>
        <i class={`fab fa-facebook ${css.Wi}`}></i>
        <div className={css.SearchCont}>
          <i class="fas fa-search"></i>
          <input className={css.LeftInput} placeholder="Search Facebook" />
        </div>
      </div>
      <div className={css.Middle}>
        <ul>
          <li>
            <Link to="/">
              <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiM0MjY3YjIiPjxwYXRoIGQ9Ik04NiwxNC4zMzMzM2MtMS45MTQzNSwwLjAwMDI1IC0zLjc0OTAzLDAuNzY2MzggLTUuMDk1MDYsMi4xMjc2bC03Mi4yODI1NSw2My4wNzIyNmMtMC45MTU1LDAuNjc1NTQgLTEuNDU1NzcsMS43NDU3MSAtMS40NTU3MywyLjg4MzQ3YzAsMS45NzkwMiAxLjYwNDMxLDMuNTgzMzMgMy41ODMzMywzLjU4MzMzaDE3LjkxNjY3djU3LjMzMzMzYzAsMy45NTYgMy4yMTA2Nyw3LjE2NjY3IDcuMTY2NjcsNy4xNjY2N2gyOC42NjY2N2MzLjk1NiwwIDcuMTY2NjcsLTMuMjEwNjcgNy4xNjY2NywtNy4xNjY2N3YtNDNoMjguNjY2Njd2NDNjMCwzLjk1NiAzLjIxMDY3LDcuMTY2NjcgNy4xNjY2Nyw3LjE2NjY3aDI4LjY2NjY3YzMuOTU2LDAgNy4xNjY2NywtMy4yMTA2NyA3LjE2NjY3LC03LjE2NjY3di01Ny4zMzMzM2gxNy45MTY2N2MxLjk3OTAyLDAgMy41ODMzMywtMS42MDQzMSAzLjU4MzMzLC0zLjU4MzMzYzAuMDAwMDQsLTEuMTM3NzYgLTAuNTQwMjMsLTIuMjA3OTIgLTEuNDU1NzMsLTIuODgzNDdsLTcyLjI0MDU2LC02My4wMzAyN2MtMC4wMTM5NCwtMC4wMTQwNiAtMC4wMjc5NCwtMC4wMjgwNSAtMC4wNDE5OSwtMC4wNDE5OWMtMS4zNDYwMywtMS4zNjEyMyAtMy4xODA3MSwtMi4xMjczNiAtNS4wOTUwNiwtMi4xMjc2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" />
            </Link>
          </li>
          <li>
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-contacts-twitter-flatart-icons-outline-flatarticons.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-flag-sport-dreamstale-lineal-dreamstale-2.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/ios/50/000000/facebook-gaming.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/ios/50/000000/tv-show.png" />
          </li>
        </ul>
      </div>
      <div className={css.Right}>
        <div className={css.RightImg}>
          <img src="https://www.yolo.mn/img/images/ck/2021/11/21/257771047_1934955583346966_7168793044937408802_n-225336-2139963443.jpeg" />
          <p>Б.</p>
        </div>
        <ul>
          <li>
            <img src="https://img.icons8.com/material-sharp/24/000000/circled-menu.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/material-rounded/24/000000/facebook-messenger--v1.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/material-sharp/24/000000/bell.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
