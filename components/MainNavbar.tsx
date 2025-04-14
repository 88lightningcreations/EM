"use client"

import { Navbar, Container, Nav } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"

// Define the theme colors as variables for consistent use
const themeColors = {
  primaryRed: "#c50303",
  darkRed: "#b0090a",
  lightRed: "#ce6869",
  accentRed: "#c73a3b",
  lightBlue: "#a6bad6",
  mediumBlue: "#6d89bc",
  blue: "#3a5ea3",
  darkBlue: "#082d7a",
}

// Navbar height constant for consistent spacing
const NAVBAR_HEIGHT = "70px"

export default function MainNavbar() {
  return (
    <Navbar fixed="top" expand="lg" bg="white" className="border-bottom shadow-sm" style={{ height: NAVBAR_HEIGHT }}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          {/* Logo sized to fit within navbar height with padding */}
          <div style={{ height: "50px", display: "flex", alignItems: "center" }}>
            <Image
              src="/images/BudaTexasAirConditioningServiceLogo.png"
              alt="Emergency Air Conditioning, LLC Logo"
              width={50}
              height={50}
              priority={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
{/*  
            <Nav.Link as={Link} href="/blog">
              Blog
            </Nav.Link>
*/}
          </Nav>
        </Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link
            href="mailto:Info@EmergencyAC.org"
            className="me-3"
            style={{
              color: themeColors.blue,
              fontWeight: "bold",
            }}
          >
            Info@EmergencyAC.org
          </Nav.Link>
          <Nav.Link
            href="tel:5122415837"
            style={{
              color: themeColors.primaryRed,
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            (512) 241-5837
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
