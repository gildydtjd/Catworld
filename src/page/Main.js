import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

function Main(props) {
  const SectionBox2 = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .sectionBox__about__box {
      width: 30%;
      height: 80%;
      padding: 20px 20px;
      margin: 0px 20px;
      .sectionBox__about__box__info1 {
        margin-top: 20%;
        h2 {
          font-size: 20px;
          opacity: 0.7;
        }
        p {
          font-size: 30px;
          font-weight: 600;
        }
      }
      .sectionBox__about__box__info2 {
        p {
          font-size: 23px;
          opacity: 0.7;
        }
      }
      .sectionBox__about__box__info3 {
        height: 20%;
        padding: 40px 0px;
        li {
          font-size: 17px;
          height: 2.5rem;
          opacity: 0.7;
          list-style: none;
        }
        .info_box {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 30px 0px;
          width: 70%;
          .info {
            text-decoration: none;
            border: 2px solid #c9c9c9;
            padding: 3px 7px;
            color: black;
            font-weight: 600;
            border-radius: 5px;
            width: 50%;
            margin-right: 10px;
            text-align: center;
          }
          .info:hover {
            background-color: #fff;
            color: green;
            border: 1px solid green;
          }
        }
      }
      .sectionBox__about__box__img {
        width: 100%;
        height: 100%;
        background-image: url("/assets/img/history/history7.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    @media screen and (max-width: 768px) {
      display: inline-block;
      height: 100%;
      .sectionBox__about__box__img {
        height: 70% !important;
        width: 70% !important;
        margin-left: 15%;
        border-radius: 10px;
      }
      .sectionBox__about__box {
        width: 100%;
        height: 40vh;
        padding: unset;
        margin: unset;
        margin-bottom: 10px;
        text-align: center;
        .sectionBox__about__box__info1 {
          margin-top: unset;
          h2 {
            font-size: 10px !important;
          }
          p {
            font-size: 13px !important;
          }
        }
        .sectionBox__about__box__info2 {
          p {
            font-size: 12px !important;
          }
        }
        .sectionBox__about__box__info3 {
          padding: unset;
          li {
            font-size: 10px !important;
            height: 25px !important;
            list-style: none;
          }
          .info_box {
            margin: unset;
            text-align: center;
            width: 100%;

            .info {
              padding: unset;
              font-size: 5px !important;
              width: 20%;
            }
          }
        }
      }
    }
  `;

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

    .sectionBox__about {
      width: 80%;
      height: 40%;
      margin-left: ${(props) => (props.marginL ? props.marginL : "8%")};
      margin-top: ${(props) => (props.marginT ? props.marginT : "15%")};
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
      .sectionBox__about__info3 {
        p {
          color: #c9c9c9;
          font-size: 40px;
          font-weight: 600;
        }
      }
      .sectionBox__about__info4 {
        p {
          font-size: 23px;
          line-height: 1;
          font-weight: 600;
          color: #000000;
          opacity: 0.6;
        }
      }
      .sectionBox__about__info5 {
        display: flex;
        justify-content: center;
        align-items: center;
        .sectionBox__about__info5__box {
          width: 380px;
          height: 200px;
          padding: 20px 20px;
          box-shadow: 0 0 16px 8px rgb(0 0 0 / 3%);
          border-radius: 0.5rem;
          margin: 40px 20px;
          h2 {
            font-size: 1.5rem;
            font-weight: 800;
            color: #222525;
            margin-bottom: 1rem;
          }
          p {
            line-height: 1.5;
            margin-bottom: 1.5rem;
            font-size: 15px !important;
          }
          .moreLink {
            text-decoration: none;
            border: 2px solid #c9c9c9;
            padding: 3px 7px;
            background-color: #c9c9c9;
            color: black;
            font-weight: 600;
            border-radius: 5px;
          }
          .moreLink:hover {
            background-color: #fff;
            color: green;
            border: 1px solid green;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      height: ${(props) => (props.hheight ? props.hheight : "100vh")};
      .sectionBox__about__box {
        width: 100%;
        padding: none;
        margin: none;
        .sectionBox__about__box__info1 {
          margin-top: none;
          h2 {
            font-size: 5px;
          }
          p {
            font-size: 5px;
          }
        }
        .sectionBox__about__box__info2 {
          p {
            font-size: 5px;
          }
        }
        .sectionBox__about__box__info3 {
          padding: unset;
          li {
            font-size: 5px;
            height: unset;
          }
          .info_box {
            margin: unset;
            .info {
              padding: unset;
            }
          }
        }
      }
      .sectionBox__about {
        width: 80% !important;
        margin-left: 8%;
        margin-top: ${(props) => (props.marginTT ? props.marginTT : "80%")};

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
        .sectionBox__about__info3 {
          p {
            font-size: 15px !important;
          }
        }
        .sectionBox__about__info4 {
          p {
            font-size: 15px !important;
          }
        }
        .sectionBox__about__info5 {
          display: inline-block;
          .sectionBox__about__info5__box {
            width: 80%;
            height: 20%;
            padding: none;
            margin: none;
            h2 {
              font-size: 8px;
            }
            p {
              font-size: 12px !important;
            }
            .moreLink {
              padding: none;
              font-size: 5px;
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat/cat7.jpg" dis="inline-block">
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info1"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <h2>2021</h2>
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
        height="70vh"
        marginT="5%"
        align="center"
        hheight="100%"
        marginL="10%"
        marginTT="10%"
      >
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info3"
            {...useScrollFadeIn("right", 1, 0.5)}
          >
            <p>High Class Cat</p>
          </div>
          <div
            className="sectionBox__about__info4"
            {...useScrollFadeIn("right", 1, 0.5)}
          >
            <p>Cats want many people to like them I don't want</p>
            <p>But only the ones he chooses I just want you to love me</p>
          </div>
          <div className="sectionBox__about__info5">
            <div
              className="sectionBox__about__info5__box"
              {...useScrollFadeIn("right", 1, 0.5)}
            >
              <h2>Catch Company</h2>
              <p>
                Catch Company was founded on July 31, 1993, and is a shopping
                mall that has been used by 10 million members to date.
              </p>
              <Link to="/company" className="moreLink">
                Company
              </Link>
            </div>
            <div
              className="sectionBox__about__info5__box"
              {...useScrollFadeIn("right", 1, 0.7)}
            >
              <h2>Catch About</h2>
              <p>
                We will inform you of the cat information currently held by the
                Catch company. Learn about cats from around the world.
              </p>
              <Link to="/about" className="moreLink">
                About
              </Link>
            </div>
            <div
              className="sectionBox__about__info5__box"
              {...useScrollFadeIn("right", 1, 0.9)}
            >
              <h2>Catch Contact</h2>
              <p>
                There are 50,000 cats' favorite toys. Check out the items at the
                Catch Shop, which has everything for cats.
              </p>
              <Link to="/shop" className="moreLink">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </SectionBox>

      <SectionBox2>
        <div className="sectionBox__about__box">
          <div
            className="sectionBox__about__box__info1"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <p>Catch</p>
            <p>High Class Cat</p>
          </div>
          <div
            className="sectionBox__about__box__info2"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <p>The above company is a company that only</p>
            <p>provides high-quality services for cats.</p>
            <p>If you have no love for cats, please return.</p>
          </div>
          <div
            className="sectionBox__about__box__info3"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <li>1993.07,31 Washing the cat</li>
            <li>1995.08.20 Give a cat snack</li>
            <li>2000.09.27 Play with a cat</li>
            <div className="info_box">
              <Link to="/about" className="info">
                AboutInfo
              </Link>
              <Link to="/about" className="info">
                ContactInfo
              </Link>
            </div>
          </div>
        </div>
        <div
          div
          className="sectionBox__about__box"
          {...useScrollFadeIn("right", 1, 0.4)}
        >
          <div className="sectionBox__about__box__img"></div>
        </div>
      </SectionBox2>

      <SectionBox url="/assets/img/cat/cat18.jpg" height="100vh">
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
      <Footer />
    </>
  );
}

export default Main;
