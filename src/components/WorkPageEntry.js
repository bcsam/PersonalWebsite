import React from "react";
import { Media } from 'reactstrap';

function WorkPageEntry(props) {
  var dateLocation = props.date + " • " + props.location;
  return(
    <Media style={{marginBottom: "1vw"}}>
      <Media tag="li">
        <Media left middle>
          <Media object src={props.image} alt={props.project} style={{height: "10vh", width: "10vh", boxShadow: "1px 1px 4px gray", borderRadius: "10%"}} />
        </Media>
        <Media body className="ml-4">
          <h5>
            <b>{props.company}</b>
          </h5>

          <i>{dateLocation}</i>
          <ul>
            {props.description.map((point, ind) => (
              <li key={ind}>{point}</li>
            ))}
          </ul>
        </Media>
      </Media>
    </Media>
  );
}

export default WorkPageEntry;
