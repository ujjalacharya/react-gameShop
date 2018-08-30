import React from "react";
import CardLabel from "./CardLabel";
import Featured from "./Featured";
import Overdrive from "react-overdrive";

const GameCard = ({ game, handleFeaturedClick }) => {
  return (
    <Overdrive id={game.id}>
      <div className="ui card" style={{margin: '10px'}}>
        <div className="image">
          <CardLabel label={game.label} />
          <Featured
            id={game.id}
            handleFeaturedClick={handleFeaturedClick}
            featured={game.featured}
          />
          <img src={game.img} alt="Halo" />
        </div>
        <div className="content">
          <a href="/" className="header">
            {game.name}
          </a>
          <div className="meta">
            <i className="icon users" />
            {game.players}
            &nbsp;
            <i className="icon wait" /> {game.duration}
          </div>
        </div>
      </div>
    </Overdrive>
  );
};

export default GameCard;
