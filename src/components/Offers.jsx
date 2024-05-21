import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, Container } from 'react-bootstrap';
import offerek from '../assets/images/offers1img.png';
import offerdo from '../assets/images/offers2img.png';

import './Offers.css';

function Offers () {
  return (
    <div className='body1'>
      <div className="bar">
        <li><b>All</b></li>
        <li><b>spring-summer</b></li>
        <li><b>sweatshirt</b></li>
        <li><b>sneakers</b></li>
        <li><b>gadgets</b></li>
        <li><b>outdoor</b></li>
      </div>
      <div className="offers">
        <div className="fstdiv">
          <div className='offer1'>
            <img src={offerek} alt="" />
            {/* <b>BUY 2 GET <br />UP 50% OFF</b> */}
          </div>
          <div className='offer2'>
            <img src={offerdo} alt="" />
          </div>
        </div>
        <div className="snddiv">
          <div className="offer3">
            <div className="heading">
              Winter Jacket
            </div>
            <div className="text">
              <b>VINTAGE &nbsp;&nbsp;LOOK <br />FOR WOMEN</b>
            </div>
            <div className="bttn">
              <Container className="mt-2">
                <Button variant="dark" className="custom-rounded-button">Shop Now</Button>
              </Container>
            </div>
          </div>
        </div>
        <div className="trddiv">
          <div className="offer4">
            <div className="offer4content">
              <div className="heading2">
              Winter Jacket
            </div>
            <div className="text2">
              <b>FASHION<br />FOR MEN</b>
            </div>
            <div className="bttn2">
              <Container className="mt-2">
                <Button variant="dark" className="custom-rounded-button">Shop Now</Button>
              </Container>
            </div>
            </div>
          </div>
          <div className="offer5">
            <div className="off5txt">
            40% OFF ON SUNGLASSES
            </div>
          </div>
        </div>
      </div>
      <div className="newstyles">
        <div className="boxplot">
          <div className='brandoffer'>
            <div className='brand-new'><b>WE OFFER BRAND NEW STYLES</b></div>
            <div className='signup-get'>
              SIGN UP NOW AND GET 50% OFF
            </div>
            <Container className="mt-2">
                <Button variant="light" className="custom-rounded-button">SEE FULL COLLECTION</Button>
            </Container>
          </div>
        </div>
      </div>

    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Offers />)

export default Offers;
