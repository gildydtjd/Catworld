import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .sectionBox__header__link {
      color: white;
      padding: 30px 20px;
      font-size: 22px;
      margin-right: 100px;
      font-weight: 800;
      text-decoration: none;
      :hover {
        color: gold;
        cursor: pointer;
      }
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      .sectionBox__header__link {
        font-size: 13px !important;
        margin-right: unset !important;
        padding: 20px 30px !important;
      }
    }
  `;
  return (
    <HeaderDiv>
      <Link to="/" className="sectionBox__header__link">
        <span>HOME</span>
      </Link>
      <Link to="/" className="sectionBox__header__link">
        <span>ABOUT</span>
      </Link>
      <Link to="/" className="sectionBox__header__link">
        <span>SHOP</span>
      </Link>
      <Link to="/" className="sectionBox__header__link">
        <span>Q&A</span>
      </Link>
    </HeaderDiv>
  );
}

export default Header;
