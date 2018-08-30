import React from "react";
import GameCard from "./GameCard";
const GameList = ({ games, handleFeaturedClick }) => {
  return (
    <div className="ui four cards" style={{ margin: "10px" }}>
      {games.length === 0 ? (
        <h2>No game yet</h2>
      ) : (
        games.map(game => (
            <GameCard
              key={game.id}
              game={game}
              handleFeaturedClick={handleFeaturedClick}
            />
        ))
      )}
    </div>
  );
};

GameList.defaultProps = {
  games: []
};

export default GameList;
