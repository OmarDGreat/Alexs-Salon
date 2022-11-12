import React from "react";
import coverImage from "../../assets/homepage/aboutme/1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <section>
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <div>
                <img src={coverImage} style={{ width: "100%" }} />
              </div>
            </Col>
            <Col md={8}>
              <div>
                <h1 id="about">About Alex's Salon</h1>
                <p>
                  Located in the best part of town since 1998. Alex's 5 Star
                  salon provides amazing service and a rejuvenating experience.
                  We offer quality products and services for your Nail and Spa
                  needs in a serene environment. We have premium packages and
                  great prices.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default About;
