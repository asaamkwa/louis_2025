import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import schoolmanagementsystemImage from "../../Assets/Projects/schoolmanagementsystem.png";
import growafricaformeImage from "../../Assets/Projects/growafricaforme.png";
import suicide from "../../Assets/Projects/suicide.png";
//import bitsOfCode from "../../Assets/Projects/blog.png";
import ecommerceImage from "../../Assets/Projects/ecommerce.jpg"

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
              imgPath={ecommerceImage}
              isBlog={false}
              title="E-Commerce Website"
              description="I developed a fully functional e-commerce website that allows users to browse products, add items to a shopping cart, and securely complete purchases. The system includes user authentication, product management, order processing, and responsive design for a seamless experience across devices. It integrates front-end and back-end technologies to deliver a smooth and efficient shopping experience."
              ghLink="https://github.com/asaamkwa"
              demoLink="https://github.com/asaamkwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={growafricaformeImage}
              isBlog={false}
              title="Consultant Website"
              description="I developed this website for them: 
              GrowAfrica For Me is an Enterprise Support Organization (ESO) and a Ghanaian Company Limited by Guarantee, dedicated to empowering Africa’s next generation of entrepreneurs. Initially established in 2022 as MakeAfrica Innovation DigiLab, we rebranded on January 22, 2025, to reflect our broader vision of inclusive and sustainable enterprise growth across the continent."
              ghLink="https://github.com/asaamkwa"
              demoLink="https://growafricaforme.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolmanagementsystemImage}
              isBlog={false}
              title="School Management System"
              description="A full-featured web application designed to streamline administrative and academic operations for schools. The system includes modules for student enrollment, class management, subject allocation, marks entry, result generation, and user authentication. Built using Node.js, Express, MongoDB, and EJS, it provides an intuitive interface for administrators, teachers, and students to interact efficiently. The system supports real-time data updates, role-based access control, and responsive design for all device types."
              ghLink="https://github.com/asaamkwa"
              demoLink="https://github.com/asaamkwa"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/asaamkwa"
              demoLink="https://github.com/asaamkwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/asaamkwa"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/asaamkwa"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
