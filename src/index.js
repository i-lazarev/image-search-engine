import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery";
import Preview from "./components/Preview";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    photos: [],
    choosenImageIndex: null,
  };

  previewImage = (idx) => {
    this.setState({ choosenImageIndex: idx });
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
          <Gallery preview={this.previewImage} photos={this.state.photos} />
          <Preview />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
