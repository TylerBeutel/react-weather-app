import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    console.log(`submitted: ${this.state.input}`);
    event.preventDefault();
  }

  render() {
    return (
      <form className="input-group mb3" onSubmit={ this.handleSubmit }>
        <input
          type="text"
          placeholder="Get a 5 day forcast in your state (USA)"
          value={ this.state.input }
          onInput={ this.handleInput }
        />
        <div className="input-group-button">
          <input type="submit"/>
        </div>
      </form>
    );
  }

}
