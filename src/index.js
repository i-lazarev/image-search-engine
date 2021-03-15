import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery";
import Preview from "./components/Preview";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    photos: [],
  };

  savePhotos = (results) => {
    this.setState({ photos: results });
  };
  render() {
    console.log(this.state.photos);
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "grey" }}>
          Image search engine
        </h1>
        <div className="container">
          <SearchBar save={this.savePhotos} />
          <Preview />
          <Gallery photos={this.state.photos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
