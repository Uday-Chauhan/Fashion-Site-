import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, Container } from 'react-bootstrap';
import './ProductCard.css'
const ProductCard = (props) => {
  return (
    <div className="Procard">
        <img src={props.img} alt="" />
        <Container className="mt-2">
          <Button variant="dark" className="custom-rounded-button" >
            {props.buttonText || 'Click Me'}
          </Button>
        </Container>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<ProductCard />)
export default ProductCard