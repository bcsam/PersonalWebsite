import React, { Component } from "react";

export default class WorkPageEntry extends Component {
  render() {
    var positionDate = this.props.position + " • " + this.props.date;

    return (
      <div style={{ marginTop: "2vw" }}>
        <h5>
          <b>{this.props.company}</b>
        </h5>
        {positionDate}
        <br></br>
        <i>{this.props.location}</i>
        <ul>
          {this.props.description.map((point, ind) => (
            <li key={ind}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }
}
