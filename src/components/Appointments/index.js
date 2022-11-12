import React from "react";
import coverImage from "../../assets/homepage/appointments/1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Appointment() {
  return (
    <section>
      <Container>
        <Row>
          <Col md={4}>
            <div>
              <img src={coverImage} style={{ width: "100%" }} />
            </div>
          </Col>
          <Col md={8}>
            <div>
              <h1 id="appointment">Schedule With Me</h1>
              <p>Manicure</p>
              <a
                href="https://www.vagaro.com/alexandria-hair-design"
                target="_blank"
                rel="noreferrer"
              >
                Book Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Appointment;
