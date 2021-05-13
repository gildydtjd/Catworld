import React from "react";
import styled from "styled-components";
import CompanyHistory from "./CompanyHistory";

function CompanyHistoryBox(props) {
  const CompanyHistoryBoxDiv = styled.div`
    width: 100%;
    h2 {
      text-align: center;
      padding: 20px;
      font-size: 50px;
      opacity: 0.8;
    }

    @media screen and (max-width: 768px) {
      h2 {
        font-size: 30px !important;
      }
    }
  `;
  const history = [
    {
      photo: "/assets/img/history/history1.jpg",
      day: "1993.07,31",
      about: "Washing the cat",
    },
    {
      photo: "/assets/img/history/history2.jpg",

      day: "1995.08.20",
      about: "Give a cat snack",
    },
    {
      photo: "/assets/img/history/history3.jpg",

      day: "2000.09.27",
      about: "Play with a cat",
    },
    {
      photo: "/assets/img/history/history4.jpg",

      day: "2005.04.24",
      about: "Scolding cats",
    },
    {
      photo: "/assets/img/history/history5.jpg",

      day: "2010.12.23",
      about: "Cat bath",
    },
    {
      photo: "/assets/img/history/history6.jpg",

      day: "2015.11.20",
      about: "Buy Cat Tower",
    },
    {
      photo: "/assets/img/history/history7.jpg",

      day: "2018.08,03",
      about: "Cat crying every night",
    },
    {
      photo: "/assets/img/history/history8.jpg",

      day: "2021.05.11",
      about: "The cat turned 6 years old",
    },
  ];

  const historyRender = history.map((props, key) => {
    return (
      <CompanyHistory
        day={props.day}
        about={props.about}
        photo={props.photo}
        key={key}
      />
    );
  });

  return (
    <CompanyHistoryBoxDiv>
      <h2>Catch History</h2>
      {historyRender}
    </CompanyHistoryBoxDiv>
  );
}

export default CompanyHistoryBox;
