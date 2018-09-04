import React from "react";
import CardLabel from "./CardLabel";
import Featured from "./Featured";
import Overdrive from "react-overdrive";

const GameCard = ({ game, handleFeaturedClick }) => {
  return (
    <Overdrive id={String(game.id)}>
      <div className="ui card" id="card">
        <div className="image">
          <CardLabel label={game.price} />
          <Featured
            id={game.id}
            handleFeaturedClick={handleFeaturedClick}
            featured={game.featured}
          />
          <img src={game.thumbnail} alt="Halo" />
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
