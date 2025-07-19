import React from "react";

const IndexFAQ = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fff', color: '#000' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3">Got questions?</h1>
          <p className="lead">We&apos;ve got answers</p>
        </div>

        {/* Content Grid */}
        <div className="row g-4">
          {/* AI Mortgage Card */}
          <div className="col-md-6">
            <div className="p-4 rounded-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
              <h3 className="fw-bold mb-3">How AI Mortgage Lending is Transforming the Home Loan Process</h3>
              <div className="d-flex justify-content-end">
                <button className="btn btn-link p-0 text-decoration-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#004733"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* One Day Mortgage Card */}
          <div className="col-md-6">
            <div className="p-4 rounded-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
              <h3 className="fw-bold mb-3">One Day Mortgage<sup>1</sup></h3>
              <p className="mb-4">
                Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
              </p>
              <div className="d-flex justify-content-end">
                <button className="btn btn-link p-0 text-decoration-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#004733"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Better HELOC Card */}
          <div className="col-12">
            <div className="p-4 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
              <h2 className="fw-bold mb-3">Better HELOC</h2>
              <p className="mb-4">
                Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup>
              </p>
              <div className="d-flex justify-content-end">
                <button className="btn btn-link p-0 text-decoration-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#004733"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
          <button className="btn btn-outline-dark rounded-pill px-4 py-2">Our products</button>
          <button className="btn btn-outline-dark rounded-pill px-4 py-2">Calculators</button>
          <button className="btn btn-outline-dark rounded-pill px-4 py-2">Guides & FAQs</button>
        </div>

        {/* One Day Mortgage Footer */}
        <div className="text-center mt-5">
          <h3 className="fw-bold">One Day Mortgage</h3>
        </div>
      </div>

      <style jsx>{`
        .rounded-3 {
          border-radius: 16px !important;
        }
        h1, h2, h3 {
          color: #004733;
        }
        .btn-outline-dark {
          border-color: #004733;
          color: #004733;
        }
        .btn-outline-dark:hover {
          background-color: #004733;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default IndexFAQ;
