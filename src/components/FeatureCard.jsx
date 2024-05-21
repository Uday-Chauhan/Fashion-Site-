import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, Container } from 'react-bootstrap';
import './FeatureCard.css'
const FeatureCard = (props) => {
  return (
    <div className="fea-body">

      <div className="feature-content">
          <div className="fea-card-info">
            <div className="Feature-card">
                <img src={props.images} alt="" />
            </div>
            <div className="info">
                <h4><b>{props.text}</b></h4>
                <span><b>Gucci</b></span><br/>
                <del>$165</del> <span>&ensp;&ensp;<b>$67</b></span> &ensp;
            </div>
          </div>
      </div>
      {/* <div className="feature-bn">
          <Container className="mt-2">
            <Button variant='light' className="custom-rounded-button">CLivk</Button>
          </Container>
      </div> */}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<FeatureCard />)
export default FeatureCard