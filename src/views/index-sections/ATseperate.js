import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimationWrapper } from "react-hover-animation";
import styled, { keyframes } from "styled-components";
import ATAbutton from "../business/ATA";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./ATseperate.css";

const Divider = styled.div`
position: relative;
width: 50px;
background: #101010";
height: 2px;
margin: 0 auto
`;

const ATseperate = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      {/*History 화이트영역 */}
      <div
        className="text_start"

        // style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="empty_space_up" style={{ height: "50px" }}>
              {/* <span className="vc_empty_space_inner"></span> */}
            </div>

            <div className="wpb_text_column wpb_content_element  Headlineshadow2">
              <div className="wpb_wrapper">
                <div id="our_business">
                  <span
                    style={{ color: "#585858" }}
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                  >
                    OUR BUSINESS
                  </span>
                </div>
              </div>
            </div>

            <div
              className="empty_space_under_maintext"
              style={{ height: "30px" }}
            >
              {/* <span className="vc_empty_space_inner"></span> */}
            </div>
            <div className="gem-divider" style={{ height: "70px" }}></div>

            <div
              id="content_section_total"
              style={{
                width: "100%",
                height: "900px",
              }}
            >
              <div id="content_section_oneline">
                <div id="two_by_one">
                  <div
                    id="content_section_img1"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                  >
                    {" "}
                    <img
                      alt="..."
                      className="n-logo"
                      src={require("assets/img/e-sports2.jpg")}
                    ></img>
                  </div>

                  <div id="content_section_img1">
                    <div id="content_section_img1_details">
                      <b>ATA</b>
                      {/* <Divider></Divider> */}

                      <AnimationWrapper class="ptext">
                        <p>
                          We've been using platform technology and data that's
                          been stored for over a decade. Global to drive
                          continuous growth and innovation on the foundation A
                          influencer marketing platform company.
                        </p>
                      </AnimationWrapper>

                      <Link to="/ATA">
                        <a id="link_detail" target="top">
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="two_by_one">
                  <div
                    id="content_section_img1"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                  >
                    {" "}
                    <img
                      className="n-logo"
                      src={require("assets/img/atb.main.jpg")}
                    ></img>
                  </div>

                  <div id="content_section_img1">
                    <div id="content_section_img1_details">
                      <b>ATB</b>
                      <Divider></Divider>
                      <AnimationWrapper class="ptext">
                        <p>
                          We've been using platform technology and data that's
                          been stored for over a decade. Global to drive
                          continuous growth and innovation on the foundation A
                          influencer marketing platform company.
                        </p>
                      </AnimationWrapper>

                      <Link to="/ATB">
                        <a id="link_detail" target="top">
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="content_section_oneline">
                <div id="content_section_img1">
                  <div id="content_section_img1_details">
                    <b>ATC</b>
                    <Divider></Divider>
                    <AnimationWrapper class="ptext">
                      <p>
                        We've been using platform technology and data that's
                        been stored for over a decade. Global to drive
                        continuous growth and innovation on the foundation A
                        influencer marketing platform company.
                      </p>
                    </AnimationWrapper>

                    <Link to="/ATC">
                      <a id="link_detail" target="top">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  id="content_section_img1"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    alt="..."
                    className="n-logo"
                    src={require("assets/img/media3.jpg")}
                  ></img>
                </div>

                <div id="content_section_img1">
                  <div id="content_section_img1_details">
                    <b>HISTORY</b>
                    <Divider></Divider>
                    <AnimationWrapper class="ptext">
                      <p>
                        We've been using platform technology and data that's
                        been stored for over a decade. Global to drive
                        continuous growth and innovation on the foundation A
                        influencer marketing platform company.
                      </p>
                    </AnimationWrapper>

                    <Link to="/history">
                      <a id="link_detail" target="top">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  id="content_section_img1"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  {" "}
                  <img
                    className="n-logo"
                    src={require("assets/img/building.jpg")}
                  ></img>
                </div>
              </div>
              {/* <div
                className="empty_space_footer"
                style={{ height: "0px" }}
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ATseperate;
