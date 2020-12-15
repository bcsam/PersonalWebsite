import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    background-color: #1f1f1f;
    box-shadow: 0 1px whitesmoke;
    color: #ffffff;
    height: 150px;
  }
`;

export const Footer = () => (
  <Styles>
    <div className="footer">
      <div className="container" style={{top: "40%", position: "relative"}}>
        <div className="row justify-content-center" >             
            <div className="col-auto">
            <h5 style={{fontWeight: "0"}}>&#169; Brent Samuels 2021</h5>
          </div>
        </div>
      </div>
    </div>
  </Styles>
);
