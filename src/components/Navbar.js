import React from "react";

const Navbar = (props) => {
  return (
    <div class="ui secondary pointing menu">
      <a class="item"><strong>Game Shop</strong></a>
      <a class="item" onClick={props.handleOpenForm}>
        <i class="plus square outline icon" /> Add New Game
      </a>
    </div>
  );
};

export default Navbar;
