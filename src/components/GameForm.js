import React from "react";
import ReactImageFallback from 'react-image-fallback';

class GameForm extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    duration: "",
    players: "",
    featured: false,
    thumbnail: ""
  };

  handleChange = e => {
    console.log(e.target)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };

  handleCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
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
          </div>

          <div className="four wide column">
          <ReactImageFallback 
            id="thumbnail"
            src={this.state.thumbnail}
            fallbackImage="http://via.placeholder.com/250x250"
            alt="Thumbnail"
            className="ui image"
          />
          </div>
        </div>

        <div className="field">
        <label htmlFor="thumbnail">Image URL</label>
          <input
          name="thumbnail"
          type="text"
          onChange={this.handleChange} />
        </div>

        <div className="three fields">
          <div className="field">
            <label>Price(in cents)</label>
            <input
              onChange={this.handleNumberChange}
              type="number"
              name="price"
              value={this.state.price}
              placeholder="Price..."
            />
          </div>

          <div className="field">
            <label>Duration(in mins)</label>
            <input
              onChange={this.handleNumberChange}
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

        <div className="inline field">
          <label>Featured?</label>
          <input
            onChange={this.handleCheckboxChange}
            checked={this.state.featured}
            type="checkbox"
            name="featured"
          />
        </div>

        <div className="field">
          <label htmlFor="publisher">Publishers</label>
          <select
            name="publisher"
            value={this.state.publisher}
            onChange={this.handleNumberChange}
            className="ui simple fluid dropdown"
          >
            {this.props.publishers.map(publisher => (
              <option value={publisher._id} key={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
        </div>
          
        <div className="ui large buttons">
        <button className="ui button primary" type="submit">
          Submit
        </button>
        <div className="or" />
        <button onClick={this.props.handleCloseForm} className="ui button" type="submit">
          Cancel
        </button>
        </div>
      </form>
    );
  }
}

export default GameForm;
