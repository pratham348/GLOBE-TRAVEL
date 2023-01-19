import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import hotels from '../../assets/Images/hotels.svg'
import flights from '../../assets/Images/flights.svg'
import PaperPlan from '../../assets/Icons/PaperPlan.svg'


const ThirdComponent = () => {
    return (
        <div className='third-component container mt-5'>
            <Row>
                <Col lg="6" className='image-box '>
                    <img src={flights} alt="flights" className=' img-fluid main-image' />
                    <div className="text-box ">
                        <h1 className='tx-white mb-2'>Flights</h1>
                        <p className='tx-white fw-400 opacity-75'>Search Flights & Places Hire to our most popular destinations</p>
                        <Button className='btn-rounded-light'>
                            <img src={PaperPlan} alt="PaperPlan" className='img-fluid' />&nbsp;
                            Show Flights
                        </Button>
                    </div>
                </Col>
                <Col lg="6" className='image-box'>
                    <img src={hotels} alt="hotels" className=' img-fluid main-image' />
                    <div className="text-box ">
                        <h1 className='tx-white mb-2'>Hotels</h1>
                        <p className='tx-white fw-400 opacity-75'>Search hotels & Places Hire to our most popular destinations</p>
                        <Button className='btn-rounded-light'>
                            <img src={PaperPlan} alt="PaperPlan" className='img-fluid' />&nbsp;
                            Show Hotels
                        </Button>
                    </div>
                </Col>

            </Row>

        </div>
    );
};

export default ThirdComponent;