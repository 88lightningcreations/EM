"use client"

import { useEffect, useRef, useState } from "react"
import { Container, Accordion, Row, Col, Card, Button } from "react-bootstrap"
import { faqData } from "@/data/faq-data"
import { serviceData } from "@/data/service-data"
import { locationData } from "@/data/location-data"
import SEOBackgroundImage from "@/components/SEOBackgroundImage"
import MainNavbar from "@/components/MainNavbar"

// Define the theme colors as variables for consistent use
const themeColors = {
  primaryRed: "#c50303",
  darkRed:    "#b0090a",
  lightRed:   "#ce6869",
  accentRed:  "#c73a3b",
  lightBlue:  "#a6bad6",
  mediumBlue: "#6d89bc",
  blue:       "#3a5ea3",
  darkBlue:   "#082d7a",
}

// Navbar height constant for consistent spacing
const NAVBAR_HEIGHT = "70px"

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [showAllFaqs, setShowAllFaqs] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Simple loading state
  if (!isMounted) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" style={{ color: themeColors.primaryRed }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <main>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="visually-hidden-focusable"
        style={{
          position: "absolute",
          padding: "0.5rem",
          backgroundColor: themeColors.primaryRed,
          color: "white",
          zIndex: 1050,
        }}
      >
        Skip to main content
      </a>

      {/* Fixed navbar with original styling */}
      <MainNavbar />

      {/* Main content container with padding-top to account for fixed navbar */}
      <div
        ref={scrollContainerRef}
        style={{
          height: "100vh",
          overflowY: "auto",
          paddingTop: NAVBAR_HEIGHT, // Add padding equal to navbar height
        }}
      >
        {/* Hero Section with optimized background image */}
        <SEOBackgroundImage
          src="/images/BudaTexasAirConditioningService.png"
          alt="HVAC technician servicing an air conditioning unit"
          height="calc(100vh - 70px)" // Subtract navbar height from 100vh
          priority={true}
          id="main-content"
        >
          <div className="d-flex align-items-center justify-content-center w-100">
            <div
              className="text-center p-4 rounded"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(5px)",
              }}
            >
              <h1 className="text-white display-3 fw-bold mb-3">Emergency A/C</h1>
              <p className="text-white">With such great care it can only be E+M Emergency Air!</p>
            </div>
          </div>
        </SEOBackgroundImage>

        {/* FAQ Section */}
        <section className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-4" style={{ color: themeColors.primaryRed }}>
              Frequently Asked Questions
            </h2>
            <Accordion defaultActiveKey="0">
              {(showAllFaqs ? faqData : faqData.slice(0, 5)).map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            {faqData.length > 5 && !showAllFaqs && (
              <div className="text-center mt-4">
                <Button
                  variant="danger"
                  style={{ backgroundColor: themeColors.primaryRed }}
                  onClick={() => setShowAllFaqs(true)}
                >
                  View More Questions
                </Button>
              </div>
            )}
          </Container>
        </section>

        {/* Info Section */}
        <section className="py-5">
          <Container>
            <Row className="mb-5">
              <Col md={4} className="mb-4 mb-md-0">
                <Card className="h-100 border-primary h-100">
                  <Card.Header style={{ backgroundColor: themeColors.blue, color: "white", fontWeight: "bold" }}>
                    Address
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      464 Commercial Dr Ste A<br />
                      Buda, TX 78610
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4 mb-md-0">
                <Card className="h-100 border-primary">
                  <Card.Header style={{ backgroundColor: themeColors.blue, color: "white", fontWeight: "bold" }}>
                    Phone
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <a href="tel:5122415837" style={{ color: themeColors.primaryRed }}>
                        (512) 241-5837
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 border-primary">
                  <Card.Header style={{ backgroundColor: themeColors.blue, color: "white", fontWeight: "bold" }}>
                    Licenses
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      #TACLB108628E
                      <br />
                      #TACLA104078E
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={4} className="mb-4 mb-md-0">
                <h2 style={{ color: themeColors.primaryRed, marginBottom: "1.5rem" }}>Air Conditioning</h2>
                <ul className="list-unstyled">
                  {serviceData.airConditioning.map((service, index) => (
                    <li key={index} className="mb-2">
                      {service}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={4} className="mb-4 mb-md-0">
                <h2 style={{ color: themeColors.primaryRed, marginBottom: "1.5rem" }}>Heating</h2>
                <ul className="list-unstyled">
                  {serviceData.heating.map((service, index) => (
                    <li key={index} className="mb-2">
                      {service}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={4}>
                <h2 style={{ color: themeColors.primaryRed, marginBottom: "1.5rem" }}>Service Areas</h2>
                <ul className="list-unstyled">
                  {locationData.map((location, index) => (
                    <li key={index} className="mb-2">
                      {location}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer */}
        <footer className="py-4" style={{ backgroundColor: themeColors.darkBlue, color: "white" }}>
          <Container>
            <Row>
              <Col md={12} className="text-center">
                <div className="mb-3">
                  <a
                    href="/privacy-policy"
                    className="text-decoration-none mx-2"
                    style={{ color: themeColors.lightBlue }}
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-and-conditions"
                    className="text-decoration-none mx-2"
                    style={{ color: themeColors.lightBlue }}
                    target="_blank"
                  >
                    Terms and Conditions
                  </a>
                  <a
                    href="/legal-disclaimer"
                    className="text-decoration-none mx-2"
                    style={{ color: themeColors.lightBlue }}
                    target="_blank"
                  >
                    Legal Disclaimer
                  </a>
                  <a
                    href="/accessibility-statement"
                    className="text-decoration-none mx-2"
                    style={{ color: themeColors.lightBlue }}
                    target="_blank"
                  >
                    Accessibility Statement
                  </a>
                </div>
                <p className="mt-3">© {new Date().getFullYear()} E+M Emergency Air Conditioning LLC. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </main>
  )
}
