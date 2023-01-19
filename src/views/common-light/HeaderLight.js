import { useState } from 'react';
import { Button, Col, Row, } from 'reactstrap';
import './common-light.scss'
import airplane from '../../assets/Icons/airplane-light.svg'
import bad from '../../assets/Icons/bed-light.svg'
import logo from '../../assets/Images/logo-light.svg'
import { NavLink } from 'react-router-dom';
import user from '../../assets/Icons/Ellipse 1.svg'
import heart from "../../assets/Icons/heart.svg"
import menu from "../../assets/Icons/menu.svg"

const HeaderLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const toggle = () => setIsOpen(!isOpen);

  const login = (e) => {
    e.preventDefault()
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <header>
      <nav >
        <Row className='d-flex justify-content-between align-items-center'>
          <Col lg="4" md="4" className="left-menu d-flex justify-content-start align-items-center">
            <NavLink href="/"><p>
              <img src={airplane} alt="airplane" className="icon img-fluid" />
              Find Flight
            </p>
            </NavLink>
            <NavLink href="/"><p>
              <img src={bad} alt="bad" className="icon img-fluid" />

              Find Stays
            </p>
            </NavLink>
          </Col>
          <Col lg="4" md="4" sm="10" xs="9" className='d-flex justify-content-lg-center justify-content-sm-start'>
            <img src={logo} alt="logo" className="logo-img img-fluid" />
          </Col>


          <Col lg="4" md="4" className="login-menu d-flex justify-content-end">
            {!isLoggedIn ?
              <div className='d-flex justify-content-between align-items-center'>
                <NavLink href="/" onClick={(e) => login(e)}><p>Login</p></NavLink>
                <NavLink href="/"><Button className='btn-signup'>Sign up</Button></NavLink>

              </div>
              : <div className='d-flex justify-content-between align-items-center'>
                <NavLink href="/"> <p className='fav'><img src={heart} alt="heart" className="img-fluid" />Favourites  |</p></NavLink>
                <NavLink href="/" ><p onClick={(e) => login(e)}><img src={user} alt="user" className="img-fluid" />John D.</p></NavLink>
              </div>}
          </Col>
          <Col sm="2" xs="3" className='menu-icon'>
            <Button onClick={toggle} className="btn-rounded">
              <img src={menu} alt="menu" className="img-fluid menu-icon" />
            </Button>
          </Col>
        </Row>

        {isOpen && <Row className={'menu d-flex-column justify-content-center gap-3 text-center'}>
          <NavLink href="/"><p>
            <img src={airplane} alt="airplane" className="icon img-fluid" />
            Find Flight
          </p>
          </NavLink>
          <NavLink href="/"><p>
            <img src={bad} alt="bad" className="icon img-fluid" />
            Find Stays
          </p>
          </NavLink>
          <NavLink href="/" onClick={(e) => login(e)}><p>Login</p></NavLink>
          <NavLink href="/"><Button className='btn-signup'>Sign up</Button></NavLink>
        </Row>}
      </nav>
      {/* <Button className='btn'>simple</Button>&nbsp;
      <Button className='btn-rounded'>rounded</Button> &nbsp;
      <Button className='btn-rounded-light'>rounded-light</Button> &nbsp;
      <Button className='btn-square'>squre</Button>&nbsp;
      <Button className='btn-outline'>outline</Button>&nbsp;
      <Button className='btn' disabled>disable</Button>&nbsp;
 */}


    </header>
  );
};

export default HeaderLight;