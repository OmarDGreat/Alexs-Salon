import React from 'react';
import coverImage from "../../assets/homepage/appointments/1.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
              <h1 id="appointment">Schedule with me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
              </p>
              <a href="https://www.vagaro.com/alexandria-hair-design" target="_blank" rel="noreferrer">Book Now</a>
            </div>
            </Col>
          </Row>
      </Container>

    </section>
  );
}

export default Appointment;
