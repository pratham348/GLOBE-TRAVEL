import { useState } from 'react';
import landingImage from '../../assets/Images/landing-image.svg'
import { Button, Card, CardBody, CardTitle, Col, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import flight from '../../assets/Icons/airoplane.svg'
import bad from '../../assets/Icons/bad.svg'
import PaperPlan from '../../assets/Icons/PaperPlan.svg'

const FirstComponent = () => {
  const [active, setActive] = useState('1')
  console.log('active: ', active);

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <>
      <div className='first-component'>
        <div className="bg-main-image">
          <img src={landingImage} alt="landingImage" className='' />
          <div className="text">
            <p className="medium-text">Helping Others</p>
            <p className="big-text">Live & Travel</p>
            <p className="small-text">Special offers to suit your plan</p>
          </div>
        </div>
        <div className="container">
        <Card className='filter-card' >
        <CardTitle>
          <Nav >

            <NavItem className='menu-border'>
              <NavLink
              className='me-4 p-0'
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                <p className='fw-600'><img src={flight} alt="flight" className='nav-image img-fluid' />&nbsp; Flights</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              className='mx-4 p-0'
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                <p className='fw-600'><img src={bad} alt="bad" className='nav-image img-fluid' />&nbsp;&nbsp;Stays</p>
              </NavLink>
            </NavItem>
          </Nav>
        </CardTitle>
        <CardBody>
          <TabContent className='py-50' activeTab={active}>
            <TabPane tabId='1'>
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
              <Row className='d-flex justify-content-end align-items-baseline'>
                <Col lg="2" md="4">
                <a href='/'><p className='fw-500'>+ Add Promo Code</p></a>
                </Col>
                <Col lg="2"  md="4">
                  <Button className='btn'>
                  <img src={PaperPlan} alt="PaperPlan" className='img-fluid' />&nbsp;
                    Show Filghts</Button>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='2'>
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
              <Row className='d-flex justify-content-end align-items-baseline'>
                <Col lg="8"></Col>
                <Col lg="2">
                  <a href='/'><p className='fw-500'>+ Add Promo Code</p></a>
                </Col>
                <Col lg="2">
                  <Button className='btn'>
                  <img src={PaperPlan} alt="PaperPlan" className='img-fluid' />&nbsp;
                    Show Filghts</Button>
                </Col>
              </Row>
            </TabPane>

          </TabContent>
        </CardBody>
      </Card>
      </div>
      </div>

    </>
  );
};

export default FirstComponent;