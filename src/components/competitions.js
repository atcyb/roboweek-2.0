import React from "react";
import "../css/competitions.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Services() {
  function activateLasers1() {
    window.location.href =
      "https://dare2compete.com/workshop/django-ml-roboweek-20-national-institute-of-technology-nit-hamirpur-267510";
  }
  function activateLasers2() {
    window.location.href = "https://www.youtube.com/watch?v=lrnYq73Ima4";
  }
  function activateLasers3() {
    window.location.href =
      "https://dare2compete.com/workshop/iot-in-home-automation-roboweek-20-national-institute-of-technology-nit-hamirpur-271532";
  }
  function activateLasers4() {
    window.location.href = "";
  }

  return (
    <>
      <div id="services" className="services competitionsecback section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                data-aos="fade-up"
                className="section-heading  wow fadeInDown section-heading-workshop"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
                style={{ marginBottom: "2px", textAlign: "left" }}
              >
                <h6>Past Workshops</h6>
                <h4>
                  What Roboweek has <em>Provided</em>
                </h4>
                <div className="line-dec" style={{ marginLeft: "0px" }}></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* <--------------sec start------------> */}
                      <div
                        className="menu"
                        style={{
                          marginTop: "30px",
                          marginBottom: "50px",
                          contentAlign: "center",
                        }}
                      >
                        {/* <----------------------first---------------------------> */}
                        <div
                          className=" active"
                          style={{ marginRight: "3%", marginLeft: "0%" }}
                        >
                          <div
                            className="thumb first-thumb"
                            style={{ width: "100%" }}
                          >
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-02.png"
                                className="icon-img"
                                alt=""
                              />
                            </span>
                            IOT Workshop
                          </div>
                        </div>
                        
                        {/* <----------------------Third---------------------------> */}
                        <div
                          className="third-thumb"
                          style={{ marginRight: "3%", marginLeft: "3%" }}
                        >
                          <div className="thumb" style={{ width: "100%" }}>
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-01.png"
                                className="icon-img"
                                alt=""
                              />
                            </span>
                            ML with Django
                          </div>
                        </div>
                        {/* <----------------------Third---------------------------> */}
                        <div
                          className="third-thumb"
                          style={{ marginRight: "3%", marginLeft: "3%" }}
                        >
                          <div className="thumb" style={{ width: "100%" }}>
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-03.png"
                                className="icon-img"
                                alt=""
                              />
                            </span>
                            ROS
                          </div>
                        </div>
                      </div>
                      {/* <--------------sec ends--------------------> */}
                    </div>

                    <div className="col-lg-12 main-box">
                      <ul className="nacc">

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<----------------IoT-workshop-content-------------->>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                        <li className="active" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                          <div className="sub-box">
                            <div
                              style={{ marginLeft: "8px" }}
                              className="thumb"
                            >
                              <div className="row">
                                {/* <div className="col-lg-6 align-self-center right">
                              <div className="right-image">
                                <img  className="img-responsive django-img" src="assets/images/Machine learning.png" alt="" />
                              </div>
                            </div> */}
                                <div className="col-lg-12 align-self-center">
                                  <div className="left-text">
                                    <img
                                      className="img-responsive django-img2 col-lg-6"
                                      src="assets/images/iot.png"
                                      alt=""
                                    />
                                    <div className="col-lg-6">
                                      <h4>
                                        Workshop on IOT (Internet of Things)
                                      </h4>
                                      <p>
                                        What if I say that, "You can control
                                        lights, fans and even your complete
                                        house,
                                        <br />
                                        just by a simple voice command or by
                                        your smartphone"?
                                        <br />
                                        Sounds very interesting.
                                        <br />
                                        huh?
                                        <br />
                                        Yes, you can control it by the help of
                                        IoT Home Automation.
                                      </p>
                                      <div
                                        // data-aos="fade-right"
                                        className="ticks-list"
                                      >
                                        <span>
                                          <i className="fa fa-check"></i> Hands
                                          on project
                                        </span>
                                        <span>
                                          <i className="fa fa-check"></i>{" "}
                                          IOT(Internet of Things)
                                        </span>
                                        <span>
                                          <i className="fa fa-check"></i>
                                          References to 100+ interesting
                                          projects in IOT
                                        </span>{" "}
                                      </div>
                                      <div class="row buttons-ml">
                                        {/* <button
                                          onClick={activateLasers3}
                                          id="bottone5"
                                          style={{ width: "fit-content" }}
                                        >
                                          {" "}
                                          <i
                                            style={{
                                              paddingRight: "2px",
                                              paddingTop: "3px",
                                            }}
                                            class="fa fa-award"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Register
                                        </button> */}

                                        <button
                                          onClick={activateLasers3}
                                          style={{ width: "fit-content" }}
                                          id="bottone-5"
                                        >
                                          {" "}
                                          <i
                                            style={{
                                              paddingRight: "2px",
                                              paddingTop: "3px",
                                            }}
                                            class="fa fa-youtube-play"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          <b>Watch Now</b>
                                        </button>
                                      </div>
                                    </div>
                                    {/* <button style={{marginLeft:"10%"}} class="cybr-btn">
                                            Buttons<span aria-hidden>_</span>
                                            <span aria-hidden class="cybr-btn__glitch">Buttons_</span>
                                            
                                          </button> */}
                                  </div>
                                </div>
                                {/* <div className="col-lg-6 align-self-center">
                              <div  className="right-image">
                                <img  className="img-responsive django-img" src="assets/images/Machine learning.png" alt="" />
                              </div>
                            </div> */}
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--------------------------ML with Django-content------------------------->>>>>>>>>>>>>>>> */}
                        <li style={{ paddingRight: "3%", paddingLeft: "3%" }}>
                          <div className="sub-box">
                            <div
                              style={{ marginLeft: "8px" }}
                              className="thumb"
                            >
                              <div className="row">
                                {/* <div className="col-lg-6 align-self-center right">
                              <div className="right-image">
                                <img  className="img-responsive django-img" src="assets/images/Machine learning.png" alt="" />
                              </div>
                            </div> */}
                                <div className="col-lg-12 align-self-center">
                                  <div className="left-text">
                                    <img
                                      className="img-responsive django-img col-lg-6"
                                      src="assets/images/machine-learning.png"
                                      alt=""
                                    />
                                    <div className="col-lg-6">
                                      <h4>Machine Learning with Django</h4>
                                      <p>
                                        Have you ever wondered how MACHINE
                                        LEARNING helps robots sustain
                                        productivity by allowing them to engage
                                        dynamically and avoid obstacles? Any
                                        approach capable of simulating human
                                        intelligence contains ML. It shows how
                                        data can be used in new ways..
                                      </p>
                                      <div
                                        // data-aos="fade-right"
                                        className="ticks-list"
                                      >
                                        <span>
                                          <i className="fa fa-check"></i> Hands
                                          on project
                                        </span>
                                        <span>
                                          <i className="fa fa-check"></i>{" "}
                                          algorithm models
                                        </span>
                                        <span>
                                          <i className="fa fa-check"></i> Python
                                          Libraries Used in ML algorithm
                                        </span>{" "}
                                      </div>
                                      <div class="row buttons-ml">
                                        {/* <button
                                          onClick={activateLasers1}
                                          id="bottone5"
                                          style={{ width: "fit-content" }}
                                        >
                                          {" "}
                                          <i
                                            style={{
                                              paddingRight: "2px",
                                              paddingTop: "3px",
                                            }}
                                            class="fa fa-award"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Register
                                        </button> */}

