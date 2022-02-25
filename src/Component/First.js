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
import reat from "./asset/rect.png";
import line from "./asset/Line.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

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
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
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
                Work Experence
            </Row>
            <Row xxl='true' id='experence'>
            <Col id='experence-line'>
                <img src={line} alt="" />
            </Col>
            </Row>
        </Container>
        </Container>
    </div>
    </>
  )
}



