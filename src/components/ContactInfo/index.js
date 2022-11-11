import React from 'react';
import coverImage from "../../assets/homepage/stylists/1.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Stylist() {
  return (
    <section className='bg-dark'>
      <Container>
          <Row>
          <Col md={4}>
            <div>
              <h1 id="stylist" className='text-light'>Location</h1>
              <p className='text-light'>
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
            
            <Col md={4}>
            <div>
              <h2 className='text-light'> Buissness Hours</h2>
              <br></br>
              <br></br>
              <p className='text-light'> 
                Monday: 9am - 5pm
              </p>
              <p className='text-light'> 
                Tuesday: 9am - 5pm
              </p>
              <p className='text-light'> 
                Wednesday: 9am - 5pm
              </p>
              <p className='text-light'> 
                Thursday: 9am - 5pm
              </p>
              <p className='text-light'> 
                Friday: 9am - 5pm
              </p>
            </div>
            </Col>

            <Col md={4}>
            <div>
              <h2 className='text-light'> Contact us</h2>
              <br></br>
              <br></br>
              <p className='text-light'> 
                facebook.com/Alex's-Salon
              </p>
              <p className='text-light'> 
                Insta.com/Alex's-Salon
              </p>
            </div>
            </Col>
          </Row>
      </Container>

    </section>
  );
}

export default Stylist;
