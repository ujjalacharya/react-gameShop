import React from "react";

const Navbar = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <a className="item"><strong>Game Shop</strong></a>
      <a className="item" onClick={props.handleOpenForm}>
        <i className="plus square outline icon" /> Add New Game
      </a>
    </div>
  );
};

export default Navbar;
