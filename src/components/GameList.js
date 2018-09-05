import React from "react";
import GameCard from "./GameCard";
const GameList = ({ games, handleFeaturedClick, editGame, deleteGame }) => {
  return (
    <div className="ui four cards" style={{ margin: "10px" }}>
      {games.length === 0 ? (
        <h2>No game yet</h2>
      ) : (
        games.map(game => (
            <GameCard
              key={game._id}
              game={game}
              handleFeaturedClick={handleFeaturedClick}
              editGame={editGame}
              deleteGame={deleteGame}
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
