import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, CgServer } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiMysql,
  DiDatabase,
  DiAws,
  DiCloud9,
  
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiGit,
  SiMysql,
  SiThealgorithms,
  SiAwsamplify,
  SiSpringsecurity,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi, TbBrandGolang } from "react-icons/tb";






function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < TbApi/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiDatabase/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiThealgorithms />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        
      </Col>
    </Row>
  );
}

export default Techstack;