<button
                                          onClick={activateLasers1}
                                          style={{ width: "fit-content" }}
                                          id="bottone-5"
                                        >
                                          {" "}
                                          <i
                                            style={{
                                              paddingRight: "2px",
                                              paddingTop: "3px",
                                            }}
                                            class="fa fa-youtube-play"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          <b>Watch Now</b>
                                        </button>
                                      </div>
                                    </div>
                                    {/* <button style={{marginLeft:"10%"}} class="cybr-btn">
                                            Buttons<span aria-hidden>_</span>
                                            <span aria-hidden class="cybr-btn__glitch">Buttons_</span>
                                            
                                          </button> */}
                                  </div>
                                </div>
                                {/* <div className="col-lg-6 align-self-center">
                              <div  className="right-image">
                                <img  className="img-responsive django-img" src="assets/images/Machine learning.png" alt="" />
                              </div>
                            </div> */}
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--------------------------ROS by jai sir------------------------->>>>>>>>>>>>>>>> */}
                        <li style={{ paddingRight: "3%", paddingLeft: "3%" }}>
                          <div className="sub-box">
                            <div
                              style={{ marginLeft: "8px" }}
                              className="thumb"
                            >
                              <div className="row">
                                {/* <div className="col-lg-6 align-self-center right">
                              <div className="right-image">
                                <img  className="img-responsive django-img" src="assets/images/Machine learning.png" alt="" />
                              </div>
                            </div> */}
                                <div className="col-lg-12 align-self-center">
                                  <div className="left-text">
                                    <img
                                      className="img-responsive django-img col-lg-6"
                                      src="assets/images/jai-sir.jpg"
                                      alt=""
                                    />
                                    <div className="col-lg-6">
                                      <h4>Workshop on ROS
</h4>
                                      <p>
                                      Robot Operating System (ROS or ros) is an open-source robotics middleware suite. Although ROS is not an operating system (OS) but a set of software frameworks for robot software development, it provides services designed for a heterogeneous computer cluster such as hardware abstraction, low-level device control, implementation of commonly used functionality, message-passing between processes, and package management.

                                      </p>
                                      <div
                                        // data-aos="fade-right"
                                        className="ticks-list"
                                      >
                                        <span>
                                          <i className="fa fa-check"></i> Hands
                                          on project
                                        </span>
                                        <span>
                                          <i className="fa fa-check"></i>{" "}
                                          ROS(Robot Operating System)

                                        </span>
                                        <span>
                                          <i className="fa fa-check"></i> Turtlesim
                                        </span>{" "}
                                      </div>
                                      <div class="row buttons-ml">
                                        {/* <button
                                          onClick={activateLasers1}
                                          id="bottone5"
                                          style={{ width: "fit-content" }}
                                        >
                                          {" "}
                                          <i
                                            style={{
                                              paddingRight: "2px",
                                              paddingTop: "3px",
                                            }}
                                            class="fa fa-award"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Register
                                        </button> */}

<button
                                          onClick={activateLasers2}
                                          style={{ width: "fit-content" }}
                                          id="bottone-5"
                                        >
                                          {" "}
                                          <i
                                            style={{
                                              paddingRight: "2px",
                                              paddingTop: "3px",
                                            }}
                                            class="fa fa-youtube-play"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          <b>Watch Now</b>
                                        </button>
                                      </div>
                                    </div>
                                    {/* <button style={{marginLeft:"10%"}} class="cybr-btn">
                                            Buttons<span aria-hidden>_</span>
                                            <span aria-hidden class="cybr-btn__glitch">Buttons_</span>
                                            
                                          </button> */}
                                  </div>
                                </div>
                                {/* <div className="col-lg-6 align-self-center">
                              <div  className="right-image">
                                <img  className="img-responsive django-img" src="assets/images/Machine learning.png" alt="" />
                              </div>
                            </div> */}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
