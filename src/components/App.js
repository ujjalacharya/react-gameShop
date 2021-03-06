import React from "react";
import _ from "lodash";
import "semantic-ui-css/semantic.min.css";
import GameList from "./GameList";
import GameForm from "./GameForm";
import "../index.css";
import Navbar from "./Navbar";

const publishers = [
  { _id: 1, name: "EA Sports" },
  { _id: 2, name: "Ubisoft" },
  { _id: 3, name: "RockStar Games" }
];

const games = [
  {
    _id: 1,
    price: 3299,
    featured: false,
    publisher: 1,
    thumbnail:
      "https://content.halocdn.com/media/Default/games/halo-3/Page/game_overview_thumbnail_halo3-825be4767fb34192af8d5529e444a97e.jpg",
    name: "Halo",
    players: "2-4",
    duration: "60mins"
  },
  {
    _id: 2,
    price: 3097,
    featured: true,
    publisher: 2,
    thumbnail:
      "http://oyster.ignimgs.com/mediawiki/apis.ign.com/wasteland-3/6/64/Wasteland-3-button-1jpg-fe166a.jpg",
    name: "Wasteland 3",
    players: "2-4",
    duration: "120mins"
  },
  {
    _id: 3,
    price: 1797,
    featured: false,
    publisher: 1,
    thumbnail:
      "https://images.genius.com/b71b140f8e2d9c0056679ef212aae931.545x545x1.jpg",
    name: "Assasin's Creed",
    players: "1",
    duration: "30mins"
  },
  {
    _id: 4,
    price: 2016,
    featured: false,
    publisher: 2,
    thumbnail:
      "https://cdn.tutsplus.com/gamedev/authors/david-arcila/nintendohard_contra.jpg",
    name: "Contra",
    players: "2",
    duration: "25mins"
  }
];

class App extends React.Component {
  state = {
    games: [],
    isFormActive: false,
    gameToEdit: {}
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
          return game._id === id ? { ...game, featured: !game.featured } : game;
        })
      )
    });
  };

  handleOpenForm = () => {
    this.setState({ isFormActive: true, gameToEdit: {}});
  };

  handleCloseForm = () => {
    this.setState({ isFormActive: false , gameToEdit: {}});
  };

  editGame = game => () =>{
    this.setState({isFormActive: true, gameToEdit: game})
  }

  saveGame = game =>{
    game._id ? this.updateGame(game) : this.createNewGame(game)
  } 

  updateGame = data =>{
    this.setState({
      games: this.sortGames(this.state.games.map(game=> (game._id === data._id ? data : game))),
      isFormActive: false
    })
  }

  deleteGame = data =>() =>{
    this.setState({
      games: this.state.games.filter(game=> game._id !== data._id)
    })
  }

  createNewGame = data => {
    this.setState({
      games: this.sortGames([
        ...this.state.games,
        {
          ...data,
          _id: this.state.games.length + 1
        }
      ]),
      isFormActive: false
    });
  };

  render() {
    let gameCardSize = this.state.isFormActive ? "ten" : "twelve";
    return (
      <div id="index">
        <Navbar handleOpenForm={this.handleOpenForm} />
        <div className="ui grid">
          {this.state.isFormActive && (
            <div className="six wide column">
              <GameForm
                publishers={publishers}
                handleCloseForm={this.handleCloseForm}
                saveGame={this.saveGame}
                gameToEdit={this.state.gameToEdit}
              />
            </div>
          )}
          <div className={`${gameCardSize} wide column`}>
            <GameList
              handleFeaturedClick={this.handleFeaturedClick}
              games={this.state.games}
              editGame={this.editGame}
              deleteGame={this.deleteGame}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
