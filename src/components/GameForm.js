import React from "react";

class GameForm extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    duration: "",
    players: "",
  };

  handleChange = e => {
    //Changing to number if the type of input is number
    let value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Title</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Title..."
          />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
            placeholder="Description..."
          />
        </div>
        <div className="three fields">
          <div className="field">
            <label>Price(in cents)</label>
            <input
              onChange={this.handleChange}
              type="number"
              name="price"
              value={this.state.price}
              placeholder="Price..."
            />
          </div>
          <div className="field">
            <label>Duration(in mins)</label>
            <input
              onChange={this.handleChange}
              type="number"
              name="duration"
              value={this.state.duration}
              placeholder="Duration..."
            />
          </div>
          <div className="field">
            <label>Players</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="players"
              value={this.state.players}
              placeholder="Players..."
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default GameForm;
