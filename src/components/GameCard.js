import React from "react";
import CardLabel from "./CardLabel";

const GameCard = ({game}) => {
  return(
  <div className="ui card">
    <div className="image">
      <CardLabel label={game.label}/>
      <img src={game.img} alt="Halo"/>
    </div>
    <div className="content">
      <a href="/" className="header">{game.name}</a>
      <div className="meta">
      <i className="icon users" />{game.players}&nbsp;
      <i className="icon wait" /> {game.duration}
      </div>
    </div>
  </div>
  )
}

export default GameCard;
