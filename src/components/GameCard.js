import React from "react";
import CardLabel from "./CardLabel";
import Featured from "./Featured";
import Overdrive from "react-overdrive";

class GameCard extends React.Component {
  state = {
    promptDelete: false
  };

  render() {
    const { game, handleFeaturedClick, editGame, deleteGame } = this.props;
    return (
      <Overdrive id={String(game._id)}>
        <div className="ui card" id="card">
          <div className="image">
            <CardLabel label={game.price} />
            <Featured
              id={game._id}
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
          <div className="extracontent">
            {this.state.promptDelete ? (
              <div className="ui two buttons">
                <button
                className="ui secondary button"
                onClick={deleteGame(game)}
                >Yes</button>
                <button
                  className="ui button"
                  onClick={() => this.setState({ promptDelete: false })}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="ui two buttons">
                <button
                  className="ui inverted green button"
                  onClick={editGame(game)}
                >
                  Edit
                </button>
                <button
                  className="ui inverted red button"
                  onClick={() => this.setState({ promptDelete: true })}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </Overdrive>
    );
  }
}

export default GameCard;
