import React from 'react'
import { Navbar, Container, Nav, Button, Form, NavDropdown } from 'react-bootstrap'
import Image from 'next/image'

function index() {
  return (
    <Navbar className='shadow mb-3' style={{ direction: "rtl", }} expand="lg">
      <Container fluid>
        <div><Image src='/assets/images/Site-Logo.png' width="50" height="50" /></div>
        <Navbar.Brand style={{ fontWeight: "bold" }} href="#">ریتون پارس پایدار</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll
          >
            <NavDropdown style={{fontWeight:"bold", borderTop:"1px solid #D6D6D6"}} title="پرونده ها" id="navbarScrollingDropdown">
              <NavDropdown.Item style={{textAlign:"right"}}  href="#action3">ارجاع به کارشناس</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item style={{textAlign:"right"}}  href="#action4">
                بازدید شده
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{textAlign:"right"}}  href="#action5">
                ارسال نشده
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{textAlign:"right"}}  href="#action5">
                آماده ارسال
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{textAlign:"right"}}  href="#action5">
                دارای نقص
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link style={{fontWeight:"bold", margin:"5px 0"}} href="#action1">ثبت پرونده بیمه</Nav.Link>
            <Nav.Link style={{fontWeight:"bold", margin:"5px 0"}} href="#action2">ثبت ساعت</Nav.Link>

            <Nav.Link style={{fontWeight:"bold"}} href="#" >
              دفتر کیهان
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default index