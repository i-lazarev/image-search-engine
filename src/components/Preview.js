import React, { Component } from "react";

class Preview extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img
            style={{ width: "100vw" }}
            src={this.props.photoUrl}
            alt="this.props.tags"
          />
        </div>
      </div>
    );
  }
}

export default Preview;
