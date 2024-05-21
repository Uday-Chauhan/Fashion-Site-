import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, Container } from 'react-bootstrap';
import './Subscribe.css'
const Subscribe = () => {
  return (
    <div className="subscribe-newsletter">
        <div className="newsletter-content">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            SIGN UP NOW & GET 75% OFF
            <Container className="mt-0">
                <Button variant="dark" className="custom-rounded-button">SIGN UP NOW</Button>
            </Container>
        </div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Subscribe />)
export default Subscribe