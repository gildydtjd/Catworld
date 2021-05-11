import React from "react";
import styled from "styled-components";
function Company(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => (props.dis ? props.dis : "flex")};
    align-items: center;
    justify-content: center;
    background-position: center;
    .company__about {
      background-color: green;
      width: 50%;
      height: 50%;
    }
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat13.jpg">
        <div className="company__about"></div>
      </SectionBox>
    </>
  );
}

export default Company;
