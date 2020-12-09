import React, { Component } from "react";
import { Media } from 'reactstrap';

// export default class ResearchPageEntry extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: "2vw" }}>
//         <h5>
//           <b>{this.props.project}</b>
//         </h5>

//         <i>{this.props.date}</i>
//         <ul>
//           {this.props.description.map((point, ind) => (
//             <li key={ind}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function ResearchPageEntry(props) {
  return(
    <Media list>
      <Media tag="li">
        <Media left middle>
          <Media object src={"/mit.png"} alt={props.project} />
        </Media>
        <Media body className="ml-5">
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
      </Media>
    </Media>
  );
}

export default ResearchPageEntry;