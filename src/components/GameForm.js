import React from "react";
import ReactImageFallback from "react-image-fallback";
import FormInlineErrorMessage from "./FormInlineErrorMessage";

const initialData ={
    name: "",
    description: "",
    price: "",
    duration: "",
    players: "",
    featured: false,
    thumbnail: "",
    publisher: 0
}

class GameForm extends React.Component {
  state = {
    data: initialData,
    errors: {}
  };

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleNumberChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: parseInt(e.target.value) }
    });
  };

  handleCheckboxChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked }
    });
  };

  handleSubmit = e => {
    e.preventDefault(); 
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.saveGame(this.state.data)
    }

  };

  componentDidMount(){
    this.setState({data: this.props.gameToEdit})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.gameToEdit._id && nextProps.gameToEdit._id !== this.state.data._id){
      this.setState({data: nextProps.gameToEdit})
  }
  if(nextProps.gameToEdit._id === undefined){
    this.setState({data: initialData})
  }
}

  validate = data => {
    const errors = {};
    if (!data.name) errors.name = "This field can't be blank";
    if (!data.players) errors.players = "This field can't be blank";
    if (!data.thumbnail) errors.thumbnail = "This field can't be blank";
    if (data.price <= 0) errors.price = "Price too low";
    if (data.duration <= 0) errors.duration = "Duration too short";
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className={errors.name ? "error field" : "field"}>
              <label>Title</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={data.name}
                placeholder="Title..."
              />
              {errors.name && <FormInlineErrorMessage error={errors.name} />}
            </div>

            <div className="field">
              <label>Description</label>
              <textarea
                onChange={this.handleChange}
                type="text"
                name="description"
                value={data.description}
                placeholder="Description..."
              />
            </div>
          </div>

          <div className="four wide column">
            <ReactImageFallback
              id="thumbnail"
              src={data.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>

        <div className={errors.thumbnail ? "error field" : "field"}>
          <label htmlFor="thumbnail">Image URL</label>
          <input
          name="thumbnail"
          type="text"
          value={data.thumbnail}
          onChange={this.handleChange} />
          {errors.thumbnail && (
            <FormInlineErrorMessage error={errors.thumbnail} />
          )}
        </div>

        <div className="three fields">
          <div className={errors.price ? "error field" : "field"}>
            <label>Price(in cents)</label>
            <input
              onChange={this.handleNumberChange}
              type="number"
              name="price"
              value={data.price}
              placeholder="Price..."
            />
            {errors.price && <FormInlineErrorMessage error={errors.price} />}
          </div>

          <div className={errors.duration ? "error field" : "field"}>
            <label>Duration(in mins)</label>
            <input
              onChange={this.handleNumberChange}
              type="number"
              name="duration"
              value={data.duration}
              placeholder="Duration..."
            />
            {errors.duration && (
              <FormInlineErrorMessage error={errors.duration} />
            )}
          </div>

          <div className={errors.players ? "error field" : "field"}>
            <label>Players</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="players"
              value={data.players}
              placeholder="Players..."
            />
            {errors.players && <FormInlineErrorMessage error={errors.players} />}
          </div>
        </div>

        <div className="inline field">
          <label>Featured?</label>
          <input
            onChange={this.handleCheckboxChange}
            checked={data.featured}
            type="checkbox"
            name="featured"
          />
        </div>

        <div className="field">
          <label htmlFor="publisher">Publishers</label>
          <select
            name="publisher"
            value={data.publisher}
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
          <button
            onClick={this.props.handleCloseForm}
            className="ui button"
            type="submit"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default GameForm;
