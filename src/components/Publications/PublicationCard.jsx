import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsChevronDown, BsGithub } from "react-icons/bs";
import ComingSoon from "./ComingSoon";

function PubliicationCards(props) {
  return (
    <Card className="project-card-view">

      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>

        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

 
        {props.isblog ? (
          // If it's a blog, show an alert and do nothing else
          <Button variant="primary" href={"Coming"} target="_blank" >
            <BsChevronDown />
          </Button>
        ) :

        (<Button variant="primary" href={props.ghLink} target="_blank">
          <BsChevronDown/> 
         
          
            
        </Button>)}
        

        {"\n"}
        {"\n"}

        
 


      </Card.Body>
    </Card>
  );
}
export default PubliicationCards;
