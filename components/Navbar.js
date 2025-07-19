import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      maxWidth: '100vw',
      margin: '0 0',
      padding: '20px 40px',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#004733',
      color: '#fff'
    }}>
      {/* Left Side - Logo and Navigation */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link 
          href="/"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#fff',
            textDecoration: 'none',
            marginRight: '40px'
          }}
        >
          Better
        </Link>
        
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link 
            href="/about-us"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            About Us
          </Link>
          
          <Link 
            href={{
              pathname: '/mortgage-calculator',
              query: { taxes: '265', zip: '421005' }
            }}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Mortgage Calculator
          </Link>
          
          <Link 
            href="/start"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Start
          </Link>
        </div>
      </div>

      {/* Right Side - Empty for now */}
      <div></div>
    </nav>
  );
};

export default Navbar;