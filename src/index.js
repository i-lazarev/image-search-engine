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
    this.setState({ photos: results, choosenImageIndex: null });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "grey" }}>
          Image search engine
        </h1>
        <div className="container">
          <SearchBar save={this.savePhotos} />
          {this.state.photos.length && this.state.choosenImageIndex !== null ? (
            <Preview
              photoUrl={
                this.state.photos[this.state.choosenImageIndex].largeImageURL
              }
            />
          ) : null}
          <Gallery preview={this.previewImage} photos={this.state.photos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
