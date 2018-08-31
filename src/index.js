import React from "react";
import { render } from "react-dom";
import _ from "lodash";
import "semantic-ui-css/semantic.min.css";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import "./index.css";
import Navbar from "./components/Navbar";

const publishers = [
  { _id: 1, name: "EA Sports" },
  { _id: 2, name: "Ubisoft" },
  { _id: 3, name: "RockStar Games" }
];

const games = [
  {
    id: 0,
    label: 3299,
    featured: false,
    publisher: 1,
    img:
      "https://content.halocdn.com/media/Default/games/halo-3/Page/game_overview_thumbnail_halo3-825be4767fb34192af8d5529e444a97e.jpg",
    title: "Halo",
    players: "2-4",
    duration: "60mins"
  },
  {
    id: 1,
    label: 3097,
    featured: true,
    publisher: 2,
    img:
      "http://oyster.ignimgs.com/mediawiki/apis.ign.com/wasteland-3/6/64/Wasteland-3-button-1jpg-fe166a.jpg",
    title: "Wasteland 3",
    players: "2-4",
    duration: "120mins"
  },
  {
    id: 2,
    label: 1797,
    featured: false,
    publisher: 1,
    img:
      "https://images.genius.com/b71b140f8e2d9c0056679ef212aae931.545x545x1.jpg",
    title: "Assasin's Creed",
    players: "1",
    duration: "30mins"
  }
];

class App extends React.Component {
  state = {
    games: [],
    isFormActive: false
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
  }

  sortGames = games => {
    return _.orderBy(games, ["featured", "title"], ["desc", "asc"]);
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

  handleOpenForm = () =>{
    this.setState({isFormActive: true})
  }

  handleCloseForm = () =>{
    this.setState({isFormActive: false})
  }

  render() {
    let gameCardSize = this.state.isFormActive ? 'ten' : 'twelve';
    return (
      <div id="index">
        <Navbar handleOpenForm={this.handleOpenForm}/>
        <div class="ui grid">
          {this.state.isFormActive && <div class="six wide column">
            <GameForm publishers={publishers} handleCloseForm={this.handleCloseForm}/>
          </div>}
          <div class = {`${gameCardSize} wide column`}>
            <GameList
              handleFeaturedClick={this.handleFeaturedClick}
              games={this.state.games}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
