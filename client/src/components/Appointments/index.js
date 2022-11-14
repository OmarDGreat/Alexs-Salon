import React, { useState } from 'react';
import { useContext } from 'react';
import coverImage from '../../assets/homepage/appointments/1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthContext from '../../store/auth-context';

const barberBookingDetails = [
    {
        name: 'Jhonatan',
        bookingUrl: 'https://calendly.com/proj-alexs-salon/30min'
    },
    { name: 'Sofiya', bookingUrl: 'https://calendly.com/jonathandiazp/30min' }
];

function Appointment() {
    const authCtx = useContext(AuthContext);
    const [barber, setBarber] = useState('Jhonatan');
    const [bookingUrl, setBookingUrl] = useState(
        'https://calendly.com/proj-alexs-salon/30min'
    );

    const onBarberSelectHandler = (barber) => {
        const barberSelected = barberBookingDetails.find(
            (data) => data.name === barber
        );

        setBarber(barber);
        setBookingUrl(barberSelected.bookingUrl);
    };

    return (
        <section className="min-vh-100">
            <Container>
                <Row>
                    <Col md={4}>
                        <div>
                            <img src={coverImage} style={{ width: '100%' }} />
                        </div>
                    </Col>
                    {authCtx.auth.isLoggedIn && (
                        <Col md={8}>
                            <div>
                                <h1 id="appointment">
                                    Schedule your session with:
                                </h1>
                                <select
                                    onChange={(event) => {
                                        onBarberSelectHandler(
                                            event.target.value
                                        );
                                    }}
                                    value={barber}
                                    className="form-select w-50 m-auto"
                                    aria-label="Whome do you want to have session with?">
                                    <option value="Jhonatan">Jhonatan</option>
                                    <option value="Sofiya">Sofiya</option>
                                </select>
                                <p>{barber}</p>
                                <a
                                    href={bookingUrl}
                                    target="_blank"
                                    rel="noreferrer">
                                    Book Now
                                </a>
                            </div>
                        </Col>
                    )}
                    {authCtx.auth.isLoggedOut && (
                        <Col md={8}>
                            <div>
                                <h1 id="appointment">
                                    Signup or Login to book a meeting
                                </h1>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default Appointment;
