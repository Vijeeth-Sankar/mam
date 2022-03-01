import React from 'react';
import { Col, Container, Nav, Navbar, Offcanvas, Row,Card } from 'react-bootstrap';
import './Css/First.css'
import Triangle from './asset/triangle.png';
import cirlcle from './asset/circle.png'
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import Sphere from "./Animated";
import cir from "./asset/circlre.png";
import tri from "./asset/tri.png";
import swipe from "./asset/swiper.svg";
import reat from "./asset/rect.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";

// import required modules
import { Pagination,EffectCards,EffectCoverflow, EffectCreative } from "swiper";

export const First = () => {
  return (
      <>
    <div>
    <Container fluid='true' id='back'>
        <Navbar variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">   </Navbar.Brand>
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
                    <Nav.Link href="#main">Home</Nav.Link>
                    <Nav.Link href="#second">Qualification</Nav.Link>
                    <Nav.Link href="#work">work</Nav.Link>
                    <Nav.Link href="#second">Link</Nav.Link>
                    <Nav.Link href="#second">Link</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        <Container>
        <Row id='main'>
            <Container id='element'>
                <img id='circ' src={cir} alt="" />
                <img id='tri' src={tri} alt="" />
                <img id='rect' src={reat} alt="" />
            </Container>
            <Col id='one'>
                <Row id='Box'>
                    <img src={cirlcle} alt="" />
                    <p>I'm Sughasiny</p>
                    <p>Let's see my talent</p>
                </Row>
                <Row id='in-two'>
                    <img id='img' src={Triangle} alt="" />
                    <p>Get <br/>Touch in <br/>with me</p>
                </Row>
            </Col>
            <Col id='two'>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1}/>
                    <directionalLight position={[7,5,1]} intensity ={1}/>
                    <Sphere/>
                </Canvas>
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
            <Container>
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
    <Container  fluid='true' id='Book'>
        <Row id='work-title'>
                Book
        </Row> 
        <Container fluid='true'>
                <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                    <SwiperSlide id="card4">PALP-Virtual Machine Migration in Green Cloud Computing</SwiperSlide>
                    <SwiperSlide id="card4">“E2SMT: Energy Efficient Security Management Technique in Mobile Ad Hoc Network</SwiperSlide>
                    <SwiperSlide id="card4">Application Of Machine Learning Techniques In Intrusion Detection System- A Literature Review</SwiperSlide>
                    <SwiperSlide id="card4">“AKCSS: Asymmetric Key Cryptography based on Secret Sharing in Mobile Adhoc Network</SwiperSlide>
                    <SwiperSlide id="card4">Intrusion Detection System Using Artificial Intelligence Techniques – A Literature Survey</SwiperSlide>
                    <SwiperSlide id="card4">Energy Efficient Game Based Node Clustering Algorithm for MANET</SwiperSlide>
                    <SwiperSlide id="card4">“Securing Patient Data Access using Segmented Key Management Approach</SwiperSlide>
            </Swiper>
        </Container>
    </Container>
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



