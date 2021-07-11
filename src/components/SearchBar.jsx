/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

    onInputChange = (event) => {
      this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onFormSubmit(this.state.term);
    }

    render() {
      return (
        <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Crypto Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      );
    }
}

export default SearchBar;
