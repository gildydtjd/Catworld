import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer(props) {
  const FooterDiv = styled.div`
    padding: 55px 0 45px;
    background-color: #252525;
    position: relative;

    .sectionBox__footer__link {
      text-decoration: none;
      color: #888;
      font-size: 15px;
    }
    ul,
    li {
      list-style: none;
    }
    ul {
      text-align: center;
    }
    li {
      color: #888;
      display: inline;
      margin-right: 12px;
    }
    p {
      float: center;
      color: #888;
      letter-spacing: 2px;
      font: 400 14px/ 40px "Open Sans", sans-serif;
      clear: both;
      text-align: center;
    }
    @media screen and (max-width: 768px) {
      ul {
        padding: 0;
      }
      li {
        margin-right: 0px;
      }
      .sectionBox__footer__link {
        font-size: 12px;
      }
    }
  `;
  return (
    <FooterDiv>
      <ul>
        <Link
          to="/"
          className="sectionBox__footer__link"
          onclick="window.scrollTo(0,0)"
        >
          <li>Home</li>
        </Link>
        <li>ㆍ</li>

        <Link to="/company" className="sectionBox__footer__link">
          <li>COMPANY</li>
        </Link>
        <li>ㆍ</li>

        <Link to="/about" className="sectionBox__footer__link">
          <li>ABOUT</li>
        </Link>
        <li>ㆍ</li>

        <Link to="/" className="sectionBox__footer__link">
          <li>Contact</li>
        </Link>
      </ul>
      <p>©2020 Catch Company - Dragon gil</p>
    </FooterDiv>
  );
}

export default Footer;
