import React from "react";
import { render } from "react-dom";
import _ from "lodash";
import "semantic-ui-css/semantic.min.css";
import GameList from "./components/GameList";

const games = [
  {
    id: 0,
    label: 3299,
    featured: false,
    img:
      "https://content.halocdn.com/media/Default/games/halo-3/Page/game_overview_thumbnail_halo3-825be4767fb34192af8d5529e444a97e.jpg",
    name: "Halo",
    players: "2-4",
    duration: "60mins"
  },
  {
    id: 1,
    label: 3097,
    featured: true,
    img:
      "http://oyster.ignimgs.com/mediawiki/apis.ign.com/wasteland-3/6/64/Wasteland-3-button-1jpg-fe166a.jpg",
    name: "Wasteland 3",
    players: "2-4",
    duration: "120mins"
  },
  {
    id: 2,
    label: 1797,
    featured: false,
    img:
      "https://images.genius.com/b71b140f8e2d9c0056679ef212aae931.545x545x1.jpg",
    name: "Assasin's Creed",
    players: "1",
    duration: "30mins"
  }
];

class App extends React.Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
  }

  sortGames = games => {
    return _.orderBy(games, ["featured", "name"], ["desc", "asc"]);
  };

  handleFeaturedClick = id => () => {
    return this.setState({
      games: this.sortGames(
        this.state.games.map(game => {
          return game.id === id ? { ...game, featured: !game.featured } : game;
        })
      )
    });
  };

  render() {
    return (
      <div>
        <GameList
          handleFeaturedClick={this.handleFeaturedClick}
          games={this.state.games}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
