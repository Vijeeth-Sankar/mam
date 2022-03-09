import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Css/First.css'



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Artical from './Artical';

import Move from './Move';

export const Book = () => {
  return (

    <BrowserRouter>
    <div>
        
        <Container  fluid='true' id='Book'>
        <Navbar bg="transparent"  expand="lg">
        <Container>
            <Nav className="mx-auto" id="sye">
                <Nav.Link id="sy" as={Link} to="/">Book</Nav.Link>
                <Nav.Link id="sy" as={Link} to="/artical">Artical</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        
    </Container>
    <div>
        <Routes>
            <Route path="/artical" element={<Artical/>}/>
            <Route path="/" element={<Move/>}/>
        </Routes>
    </div>


    </div>
    </BrowserRouter>
  )
}
