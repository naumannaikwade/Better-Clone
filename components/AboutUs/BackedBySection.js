import React from 'react';
import Image from 'next/image';

const BackedBySection = () => {
  return (
    <section style={{
      backgroundColor: 'white',
      padding: '80px 50px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#292B29',
        marginBottom: '60px'
      }}>
        Backed by
      </h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '100vw',
        margin: '0 0'
      }}>
        {/* SoftBank Logo */}
        <div style={{ width: '160px' }}>
          <Image 
            src="/media/softbank.svg" 
            alt="SoftBank" 
            width={160}
            height={80}
            objectFit="contain"
          />
        </div>
        
        {/* Ally Logo */}
        <div style={{ width: '160px' }}>
          <Image 
            src="/media/ally.svg" 
            alt="Ally" 
            width={160}
            height={80}
            objectFit="contain"
          />
        </div>
        
        {/* Citi Logo */}
        <div style={{ width: '160px' }}>
          <Image 
            src="/media/citi.svg" 
            alt="Citi" 
            width={160}
            height={80}
            objectFit="contain"
          />
        </div>
        
        {/* Pingan Bank Logo */}
        <div style={{ width: '160px' }}>
          <Image 
            src="/media/pinganbank.svg" 
            alt="Pingan Bank" 
            width={160}
            height={80}
            objectFit="contain"
          />
        </div>
        
        {/* Goldman Sachs Logo */}
        <div style={{ width: '160px' }}>
          <Image 
            src="/media/goldmanSachs.svg" 
            alt="Goldman Sachs" 
            width={160}
            height={80}
            objectFit="contain"
          />
        </div>
        
        {/* KPCB Logo */}
        <div style={{ width: '160px' }}>
          <Image 
            src="/media/kpcb.svg" 
            alt="KPCB" 
            width={160}
            height={80}
            objectFit="contain"
          />
        </div>
        
        {/* American Express Logo */}
        <div style={{ width: '160px' }}>
          <Image 
            src="/media/americanexpress.svg" 
            alt="American Express" 
            width={160}
            height={80}
            objectFit="contain"
          />
        </div>
        
       
      </div>
    </section>
  );
};

export default BackedBySection;