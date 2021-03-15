import React, { Component } from "react";

import getImages from "../api/index";

class SearchBar extends Component {
  state = {
    inputValue: "",
  };
  searchBtnClick = () => {
    console.log(this.state.inputValue);
    getImages(this.state.inputValue).then((data) => {
      this.props.save(data.hits);
    });
  };

  render() {
    //console.log(this.state.inputValue);
    return (
      <div className="row">
        <div className="input-group mb-3 mt-3 ">
          <div className="input-group-prepend">
            <button
              onClick={this.searchBtnClick}
              className="btn btn-outline-secondary"
              type="button"
            >
              Search
            </button>
          </div>
          <input
            value={this.state.inputValue}
            onChange={(e) => {
              this.setState({ inputValue: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="Search Word"
            aria-label=""
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
