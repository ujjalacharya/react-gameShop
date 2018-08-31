import React from "react";

const tags = [
  { _id: 1, name: "dice" },
  { _id: 2, name: "economic" },
  { _id: 3, name: "family" }
];
const genre = [
  { _id: 1, name: "arcade" },
  { _id: 2, name: "multiplayer" },
  { _id: 3, name: "abstract" }
];

class GameForm extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    duration: "",
    players: "",
    featured: false,
    tags: [],
    genre: 1
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNumberChange = e =>{
    this.setState({[e.target.name]: parseInt(e.target.value)})
  }

  handleCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  toggleTag = tag => () => {
    this.state.tags.includes(tag._id)
      ? this.setState({ tags: this.state.tags.filter(id => id !== tag._id) })
      : this.setState({ tags: [...this.state.tags, tag._id] });
  };

  handleRadio = genre => () => {
    this.setState({ genre: genre._id });
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
          <label htmlFor="tags">Tags</label>
          {tags.map(tag => (
            <div key={tag._id} className="inline field">
              <input
                id={`tag=${tag._id}`}
                onChange={this.toggleTag(tag)}
                checked={this.state.tags.includes(tag._id)}
                type="checkbox"
              />
              <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
            </div>
          ))}
        </div>

        <div className="field">
          <label htmlFor="tags">Genre</label>
          {genre.map(gen => (
            <div key={gen._id} className="inline field">
                <input
                  id={`gen-${gen._id}`}
                  type="radio"
                  checked={this.state.genre === gen._id}
                  onChange={this.handleRadio(gen)}
                />
              <label htmlFor={`gen-${gen._id}`}>{gen.name}</label>
            </div>
          ))}
        </div>

        <div className="field">
          <label htmlFor="publisher">Publishers</label>
          <select
            name= "publisher"
            value={this.state.publisher}
            onChange={this.handleNumberChange}
          >
          {this.props.publishers.map(publisher =>(
            <option value ={publisher._id} key={publisher._id}>{publisher.name}</option>
          ))}
          </select>
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default GameForm;
