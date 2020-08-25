import React, { Component } from "react";

export default class WorkPageEntry extends Component {
  render() {
    var dateLocation = this.props.date + " • " + this.props.location;

    return (
      <div style={{ marginTop: "2vw" }}>
        <h5>
          <b>{this.props.company}</b>
        </h5>
        {this.props.position}
        <br></br>
        <i>{dateLocation}</i>
        <ul>
          {this.props.description.map((point, ind) => (
            <li key={ind}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }
}
