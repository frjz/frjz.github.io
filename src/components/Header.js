import React from 'react'
import { Button, Container, Image, Nav } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    
    <Nav className='position-relative navbar flex-wrap py-4 px-4 px-md-10 navbar-expand-lg navbar-light bg-white shadow-lg'>
        <Container fluid>
            <Link className='d-md-none navbar-brand' to='/'>
                
                <Image rounded src={require("../img/orig.webp")} width={48} height={48} className='d-inline-block align-text-top me-2'/>
            
            </Link>
            <Button className="d-lg-none ms-auto btn btn-light bg-light p-0 d-flex justify-content-center align-items-center rounded-circle" style={{width:'50px', height:'50px'}} type='button' data-bs-toggle='collapse' data-bs-target="#navbar_LC_logocenter" aria-controls="navbar_LC_logocenter" aria-expanded="false" aria-label="Toggle navigation">
            <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" style={{color:'black'}}></path>
            </svg>
            </Button>
            <div className='d-none d-md-block position-absolute top-50 start-50 translate-middle'>
                <a class="navbar-brand" href="/">
                    <Image src={require("../img/orig.webp")} width={48} height={48} className="d-inline-block align-text-top me-2 img-fluid" rounded/>
                </a>
            </div>
            <div className='collapse navbar-collapse' id="navbar_LC_logocenter">
                <div className='live-shortcode me-auto text-end' lc-helper='shortcode'>
                    <ul id='menu-menu-1' className='navbar-nav'>
                        <li className='menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739'>
                            <a href="/autos" className="nav-link ">Автомобили</a>
                        </li>
                        <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738'>
                            <a href="/news" className="nav-link ">Новости</a>
                        </li>
                        <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738'>
                            <a href="/ofus" className="nav-link ">О нас</a>
                        </li>
                        <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738'>
                            <a href="/login" className="nav-link ">Личный кабинет</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </Container>
    </Nav>
  )
}

export default Header