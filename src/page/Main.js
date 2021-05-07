import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import PhotoGallery from "../components/photo/PhotoGallery";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
const backUrl = [
  {
    url: "/assets/img/cat13.jpg",
    duraction: 1,
    delay: 0.5,
    name: "이순신",
    age: 4,
    price: "200,000",
  },
  {
    url: "/assets/img/cat10.jpg",
    duraction: 1,
    delay: 0.6,
    name: "곽재우",
    age: 4,
    price: "200,000",
  },
  {
    url: "/assets/img/cat11.jpg",
    duraction: 1,
    delay: 0.7,
    name: "김유신",
    age: 4,
    price: "200,000",
  },
  {
    url: "/assets/img/cat12.jpg",
    duraction: 1,
    delay: 0.8,
    name: "이이",
    age: 4,
    price: "200,000",
  },
];
const backUrl2 = [
  {
    url: "/assets/img/cat5.jpg",
    duraction: 1,
    delay: 0.9,
    name: "세종대왕",
    age: 4,
    price: "200,000",
  },
  {
    url: "/assets/img/cat14.jpg",
    duraction: 1,
    delay: 1.0,
    name: "일지매",
    age: 4,
    price: "200,000",
  },
  {
    url: "/assets/img/cat19.jpg",
    duraction: 1,
    delay: 1.1,
    name: "장길산",
    age: 4,
    price: "200,000",
  },
  {
    url: "/assets/img/cat16.jpg",
    duraction: 1,
    delay: 1.2,
    name: "임꺽정",
    age: 4,
    price: "200,000",
  },
];

function Main(props) {
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

    .more {
      text-decoration: none;
      float: right;
      margin-right: 15%;
      color: black;
      margin-bottom: 10px;
      clear: both;
    }
    .sectionBox__about {
      width: 50%;
      height: 50%;
      margin-left: ${(props) => (props.marginL ? props.marginL : "8%")};
      margin-top: ${(props) => (props.marginT ? props.marginT : "10%")};
      text-align: ${(props) => (props.align ? props.align : "none")};
      .sectionBox__about__info1 {
        color: ${(props) => (props.color ? props.color : "#fff")};
        h2 {
          font-size: 15px;
        }
        p {
          font-size: 40px;
          font-weight: 600;
        }
      }
      .sectionBox__about__info2 {
        color: ${(props) => (props.color ? props.color : "#fff")};
        p {
          font-size: 22px;
          opacity: 0.6;
        }
      }
    }
    .info__h2 {
      margin: 0;
      padding: 30px 300px 0px;
    }

    @media screen and (max-width: 768px) {
      height: ${(props) => (props.hheight ? props.hheight : "100vh")};
      .sectionBox__about {
        width: 80% !important;
        margin-left: 8%;
        margin-top: ${(props) => (props.marginTT ? props.marginTT : "70%")};

        .sectionBox__about__info1 {
          h2 {
            font-size: 10px !important;
          }
          p {
            font-size: 20px !important;
          }
        }
        .sectionBox__about__info2 {
          p {
            font-size: 15px !important;
          }
        }
      }
      .info__h2 {
        margin-left: unset;
        padding: unset;
        text-align: center;
        padding: 40px 0px 20px;
      }
    }
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat7.jpg" dis="inline-block">
        <Header />
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info1"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <p>Catch</p>
            <p>High Class Cat</p>
          </div>
          <div
            className="sectionBox__about__info2"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <p>The above company is a company that only</p>
            <p>provides high-quality services for cats.</p>
            <p>If you have no love for cats, please return.</p>
          </div>
        </div>
      </SectionBox>
      <SectionBox
        dis="inline-block"
        color="black"
        marginL="25%"
        marginT="5%"
        align="center"
        hheight="100%"
        marginTT="10%"
      >
        <div {...useScrollFadeIn("up", 1, 0.6)}>
          <h2 className="info__h2">New Family Information</h2>
        </div>
        <PhotoGallery arrays={backUrl} />
        <Link {...useScrollFadeIn("up", 1, 0.6)} to="/about">
          <span className="more">+ More</span>
        </Link>
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info1"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <p style={{ color: "#c9c9c9" }}>Catch</p>
            <p>High Class Cat</p>
          </div>
          <div
            className="sectionBox__about__info2"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <p>Countless cats are looking for a butler.</p>
            <p>Become a lovely cat's butler.</p>
            <p style={{ color: "red", fontWeight: "600" }}>
              ※ only those who will spend their entire lives together
            </p>
          </div>
        </div>
      </SectionBox>

      <SectionBox
        dis="inline-block"
        color="black"
        marginL="25%"
        marginT="3%"
        align="center"
        hheight="100%"
        marginTT="10%"
      >
        <div {...useScrollFadeIn("down", 1, 0.6)}>
          <h2 className="info__h2">Cat Toy</h2>
        </div>
        <PhotoGallery arrays={backUrl2} />
        <Link {...useScrollFadeIn("up", 1, 0.6)} to="/about">
          <span className="more">+ More</span>
        </Link>
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info1"
            {...useScrollFadeIn("left", 1, 0.4)}
          >
            <p style={{ color: "#c9c9c9" }}>Catch</p>
            <p style={{ color: "green" }}>Cat Weapon</p>
          </div>
          <div
            className="sectionBox__about__info2"
            {...useScrollFadeIn("left", 1, 0.4)}
          >
            <p>Be alone and play with the lonely cat.</p>
            <p>They don't cry at night and sleep early.</p>
            <p style={{ color: "red", fontWeight: "600" }}>※ I'm too hard</p>
          </div>
        </div>
      </SectionBox>

      <SectionBox url="/assets/img/cat18.jpg">
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info1"
            {...useScrollFadeIn("up", 1, 0.4)}
          >
            <h2 style={{ color: "red" }}>warning</h2>
            <p>Catch</p>
            <p>Cats faster than light</p>
          </div>
          <div
            className="sectionBox__about__info2"
            {...useScrollFadeIn("up", 1, 0.4)}
          >
            <p>If you bother the cat</p>
            <p>Faster than light</p>
            <p>you will be hit by a nyang nyang kick.</p>
          </div>
        </div>
      </SectionBox>
    </>
  );
}

export default Main;
