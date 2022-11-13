import React from 'react';
import coverImage from "../../assets/homepage/stylists/1.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactInfo() {
  return (
    <section className='bg-dark'>
      <Container>
          <Row>
          <Col md={4}>
            <div className='contact-info'>
              <h1 id="contact" className='text-light'>Location</h1>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.1824833268383!2d-105.10506668429922!3d40.16049057910696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf99f57d29787%3A0x5a047ad58b8ae595!2s55%20Main%20St%2C%20Longmont%2C%20CO%2080501!5e0!3m2!1sen!2sus!4v1654865862543!5m2!1sen!2sus"
                frameborder="0" allowfullscreen="true">
              </iframe>
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

export default ContactInfo;
