import React, { Component } from "react";
import { Media } from 'reactstrap';

function ResearchPageEntry(props) {
  return(
    <Media>
      {/* <Media tag="li"> */}
        {/* <Media left middle>
          <Media object src={props.image} alt={props.project} />
        </Media> */}
        <Media body>
          <h5>
            <b>{props.project}</b>
          </h5>

          <i>{props.date}</i>
          <ul>
            {props.description.map((point, ind) => (
              <li key={ind}>{point}</li>
            ))}
          </ul>
        </Media>
      {/* </Media> */}
    </Media>
  );
}

export default ResearchPageEntry;