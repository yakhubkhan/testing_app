
import React, { useState } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";

import "../App.css";
import { SplitPane } from "react-collapse-pane";

import Widget from "./Widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isHide, setIsHide] = useState(false);
  const [img, setImg] = useState(faAngleUp);

  const [content, setContent] = useState("Main Content");
  const [belowTab, setBelowTab] = useState("Home");
  const hideBelow = () => {
    setIsHide(!isHide);
    if (isHide) {
      setImg(faAngleUp);
    } else {
      setImg(faAngleDown);
    }
  };
  const clickOption = (value) => {
    setBelowTab(value);
  };
  return (
    <>
      {/* <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/Review">REVIEW</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Analasys">ANALYSIS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">PUBLISH</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">VERSION</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">CONFIGURE</a>
  </li>
 
</ul> */}
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="active" onClick={() => clickOption("HOME")}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => clickOption("option 2")}>
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => clickOption("option 3")}>
            Option 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="left">
          <FontAwesomeIcon icon={img} onClick={hideBelow}></FontAwesomeIcon>
        </Nav.Item>
      </Nav>
      {isHide ? (
        <div className="downPanel">
          <Container fluid>
            <Row>
              <Col>{belowTab}</Col>
            </Row>
            <Row></Row>
          </Container>
        </div>
      ) : null}
      <SplitPane
        split="vertical"
        initialSizes={[1, 4]}
        collapse={true}
        resizerOptions={{
          css: {
            width: "1px",
            background: "rgba(0, 0, 0, 0.1)",
            border: "3px solid lightgray",
          },
          hoverCss: {
            width: "3px",
            background: "5px solid rgba(102, 194, 255, 0.5)",
            border: "3px solid lightgray",
          },
          grabberSize: "1rem",
        }}
      >
        <div className="sideBar">
          {/* <TreeExample content={setContent} /> */}
          <Widget content={setContent}></Widget>
        </div>
        <div className="contentClas">{content}</div>
      </SplitPane>
    </>
  );
};

export default Navbar;