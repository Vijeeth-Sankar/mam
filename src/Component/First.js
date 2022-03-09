import React from 'react';
import { Col, Container, Nav, Navbar, Offcanvas, Row,Card } from 'react-bootstrap';
import './Css/First.css';
import cirlcle from './asset/circle.png';
import swipe from "./asset/swiper.svg";
import java from "./asset/java.svg";
import python from "./asset/python.svg";
import cpp from "./asset/cpp.svg";
import html from "./asset/html.svg";
import mess from "./asset/mess.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";

// import required modules
import { Pagination,EffectCards,EffectCoverflow, EffectCreative } from "swiper";
import Contactus from './email';
import { Book } from './Book';

export const First = () => {
  return (
      <>
    <div>
    <Container fluid='true' id="back">
        <Navbar variant="light" expand={false}>
            <Container fluid>
                <Navbar.Brand id='navico' href="#">   </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link id='navcol' href="#main">Home</Nav.Link>
                    <Nav.Link id='navcol' href="#second">Qualification</Nav.Link>
                    <Nav.Link id='navcol' href="#work">work</Nav.Link>
                    <Nav.Link id='navcol' href="#certified">Ceritified Skill</Nav.Link>
                    <Nav.Link id='navcol' href="#Book">Books</Nav.Link>
                    <Nav.Link id='navcol' href="#awards">Awards</Nav.Link>
                    <Nav.Link id='navcol' href="#let">About</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        <Container fluid="true">
        <Row id='main'>
            <Col> 
                <Container id="box" className='d-flex justify-content-center m-3'>
                <Card id="box-line" className="p-4">
                <Card.Body>
                    <Card.Title id="sug">I'm Sughasiny</Card.Title>                   
                    <Card.Text id="sugp">
                    To work in a position, that will provide me a good platform where I deploy my creative & administration skillsand knowledgetowardsmy personalenhancement andalsoforthebetter prospect of theorganization.
                    </Card.Text>
                    <Card.Link href="#" id="se">let's see</Card.Link>
                </Card.Body>
                </Card>
                </Container>
            </Col>
            <Col id="mess">
                <img src={mess} alt="" />
            </Col>
        </Row>
        </Container>
        <Container id='second' fluid='true'>
            <Row id='quali'>
                <p>Qualification</p>
            </Row>
            <Row id='here'>
                Here We Can See
                <p>My Qualification</p>
            </Row>
            <Row>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide id='swiper-back'>
                    <Card id='card' style={{ width: '18rem' }}>
                        <p>M.Phil</p>
                        <p>Computer Science</p>
                        </Card>
                </SwiperSlide>
                <SwiperSlide id='swiper-backone'>
                    <Card id='pho' style={{ width: '18rem' }}>
                        <img src={cirlcle} alt="" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide id='swiper-backtwo'>
                    <Card id='card' style={{ width: '18rem' }}>
                        <p>M.Phil</p>
                        <p>Computer Science</p>
                        </Card>
                </SwiperSlide>
                <SwiperSlide id='swiper-backthree'>
                    <Card id='pho' style={{ width: '18rem' }}>
                        <img src={cirlcle} alt="" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide id='swiper-backfour'>
                    <Card id='card' style={{ width: '18rem' }}>
                        <p>M.Phil</p>
                        <p>Computer Science</p>
                        </Card>
                </SwiperSlide>
                <SwiperSlide id='swiper-backfive'>
                    <Card id='pho' style={{ width: '18rem' }}>
                        <img src={cirlcle} alt="" />
                    </Card>
                </SwiperSlide>
            </Swiper>
            </Row>
        </Container>

        <Container fluid='true' id='work'>
            <Row id='work-title'>
                Work Experience
            </Row> 
            <Row id="wor">
                
            <Col id='exper'>
            <div id='lin'>
                </div>
                <Row id='teacher'>
                    <Col id='deta'>
                    <h4>2003 to 2006</h4>
                    <div id='ellis'></div>
                    <h2>Teacher</h2>
                    <Row style={{ width: '18rem' }} id='school'>
                            <p>
                            Worked as Computer Science Teacher Vignesh Sri Renga Matriculation Higher Secondary 
                            School , Srirangam. From 2003 to 2006 (3 yrs).

                            </p>
                    </Row>
                    </Col>
                    
                </Row>
                <Row id='teacher'>
                <Col id='deta1'>
                    <h4>Professor & Research Department</h4>
                    <div id='ellis'></div>
                    <h5>2018 to Present</h5>
                    <Row style={{ width: '18rem' }} id='school1'>
                        <p>
                        Working as an Assistant Professor, PG & Research Department of Computer Science, Srimad Andavan Arts & Science College ,Tiruchirappalli, from June 2007 
                        to Aug 2017 and from June 2018 to Till date (13 yrs 4 months) .

                        </p>
                    </Row>
                    </Col>
                </Row>
                <Row id='teacher'>
                <div id="fgf">
                <Col id='deta'>
                    <h4>2013 to 2016</h4>
                    <div id='ellis'></div>
                    <h2>Administere</h2>
                    <Row style={{ width: '18rem' }} id='school'>
                            <p>
                            Administered the Department and Coordinated activities of the department from 2016 to March 2021 andwasadelegatedhead of Business Process Outsourcing from 2013 to 2016.
                            </p>
                    </Row>
                    </Col>
                </div>
                </Row>
                <Row id='teacher'>
                    <div id='lef2'>
                        <Col id='deta1'>
                        <h4>Internal Quality Assurance Cell</h4>
                        <div id='ellis'></div>
                        <h5> 2015 to 2017</h5>
                        <Row style={{ width: '18rem' }} id='school1'>
                            <p>
                            Member of IQAC and worked as an internal auditor and prepared Annual Quality Assurance Report from 2015 to 2017.
                            </p>
                        </Row>
                        </Col>
                     </div>
                </Row>
            </Col>
            </Row>
        </Container>
        <Container fluid='true' id='certified'>
            <Row id='work-title'>
                Ceritified Skill
            </Row> 
            <Container xxl='true'>
            <Swiper
                id='cards2'
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                
                className="mySwiper"
            >
                <SwiperSlide id='cards3'>Slide 1</SwiperSlide>
                <SwiperSlide id='cards3'>Slide 2</SwiperSlide>
                <SwiperSlide id='cards3'>Slide 3</SwiperSlide>
                <SwiperSlide id='cards3'>Slide 4</SwiperSlide>
                <SwiperSlide id='cards3'>Slide 5</SwiperSlide>
                <SwiperSlide id='cards3'>Slide 6</SwiperSlide>
            </Swiper>
        </Container>
    </Container>
    <Book/>
    <Container fluid='true' id="awards">
        <Row id='work-title'>
            Awards
        </Row>
        <Row id='swipe'> 
            swipe left to see Awards<img src={swipe} alt="" />
        </Row>
        <Container>
        <Swiper
            id='wiper'
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
        >
            <SwiperSlide id='card5'>Slide 1</SwiperSlide>
            <SwiperSlide id='card5'>Slide 2</SwiperSlide>
            <SwiperSlide id='card5'>Slide 3</SwiperSlide>
            <SwiperSlide id='card5'>Slide 4</SwiperSlide>
            <SwiperSlide id='card5'>Slide 5</SwiperSlide>
            <SwiperSlide id='card5'>Slide 6</SwiperSlide>
            <SwiperSlide id='card5'>Slide 7</SwiperSlide>
            <SwiperSlide id='card5'>Slide 8</SwiperSlide>
            <SwiperSlide id='card5'>Slide 9</SwiperSlide>
        </Swiper>
        </Container>
    </Container>
    <Container fluid='true' id='let'>
        <Row id='work-title'>
            Let's Connect
        </Row>
        <Row id='roundimg'>
            <Col>
                <Card id='ring'>
                    <img src={java} alt="" />
                    <img src={python} alt="" />
                    <img src={cpp} alt="" />
                    <img src={html} alt="" />
                    <Card id='ring-box'/>
                </Card>
            </Col>
            <Col>
                <Row id='get'>
                    Get Touch<br/>with me
                    <Contactus />
                </Row>
            </Col>
        </Row>
        <Row fluid='true' id='links'>
            <Col md={4}><p>©® 2022 Sughasiny </p></Col>
            <Col md={{ span: 4, offset: 4 }}>
                <a href="#">Email</a>
                <a href="#">Linkedin</a>
            </Col>
        </Row>
    </Container>
    </Container>
    </div>
    </>
  )
}


// <h2>2003 to 2006</h2>
//                     <h1>Teacher</h1>
//                     <div id='ellis'></div>
//                     <Card id='scholl'>
//                     Worked as Computer Science Teacher Vignesh Sri Renga Matriculation Higher Secondary 
//                     School , Srirangam. From 2003 to 2006 (3 yrs).
//                     </Card>



