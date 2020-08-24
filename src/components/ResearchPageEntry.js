import React, { Component } from "react";

export default class ResearchPageEntry extends Component {
  render() {
    return (
      <div style={{ marginTop: "2vw" }}>
        <h5>
          <b>{this.props.project}</b>
        </h5>
        <p>
          <i>{this.props.date}</i>
          <ul>
            {this.props.description.map((point, ind) => (
              <li key={ind}>{point}</li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}
