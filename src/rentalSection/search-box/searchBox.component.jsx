import { Component } from "react";

import "./searchBox.style.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search By Location"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
