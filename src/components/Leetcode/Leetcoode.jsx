import React from "react";
import LeetCodeCalendar from 'leetcode-calendar';
// import { LeetCodeCalendar } from "leetcode-calendar";
import { Row } from "react-bootstrap";
import Particle from "../Particle";

export default function Example() {

    return (
      

        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop:"10%" }}>
          <Particle/>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Solved the problems</strong>
          </h1>

    
          <LeetCodeCalendar style={{padding:"13%"}}
            username="Fact_hatch"
            blockSize={15}
            blockMargin={5}
            color="#000000"
           
            fontSize={16}
          /> 
                  
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
          
    
        </Row>

 
      );
    }
    
  