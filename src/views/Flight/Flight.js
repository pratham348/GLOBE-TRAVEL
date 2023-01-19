import React, { Fragment, useState } from "react"
import Header from "../common/Header"
import Footer from '../common/Footer';
import "./flight.scss"
import MainImage from "../../assets/Images/mainFlight.jpeg"
import flight from "../../assets/Icons/airoplane.svg"
import bad from "../../assets/Icons/bad.svg"
import PaperPlan from "../../assets/Icons/PaperPlan.svg"
import map from "../../assets/Images/map.svg"
import card1 from "../../assets/Images/travelCard1.svg"
import card2 from "../../assets/Images/travelCard2.svg"
import card3 from "../../assets/Images/travelCard3.svg"
import card4 from "../../assets/Images/travelCard4.svg"
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap"
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Travel1 from '../../assets/Images/Travel1.svg'
import Travel2 from '../../assets/Images/Travel2.svg'
import Travel3 from '../../assets/Images/Travel3.svg'
import Travel4 from '../../assets/Images/Travel4.svg'


const TravelDetail = [
    {
        img: card1,
        title: "Melbourne",
        description: "An amazing journey",
        price: "700"
    },
    {
        img: card2,
        title: "Paris",
        description: "A Paris Adventure",
        price: "600"
    },
    {
        img: card3,
        title: "London",
        description: "London eye adventure",
        price: "350"
    },
    {
        img: card4,
        title: "Columbia",
        description: "Amazing streets",
        price: "700"
    }
]

