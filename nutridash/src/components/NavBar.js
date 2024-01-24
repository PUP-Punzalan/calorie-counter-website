import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div class="navbar__title">
        <h5>Nutridash</h5>
      </div>
      <ul className="navbar__buttons">
        <li className="navbar__button active">
          <span class="material-symbols-rounded">home</span>
          <p>Home</p>
        </li>
        <li className="navbar__button">
          <span class="material-symbols-rounded">nutrition</span>
          <p>Add food</p>
        </li>
        <li className="navbar__button">
          <span class="material-symbols-rounded">stockpot</span>
          <p>Create meal</p>
        </li>
        <li className="navbar__button">
          <span class="material-symbols-rounded">person</span>
          <p>Profile</p>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
