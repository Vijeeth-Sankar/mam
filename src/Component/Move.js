import React, { Component } from 'react'
import './Css/Artical.css';

import { Container, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";

// import required modules
import { Pagination,EffectCoverflow,} from "swiper";

export default class Move extends Component {
  render() {
    return (
      <div id="Books">
        <Container  fluid='true' id='Book'>
        
        <Row id='work-title'>
                Book
        </Row> 
        <Container fluid='true'>
                <Swiper
                id="sde"
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
                style={{ background: 'transparent' }}
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
      </div>
    )
  }
}
