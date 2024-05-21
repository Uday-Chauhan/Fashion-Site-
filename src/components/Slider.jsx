import React from "react";
import ReactDOM from 'react-dom/client'
import { Button, Container } from 'react-bootstrap';
import buttonimg1 from '../assets/images/Slider button1.png';
import buttonimg2 from '../assets/images/Slider button2.png';
import buttonimg3 from '../assets/images/Slider button3.png';
import fbicon from '../assets/images/sidebar fb.png';
import gicon from '../assets/images/sidebar g+.png';
import Xicon from '../assets/images/sidebar X.png';
import igicon from '../assets/images/sidebar insta.png';
import btmcell from '../assets/images/Slider-btm-cell-image.png';

import "./Slider.css"
function  Slider (){
  return (
    <div className="body">
       <div className="content">

            <div className="side-bar">
                <div className="side-bar-left">
                   <img src={fbicon} alt="fb" /> <br /> &emsp;
                   <img src={gicon} alt="g+" /> <br />&emsp;
                   <img src={Xicon} alt="tw" className="xicon" /> <br />&emsp;
                   <img src={igicon} alt="in" /><br />&emsp;

                <div className="sidebar-text">
                    FOLLOW US     
                </div>
                </div>
            </div>
            <div className="summer-collection">
                <h1><b>SUMMER <br />
                COLLECTION</b></h1>
                <p><b>01 &emsp; MEN'S WEAR</b></p>
                <div className="button-imgs">
                    <img src={buttonimg1} alt="img" />
                    <img src={buttonimg2} alt="" />
                    <img src={buttonimg3} alt="" />
                </div>
                <div className="bottom-right">
                    <div className="summer-collection-para-btn">
                        Lorem ipsum dolor  dular ametur<br/>  consectetur adipisicing elitber. Debitis<br/>  Plat dolore voluptatibus quo palo  omnis harum!
                        <Container className="mt-2">
                            <Button variant="dark" className="custom-rounded-button">Shop Now</Button>
                        </Container>
                    </div>
                    <div className="rightbtmcell">
                        <div className="product-image">
                            <img src={btmcell} alt="" />    
                        </div>
                        <div className="product-text">
                            <h2><b>SPECIAL OFFER OF THE MONTH</b></h2>
                            <pre>Black Long Sleeve <br />
                            <br />
                            <div className="product-text-btn">
                            <del>$165</del> <span>&ensp;&ensp;<b>$67</b></span> &ensp;
                                <Container className="mt-0">
                                    <Button variant="light" className="custom-rounded-button-1">Shop Now</Button>
                                </Container>
                            </div>
                            </pre>
                            <div className="tymbox">
                                <div className="hours">
                                    <b className="hourdiv">09</b> <br />... <br />HOURS
                                </div>
                                <div className="minutes">
                                <b className="mindiv">56</b> <br />... <br />MINUTES
                                </div>
                                <div className="seconds">
                                <b className="secdiv">13</b> <br />... <br />SECONDS
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Slider />)
export default Slider;
