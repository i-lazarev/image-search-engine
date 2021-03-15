import React, { Component } from "react";

class Preview extends Component {
  componentWillUnmount = () => {
    console.log("deleted from dom");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <img
            style={{ width: "80vw" }}
            src={this.props.photoUrl}
            alt="this.props.tags"
          />
        </div>
      </div>
    );
  }
}

export default Preview;
