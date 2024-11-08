import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import face from "../../Assets/Projects/face.jpg";
import cricket from "../../Assets/Projects/cricket.jpg";
import shoping from "../../Assets/Projects/shopping.jpg";
import soil from "../../Assets/Projects/soil health.jpg";
import  stream from "../../Assets/Projects/stream.jpg";
import blog from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricket}
              isBlog={false}
              title="CrickInformer"
              description="The Real-Time Live Sports Scores and Match Analysis Application is a comprehensive platform focused on providing real-time cricket scores, player statistics, and detailed match analysis. Built with Spring Boot, Spring JPA, Hibernate, MySQL, React, and Tailwind CSS, the application delivers instant updates, insightful analytics, and a seamless user experience, ensuring high performance, scalability, and an intuitive interface for sports enthusiasts and analysts."
              ghLink="https://github.com/chaudharyanmol/CrickInformer.git"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Students Details using Face Recognition"
              description="The Students Details using Face Recognition System is an automated solution designed for educational institutions such as universities, colleges, and schools to streamline the students details. This system leverages facial recognition technology to accurately identify students and to provide  their details in real-time without requiring any manual intervention."
              ghLink="https://github.com/chaudharyanmol/Fetching-Students-details-using-face-recognition"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoping}
              isBlog={false}
              title="UrbanCart"
              description="The UrbanCart is an dynamic E-commerce store built using Next.js and React for the frontend, providing a seamless and responsive shopping experience. It features product listings, a shopping cart, secure checkout, and user authentication. The website is optimized for performance and scalability, with Next.js offering server-side rendering and fast loading times. "
              ghLink="https://github.com/chaudharyanmol/E-Com_website.github.io"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="TechBlog"
              description="TechBlog is a Java-based web app where users can share technical blogs across various categories. Built with HTML, CSS, JavaScript, Bootstrap, Ajax, Servlets, JSP, and MySQL, it offers an interactive, responsive interface. Users can create and manage blogs, while admins can control content."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soil}
              isBlog={false}
              title="Soil Health Monitoring System"
              description="The Soil Health Monitoring System uses machine learning to analyze soil data such as pH, moisture, and nutrient levels. It provides insights into soil quality, helping farmers make informed decisions on irrigation and fertilization. This system promotes better soil management, leading to improved crop yields and sustainable farming practices."
              ghLink="https://github.com/chaudharyanmol/Soil-healthMonitoring.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stream}
              isBlog={false}
              title="Streamify"
              description="Streamify is a video streaming application built with Spring Boot that enables users to upload, store, and stream video content. It features a backend for video file management and metadata storage, with videos uploaded via RESTful APIs and stored on a server or cloud storage. Optional user authentication and a frontend can enhance the streaming experience, making Streamify a flexible and efficient platform for video sharing."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
