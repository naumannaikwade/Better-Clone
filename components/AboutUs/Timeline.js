import React from 'react';

// Sample timeline data
const timelineData = [
  {
    year: '2014',
    title: 'Founded by Vishal Garg',
    description: 'After Vishal Garg first attempted to purchase his own home, he quickly realized that the homebuying process was unnecessarily broken. This inspired him to found a technology-first company powered by a mission of digitizing and automating home financing to make it cheaper, faster, and easier for all.'
  },
  {
    year: '2015',
    title: 'First Online Mortgage Loan',
    description: 'Funded its first mortgage loan entirely online without a single phone call.'
  },
  {
    year: '2016',
    title: 'Fannie Mae Seller/Servicer',
    description: 'Became a Fannie Mae seller/servicer, building relationships with top mortgage investors.'
  },
  {
    year: '2017',
    title: 'Expansion into Real Estate',
    description: 'Launched Better Real Estate to expand into the real estate market.'
  },
  {
    year: '2018',
    title: 'Partnership with Ally Bank',
    description: 'Partnered with Ally Bank to build Ally Home powered by Better.'
  },
  {
    year: '2019',
    title: 'Pilot Partnership with American Express',
    description: 'Launched pilot with AMEX for seamless homebuying experience.'
  },
  {
    year: '2021',
    title: 'Acquisition of Trussle',
    description: 'Acquired Trussle, UK’s most innovative online mortgage broker.'
  },
  {
    year: '2022',
    title: 'First Fintech to Fund $10B Online',
    description: 'Became the first fintech to fund $10B in loans online.'
  },
  {
    year: '2023',
    title: 'One Day Mortgage',
    description: 'Launched One Day Mortgage to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.'
  },
  {
    year: '2023',
    title: '3-day HELOC',
    description: 'Launched the fully digital 3-day HELOC.'
  },
  {
    year: '2023',
    title: 'One Day Verified Approval Letter',
    description: 'Launched One Day Verified Approval Letter.'
  },
  {
    year: 'Today',
    title: 'Join the Story',
    description: 'You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.',
    cta: 'Get started'
  }
];

// CSS Styles (using <style> tag for single file)
const styles = `
  .timeline {
    position: relative;
   padding-bottom:75px;
    max-width: 100vw;
    margin: 0 auto;
    background-color: #fff;
    font-family: Arial, sans-serif;

  }
  .timeline-header {
    text-align: center;
    font-size: 1.8em;
    font-weight: 700;
    color: #333;
    margin-bottom: 60px;
  }
  .timeline-line {
    position: absolute;
    top: 175px;
    bottom: 100px;
    left: 50%;
    width: 2px;
    background: #ccc;
    transform: translateX(-50%);
  }
  .timeline-item {
    position: relative;
    margin: 80px 0;
    display: flex;
    align-items: center;
  }
  .timeline-node {
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 50px;
    background: #28a745;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 500;
    border-radius: 50px;
    z-index: 1;
    
  }
  .timeline-content {
    width: 40%;
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #666;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    position: relative;
    top:75px;
    margin:18px 150px;
    
  }
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 52%;
    text-align: left;
  }
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: 8%;
    text-align: right;
  }
  .timeline-content h4 {
    font-size: 1.2em;
    font-weight: 600;
    color: #444;
    margin-bottom: 12px;
  }
  .timeline-content p {
    font-size: 0.95em;
    line-height: 1.6;
    margin: 0;
  }
  .timeline-content .btn {
    margin-top: 20px;
    padding: 10px 24px;
    font-size: 0.9em;
    font-weight: 500;
    display: block;
    width: fit-content;
    margin-left: auto;
  }
  @media (max-width: 768px) {
    .timeline-line {
      left: 20px;
      transform: none;
    }
    .timeline-node {
      left: 20px;
      transform: translateX(-50%);
      top: 0;
    }
    .timeline-content {
      width: 85%;
      margin-left: 50px !important;
      margin-right: 0 !important;
      text-align: left !important;
    }
    .timeline-item {
      margin: 60px 0;
    }
    .timeline-content .btn {
      margin-left: 0;
    }
  }
`;

// Component Definition
const Timeline = ({ items = timelineData }) => {
  return (
    <>
      <style>{styles}</style>
      <div className="timeline">
        <div className="timeline-header">Company timeline</div>
        <div className="timeline-line"></div>
        {items.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-node">{item.year}</div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              {item.cta && <button className="btn btn-success">{item.cta}</button>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;