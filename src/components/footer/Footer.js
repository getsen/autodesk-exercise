import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className='auto-footer text-center'>
      <span className='footer-txt'>Your account for everything Autodesk</span>
      <br />
      <a href='/' className='card-link'>
        Learn more
      </a>
    </div>
  );
}

export default Footer;
