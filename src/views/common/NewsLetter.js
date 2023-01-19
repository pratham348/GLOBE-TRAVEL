import React from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import newsLetter from '../../assets/Images/newsletter.svg'
const NewsLetter = () => {
    return (
            <Row className='news-letter d-flex justify-content-between'>
                <Col lg="6" md="12" className='subscribe d-flex flex-column justify-content-between'>
                    <h1 className="big-text">Subscribe</h1>
                    <h1 className="big-text mb-2">Newsletter</h1>

                    <h5 className='mb-1'>The Travel</h5>
                    <p className='mb-1'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                    <form className='subscribe-form d-flex flex-row justify-content-between'>
                        <Input type='text' className='form-control w-75' placeholder='Your email address' />
                        <Button className='submit' type='submit'>Subscribe</Button>
                    </form>
                </Col>
                <Col lg="2"  md="12"></Col>
                <Col lg="4" className='d-flex justify-content-end justify-content-md-center'>
                    <img src={newsLetter} alt="newsLetter" className='img-fluid' />
                </Col>
            </Row>
    );
};

export default NewsLetter;