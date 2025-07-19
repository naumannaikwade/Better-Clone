import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div style={{ padding: '0 150px', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 1000 }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: '20px 0', backgroundColor: 'white' }}>
        <div className="container-fluid">
          {/* Left Section: Brand Name - Converted to Link */}
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand">
              <img src="/media/better-logo-start.svg" alt="Better Logo" />
            </a>
          </Link>

          {/* Center Section: Graphic */}
          <div className="navbar-center"></div>

          {/* Right Section: Contact Information - Keep as regular anchor */}
          <div className="navbar-contact">
            <a href="tel:4155238837" style={{ textDecoration: 'none', color: '#00A651' }}>
              <div
                style={{
                  display: 'inline-block',
                  border: '1px solid #00A651',
                  height: '35px',
                  width: '35px',
                  padding: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#a3ffd0',
                }}
              >
                <img src="/media/call.svg" alt="Call Icon" style={{ width: '20px', height: '20px' }} />
              </div>
              <span style={{ marginLeft: '5px' }}>Need help? Call 415-523-8837</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Line with Blur */}
      <div
        style={{
          width: '100%',
          height: '3px',
          backgroundColor: 'black',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 -4px 8px rgba(0,0,0,0.1)',
        }}
      ></div>
    </div>
  );
};

export default Navbar;