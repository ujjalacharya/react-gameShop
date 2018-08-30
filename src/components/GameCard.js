import React from "react";

const GameCard = () => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">$32.99</span>
      <img src="https://content.halocdn.com/media/Default/games/halo-3/Page/game_overview_thumbnail_halo3-825be4767fb34192af8d5529e444a97e.jpg" alt="Halo"/>
    </div>
    <div className="content">
      <a href="#" className="header">Halo</a>
      <div className="meta">
      <i className="icon users" /> 2-4&nbsp;
      <i className="icon wait" /> 60min
      </div>
    </div>
  </div>
)

export default GameCard;
