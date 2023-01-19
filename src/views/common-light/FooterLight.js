import './common-light.scss'
import { Col, Row } from 'reactstrap';
import footerLogo from '../../assets/Images/footer-logo.svg'
import fb from '../../assets/Icons/fb-dark.svg'
import ig from '../../assets/Icons/Ig-dark.svg'
import yt from '../../assets/Icons/yt-dark.svg'
import tw from '../../assets/Icons/tw-dark.svg'
import NewsLetterLight from './NewsLetterLight';

const FooterLight = () => {
    return (
        <footer className=' '>
            <div className="container">
                <div className="letter">
                    <NewsLetterLight />
                </div>
            </div>
            <div className='container-fluid main-footer'>
                <div className="container">
                    <Row className="d-flex justify-content-between">
                        <Col lg="2" md="4" sm="6" xs="12">
                            <img src={footerLogo} alt={'logo'} className="img-fluid mb-3" />
                            <div className='social d-flex'>
                                <img src={fb} alt={'fb'} className="img-fluid me-2" />
                                <img src={tw} alt={'tw'} className="img-fluid me-2" />
                                <img src={yt} alt={'yt'} className="img-fluid me-2" />
                                <img src={ig} alt={'ig'} className="img-fluid me-2" />

                            </div>
                        </Col>
                        <Col lg="2" md="4" sm="6" xs="12">
                            <h6>Our Destinations</h6>
                            <p>Canada</p>
                            <p>Alaksa</p>
                            <p>France</p>
                            <p>Iceland</p>
                        </Col>
                        <Col lg="2" md="4" sm="6" xs="12">
                            <h6>Our Activities</h6>
                            <p>Northern Lights</p>
                            <p>Cruising & sailing</p>
                            <p>Multi-activities</p>
                            <p>Kayaing</p>
                        </Col>
                        <Col lg="2" md="4" sm="6" xs="12">
                            <h6>Travel Blogs</h6>
                            <p>Bali Travel Guide</p>
                            <p>Sri Lanks Travel Guide</p>
                            <p>Peru Travel Guide</p>
                            <p>Bali Travel Guide</p>
                        </Col>
                        <Col lg="2" md="4" sm="6" xs="12">
                            <h6>About Us</h6>
                            <p>Our Story</p>
                            <p>Work with us</p>
                        </Col>
                        <Col lg="2" md="4" sm="6" xs="12">
                            <h6>Contact Us</h6>
                            <p>Our Story</p>
                            <p>Work with us</p>
                        </Col>

                    </Row>
                </div>
            </div>
        </footer>
    );
};

export default FooterLight;