const Flight = () => {
    const [active, setActive] = useState("1")
    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <Fragment>
            <Header />
            <div className="flight">
                <did className=" main-image">
                    <img src={MainImage} alt="MainImage" className="main-img img-fluid" />
                    <div className="text">
                        <p className="medium-text">
                            Make your travel whishlist, we’ll do the rest
                        </p>
                        <p className="small-text">Special offers to suit your plan</p>
                    </div>
                </did>
                <div className="container">
                    <Card className="filter-card">
                        <CardTitle>
                            <Nav>
                                <NavItem className="menu-border">
                                    <NavLink
                                        className="me-4 p-0"
                                        active={active === "1"}
                                        onClick={() => {
                                            toggle("1")
                                        }}
                                    >
                                        <p className="fw-600">
                                            <img src={flight} alt="flight" className="nav-image img-fluid" />
                                            &nbsp; Flights
                                        </p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="mx-4 p-0"
                                        active={active === "2"}
                                        onClick={() => {
                                            toggle("2")
                                        }}
                                    >
                                        <p className="fw-600">
                                            <img src={bad} alt="bad" className="nav-image img-fluid" />
                                            &nbsp;&nbsp;Stays
                                        </p>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardTitle>
                        <CardBody>
                            <TabContent className="py-50" activeTab={active}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col lg="3">
                                            <div class="form-group">
                                                <Input type="text" class="form-control" id="usr" required />
                                                <Label for="usr">From - To</Label>
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            <div class="form-group">
                                                <Input type="text" class="form-control" id="usr" required />
                                                <Label for="usr">Trip</Label>
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            <div class="form-group">
                                                <Input type="text" class="form-control" id="usr" required />
                                                <Label for="usr">Depart- Return</Label>
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            <div class="form-group">
                                                <Input type="text" class="form-control" id="usr" required />
                                                <Label for="usr">Passenger - Class</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex justify-content-end align-items-baseline">
                                        <Col lg="2" md="4">
                                            <a href="/">
                                                <p className="fw-500">+ Add Promo Code</p>
                                            </a>
                                        </Col>
                                        <Col lg="2" md="4">
                                            <Button className="btn">
                                                <img src={PaperPlan} alt="PaperPlan" className="img-fluid" />
                                                &nbsp; Show Filghts
                                            </Button>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col lg="4">
                                            <div class="form-group">
                                                <Input type="text" class="form-control" id="usr" required />
                                                <Label for="usr">From - To</Label>
                                            </div>
                                        </Col>

                                        <Col lg="4">
                                            <div class="form-group">
                                                <Input type="text" class="form-control" id="usr" required />
                                                <Label for="usr">Depart- Return</Label>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div class="form-group">
                                                <Input type="text" class="form-control" id="usr" required />
                                                <Label for="usr">Passenger - Class</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex justify-content-end align-items-baseline">
                                        <Col lg="8"></Col>
                                        <Col lg="2">
                                            <a href="/">
                                                <p className="fw-500">+ Add Promo Code</p>
                                            </a>
                                        </Col>
                                        <Col lg="2">
                                            <Button className="btn">
                                                <img src={PaperPlan} alt="PaperPlan" className="img-fluid" />
                                                &nbsp; Show Filghts
                                            </Button>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                    <div className="maps">
                        <Row className="mb-4">
                            <Col lg="10">
                                <h3>Let's go places together</h3>
                                <h6>
                                    Discover the latest offers and news and start planning your next trip
                                    with us.
                                </h6>
                            </Col>
                            <Col lg="2" className="d-flex flex-row justify-content-end">
                                <Button className="btn-outline">See all</Button>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={12}>
                                <img src={map} alt="map" className="img-fluid" />
                            </Col>
                        </Row>
                    </div>
                    <div className="travel-card">
                        <Row className="mb-4">
                            <Col lg="10">
                                <h3>Fall into travel</h3>
                                <h6>
                                    Going somewhere to celebrate this season? Whether you’re going home or
                                    somewhere to roam, we’ve got the travel tools to get you to your
                                    destination.
                                </h6>
                            </Col>
                            <Col lg="2" className="d-flex flex-row justify-content-end">
                                <Button className="btn-outline">See all</Button>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20
                                    },
                                    991: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    },
                                    100: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                }}
                            >
                                <Col>
                                    {TravelDetail.map((ele, key) => {
                                        return (
                                            <SwiperSlide key={key}>

                                                <Row className="card-img">
                                                    <Col xs="12">
                                                        <img src={ele.img} alt="travelImage" className="img-fluid" />
                                                    </Col>
                                                </Row>
                                                <Row className="card-text px-4">
                                                    <Col xs="12">

                                                        <Row className="px-2">
                                                            <Col xs="8">
                                                                <h4 className="tx-white">{ele.title}</h4>
                                                                <p className="tx-white description">{ele.description}</p>
                                                            </Col>
                                                            <Col xs="4">
                                                                <h4 className="tx-white">${ele.price}</h4>
                                                            </Col>
                                                        </Row>
                                                        <Row className="px-2">
                                                            <Col xs="12">
                                                                <Button>Book Flight</Button>
                                                            </Col>

                                                        </Row>
                                                    </Col>
                                                </Row>

                                            </SwiperSlide>
                                        )
                                    })}
                                </Col>
                            </Swiper>
                        </Row>
                    </div>
                    <div className="travel-data">
                        <Row className="mb-4">
                            <Col lg="10">
                                <h3>Fall into travel</h3>
                                <h6>
                                    Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
                                </h6>
                            </Col>
                            <Col lg="2" className="d-flex flex-row justify-content-end">
                                <Button className="btn-outline">See all</Button>
                            </Col>
                        </Row>
                        <Row className="mb-4 match-height">
                            <Col xs="12" lg="6" className="mb-0 mb-lg-0 mb-md-4 mb-sm-4">
                                <Card className="bg-mint-green p-3">
                                    <CardBody>

                                        <Row className="mb-4">
                                            <Col xs="10">
                                                <h1 className="fw-700">
                                                    Backpacking Sri Lanka
                                                </h1>
                                            </Col>
                                            <Col xs="2" >
                                                <Card className=" bg-neutrals align-items-center">
                                                    <p className="m-0">
                                                        From
                                                    </p>
                                                    <h4 className="fw-600">$700</h4>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="mb-5">
                                            <p>
                                                Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
                                            </p>
                                        </Row>
                                        <Row>
                                            <Button className="btn-rounded bg-neutrals">
                                                Book Flight
                                            </Button>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="12" lg="6">
                                <Row className="mb-2 mb-md-4 mb-sm-4">
                                    <Col xs="6">
                                        <img src={Travel1} alt="Travel1" className="img-fluid" />
                                    </Col>
                                    <Col xs="6">
                                        <img src={Travel2} alt="Travel2" className="img-fluid" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <img src={Travel3} alt="Travel3" className="img-fluid" />
                                    </Col>
                                    <Col xs="6">
                                        <img src={Travel4} alt="Travel4" className="img-fluid" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Flight
