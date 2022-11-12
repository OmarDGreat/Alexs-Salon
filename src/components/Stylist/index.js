import React from "react";
import coverImage from "../../assets/homepage/stylists/1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Stylist() {
  return (
    <section className="bg-dark">
      <Container>
        <Row>
          <Col md={8}>
            <div>
              <h1 id="stylist" className="text-light">
                Alex
              </h1>
              <p className="text-light">
                Alex is a certificied Cosmotologist/Beautician who enjoys
                working with clients to help them achieve desired nail designs.
                Alex interacts with clients, perform quality beautification
                techniques, and providing spa-like services to her clients.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div>
              <img src={coverImage} style={{ width: "100%" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Stylist;
