import React from 'react';
import './FooterCard.css';

const FooterCard = (props) => {
  return (
    <div className="footer-body">
      <div className="footcard">
        <h6>{props.headtext}</h6>
        {/* <h5>MY PROFILE</h5> */}
        <ul>
          {/* <li>Getting Started</li>
          <li>FAQs</li>
          <li>Buying Guide</li>
          <li>Order Returns</li>
          <li>Affiliate Program</li> */}
          <li>{props.litxt1}</li>
          <li>{props.litxt2}</li>
          <li>{props.litxt3}</li>
          <li>{props.litxt4}</li>
          <li>{props.litxt5}</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCard;
