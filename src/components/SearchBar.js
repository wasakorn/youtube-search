import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = event => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onFormSubmit(this.state.term);
  };
  onTextChange = event => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              placeholder="Search..."
              type="text"
              value={this.state.term}
              onChange={this.onTextChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
