import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offers from './components/Offers'; 
import Product from './components/ProductType';
import ProductCard from './components/ProductCard';
import Man from './assets/images/Man1.png';
import Woman from './assets/images/Women1.png';
import Kids from './assets/images/Kids.png';
import Feature from './components/Featured';
import FeatureCard from './components/FeatureCard';
import Man2 from './assets/images/feature1.png';
import Woman2 from './assets/images/feature2.png';
import Woman3 from './assets/images/feature3.png';
import Woman4 from './assets/images/feature4.png';
import Larrow from './assets/images/Feature Left Arrow.png';
import Rarrow from './assets/images/Feature Right Arrow.png';
import Subscribe from './components/Subscribe';
import Blog from './components/Blog&News';
import BCard from './components/BlogCard';
import Blog1 from './assets/images/Blog 1 Image.png';
import Blog2 from './assets/images/Blog 2 Image.png';
import Footer from'./components/Footer';
import Footercard from './components/FooterCard';
import Last from './components/Mainft';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>Fashion World</title>
      </Helmet>
      <Navbar />
      <Slider />
      <Offers />
      <Product/>
      
      <div className="proCard">
        <div className="prev"><span><b>PREV</b></span></div>
        <ProductCard img={Man} buttonText="SHOP MEN"/>
        <ProductCard img={Woman} buttonText="SHOP WOMEN"/>
        <ProductCard img={Kids} buttonText="SHOP KIDS"/>
        <div className="next"><span><b>NEXT</b></span></div>
      </div>

      <Feature />
      <div className="feaCard">
        <img src={Larrow} alt="prev" className='Larrow'/>
        <FeatureCard images={Man2} text='Ted Baker Men Light'/>
        <FeatureCard images={Woman2} text='Ted Baker Women Light'/>
        <FeatureCard images={Woman3} text='Ted Baker Women Light'/>
        <FeatureCard images={Woman4} text='Ted Baker Women Light'/>
        <img src={Rarrow} alt="nxt" className='Rarrow' />
      </div>
      
      <Subscribe/>

      <Blog/>
      <div className="allofblog">
        <img src={Larrow} alt="prev" className='Larrow1'/>
        <div className="blogCard">
            <div className="bcarddiv1">
              <BCard image={Blog1} />
              <div className="blog1">
                <h6>THE 15 SECRETS ABOUT FASHION PEOPLE</h6>
                <i>january 12, 2020 by admin</i>
              </div>
            </div>
            <div className="bcarddiv2">
              <BCard image={Blog2} />
              <div className="blog2">
                <h6>THE 15 SECRETS ABOUT FASHION PEOPLE</h6>
                <i>january 12, 2020 by admin</i>
              </div>
            </div>
        </div>
        <img src={Rarrow} alt="nxt" className='Rarrow2' />
      </div>

      {/* <Footer/> */}
      <div className="footer">
          <br />
        <div className="foot-content">
          <Footercard headtext='INFORMATION' litxt1='The Brand'
          litxt2='Local Stores'
          litxt3='Customer Services'
          litxt4='Privacy & Cookies'
          litxt5='Site Maps'
          />
          <Footercard headtext='MY PROFILE' litxt1='Getting Started'
          litxt2='FAQs'
          litxt3='Buying Guide'
          litxt4='Order Returns'
          litxt5='Affiliate Program'
          />
          <Footercard headtext='YOUR ACCOUNT' litxt1='Shipping & Returns'
          litxt2='Secure Shopping'
          litxt3='Testimonials'
          litxt4='Award Winning'
          litxt5='Ethical Trading'
          />
          <Footercard headtext='LOOKBOOK' litxt1='Getting Started'
          litxt2='FAQs'
          litxt3='Buying Guide'
          litxt4='Order Returns'
          litxt5='Affiliate Program'
          />
          <Footer/>
         
        </div>
        <Last/>
      </div>
    </>
  );
}

export default App;
