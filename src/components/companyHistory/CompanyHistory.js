import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

function CompanyHistory({ photo, day, about }) {
  const CompanyDiv = styled.div`
    color: black;
    text-align: center;
    padding: 40px 0px 40px 0px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    @media screen and (max-width: 768px) {
      padding: 20px 0px;
      span {
        font-size: 15px !important;
      }
    }
    span {
      font-size: 20px;
    }
  `;

  const Photo = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${photo});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-right: 5%;
    background-position: center;

    @media screen and (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  `;
  return (
    <CompanyDiv {...useScrollFadeIn("right", 0.7, 0.5)}>
      <Photo />
      <span style={{ marginRight: "20px" }}>{day}</span>
      <span style={{ opacity: 0.5 }}>{about}</span>
    </CompanyDiv>
  );
}

export default CompanyHistory;
