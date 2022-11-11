import React from 'react';
import coverImage from "../../assets/homepage/aboutme/1.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
              <h1 id="about">About Me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
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
