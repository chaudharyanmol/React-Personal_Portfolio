import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PubliicationCards from "./PublicationCard";
import brain from "../../Assets/publications/brain-scan.png";
import price from "../../Assets/publications/price_Comparison.png";
import soil from "../../Assets/publications/soil health.jpg";
import ComingSoon from "./ComingSoon";

function Publications(){

    return    (<Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Publications </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few publications I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <PubliicationCards
            imgPath={price}
            isblog={false}
            title="Price Comparison Using Web Scraping and Machine Learning"
            description=" Published a research paper on Price Comparison using web Scrapping and Machine Learning in 2023 International Conference on Computer Science and Emerging Technologies (CSET). The work aims to build a robust web scraping-based price comparison system for e-commerce websites. Using advanced scraping techniques, it gathers and analyzes product prices from multiple platforms, highlighting trends to help users find the best deals. With an intuitive interface and visualization features, the system simplifies online market navigation, enabling users to effortlessly identify competitive prices for desired products"
            ghLink="https://ieeexplore.ieee.org/document/10346784"
            
          />
        </Col>
        <Col md={4} className="project-card">
          <PubliicationCards
            imgPath={soil}
            isblog={true}
            title="Soil Health Monitoring System                    "
            description=" Working on a Research Paper on  Soil Health Monitoring System a  machine learning-based system to analyze key soil parameters for assessing soil health and optimizing crop yield. The work involves data processing and pattern identification to support sustainable farming practices, providing actionable insights through a user-friendly interface.The system leverages various machine learning algorithms, including LightGBM, to predict soil health status and suggest improvements for efficient farming. Aiming to enhance crop productivity while minimizing environmental impact"
            ghLink="https://github.com/chaudharyanmol/Soil-healthMonitoring.git"
          />
        </Col>
        <Col md={4} className="project-card">
          <PubliicationCards
            imgPath={brain}
            isblog={true}
            title="Role of Machine learning and Deep learning in Rrain Tumor Classification"
            description="Circulated a research paper on the role of machine learning and deep learning in brain tumor classification. The work aims to develop a highly efficient classification system using advanced ML and DL algorithms, leveraging MRI and CT scan data. The system focuses on early detection, accurate diagnosis, tumor classification, and automated workflows, ultimately enhancing diagnostic efficiency and supporting clinicians in making informed treatment decisions. This approach aims to improve patient outcomes through faster, more accurate, and personalized treatment planning"
             ghLink="{#}"
          />

        </Col>


      </Row>
    </Container>
  </Container>
);
}

export default Publications ;