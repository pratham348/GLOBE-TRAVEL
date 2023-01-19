import React from 'react';
import trip1 from '../../assets/Images/trip1.svg'
import trip2 from '../../assets/Images/trip2.svg'
import trip3 from '../../assets/Images/trip3.svg'
import trip4 from '../../assets/Images/trip4.svg'
import trip5 from '../../assets/Images/trip5.svg'
import trip6 from '../../assets/Images/trip6.svg'
import trip7 from '../../assets/Images/trip7.svg'
import trip8 from '../../assets/Images/trip8.svg'
import trip9 from '../../assets/Images/trip9.svg'
import { Button, Card, Col, Row } from 'reactstrap';
const tripDetails = [
    {
        image: trip1,
        title: "Istanbul, Turkey",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip2,
        title: "Sydney, Australia",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip3,
        title: "Baku, Azerbaijan",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip4,
        title: "Malé, Maldives",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip5,
        title: "Paris, France",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip6,
        title: "New York, US",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip7,
        title: "London, UK",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip8,
        title: "Tokyo, Japan",
        types: ["Flights", "Hotels", "Resorts"]
    },
    {
        image: trip9,
        title: "Dubai, UAE",
        types: ["Flights", "Hotels", "Resorts"]
    },
]


const SecondComponent = () => {
    return (
        <div className='container second-component'>
            <Row className='d-flex justify-content-between'>
                <Col lg="8" md="8" xs="12">
                    <h3 className='f-mont fw-600'>Plan your perfect trip</h3>
                    <p className='f-mont opacity-75'>Search Flights & Places Hire to our most popular destinations</p>
                </Col>

                <Col lg="4" md="4" xs="12" >
                    <Row className=' justify-content-lg-end'>
                        <Col lg="5" md="8" xs='10'><Button className='btn-outline f-mont'>See more places</Button></Col>
                    </Row>
                </Col>
            </Row>
            <Row className='trip'>
                {tripDetails.map((ele, key) => {
                    return (
                        <Col lg='4' md="6" sm="12" key={key} className="mb-3">
                            <Card>
                                <Row className='p-3 p-md-2'>
                                    <Col xs="4">
                                        <img src={ele?.image} alt="trip1" className=' img-fluid' />
                                    </Col>
                                    <Col xs='8' className='p-0'>
                                        <p className='fw-600 f-mont m-0'>{ele?.title}</p>
                                        <ul className='type d-flex f-mont m-0'>{ele?.types?.map((e, i)=>{return(<li key={i}>{e}</li>)})}</ul>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
        </div>
    );
};

export default SecondComponent;