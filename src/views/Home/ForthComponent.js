import { useState } from 'react';
import google from '../../assets/Icons/google.svg'
import slider1 from '../../assets/Images/slider1.svg'
import slider2 from '../../assets/Images/slider2.svg'
import slider3 from '../../assets/Images/slider3.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import ReactStars from "react-rating-stars-component";

const sliderData = [
    {
        title: `“A real sense of community, nurtured”`,
        description: `Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.`,
        rating: 5,
        author: "Olga",
        comment: "Weave Studios – Kai Tak",
        company: "Google",
        companyLogo: google,
        image: slider1,
    },
    {
        title: `“The facilities are superb. Clean, slick, bright.”`,
        description: `“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle`,
        rating: 5,
        author: "Thomas",
        comment: "Weave Studios – Olympic",
        company: "Google",
        companyLogo: google,
        image: slider2,
    },
    {
        title: `“A real sense of community, nurtured”`,
        description: `Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.`,
        rating: 5,
        author: "Eliot",
        comment: "Weave Studios – Kai Tak",
        company: "Google",
        companyLogo: google,
        image: slider3,
    },
    {
        title: `“A real sense of community, nurtured”`,
        description: `Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.`,
        rating: 5,
        author: "Olga",
        comment: "Weave Studios – Kai Tak",
        company: "Google",
        companyLogo: google,
        image: slider1,
    },

]
const ForthComponent = () => {
    const [rating, setRating] = useState(5);
    const ratingChanged = (r) => {
        setRating(r);
    };

    return (
        <div className='container forth-component mt-5'>
            <Row>
                <Col lg="8">
                    <h1 className='f-mont fw-600'>Reviews</h1>
                    <p className='f-mont fw-400'>What people says about Golobe facilities</p>
                </Col>
                <Col lg="4" className='mb-md-3 mb-sm-3'>
                    <Row className=' justify-content-lg-end '>
                        <Col lg="4" md="6" xs='10'>
                            <Button className='btn-rounded-light'>See All</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        100: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }}
                >

                    <Col xs="4" className='match-height'>
                        {sliderData.map((ele, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <Card>
                                        <CardBody>
                                            <h4 className='fw-700 mb-4'>{ele.title}</h4>
                                            <p className='description opacity-50'>{ele.description}</p>
                                            <p className='fw-700'>view more</p>
                                            <p><ReactStars
                                                key={`rating_${rating}`}
                                                value={Math.max(0, rating)}
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            /></p>
                                            <p className='fw-700 m-0'>{ele.author}</p>
                                            <span className=' opacity-50'>{ele.comment}</span>
                                            <p className='mt-2'> <img src={ele.companyLogo} alt="google" className=' img-fluid me-2' /><span className=' opacity-50'>{ele.company}</span></p>
                                            <img src={ele.image} alt="slider1" className='card-img img-fluid' />
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            )
                        })}
                    </Col>

                </Swiper>
            </Row>



        </div>
    );
};

export default ForthComponent;