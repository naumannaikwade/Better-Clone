 import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <div
        className="bg-light py-5"
        style={{ minHeight: "100vh", backgroundColor: "white", color: "black" }}
      >
        <div className="container">
          <div className="row">
            {/* Brand Column */}

            <img src="media/better-logo-startFooter.svg" style={{width:"10%",marginBottom:"40px"}}/>
          </div>

            <div className="row mb-5">
          {/* Contact Column */}
          <div className=" col-5">
            <p className="text-muted" style={{fontSize:"14px",paddingRight:"175px"}}>
              Better Mortgage Corporation is a direct lender dedicated to
              providing a fast, transparent digital mortgage experience backed
              by superior customer support.
            </p>
          </div>

          {/* Links Column */}
          <div className=" col-3" style={{marginLeft:"50px"}}>
            <h3 className="h5 mb-4 fw-bold">Contact Us</h3>
            <ul style={{ textDecoration: "none" }} className="list-unstyled">
              <li className="text-muted mb-3">Schedule a conversation</li>
              <li className="text-muted mb-3">hello@better.com</li>
              <li className="text-muted mb-3">415-523-8837</li>
              <li className="text-muted mb-3">FAQ</li>
              <li className="text-muted mb-3">Resources</li>
            </ul>
          </div>

          <div className=" col-3" >
            <h3 className="h5 mb-4 fw-bold">Legal</h3>
            <ul style={{ textDecoration: "none" }} className="list-unstyled">
              <li className="text-muted mb-3">NMLS Consumer Access</li>
              <li className="text-muted mb-3">Privacy Policy</li>
              <li className="text-muted mb-3">Terms of Use</li>

              <li className="text-muted mb-3">Disclosures & Licensing</li>
              <li className="text-muted mb-3">Affiliated Business</li>
            </ul>
          </div>
          </div>

          <div className="col-1"></div>

          {/* Legal Text */}
          <div className="border-top pt-3">
            <p className="small text-muted mb-2 mt-3">
              © 2023 Better Home & Finance Holding Company and/or its
              affiliates. Better is a family of companies. Better Mortgage
              Corporation provides home loans; Better Real Estate, LLC and
              Better Real Estate California Inc License # 02164055 provides real
              estate services; Better Cover, LLC sells insurance products and
              Better Settlement Services provides title insurance services;
              Better Connect, LLC dba Better Attorney Match provides real estate
              attorney connection services; and Better Inspect, LLC provides
              home inspection services. All rights reserved.
            </p>
            <p className="small text-muted mb-0">
              Home lending products offered by Better Mortgage Corporation.
              Better Mortgage Corporation is a direct lender. NMLS #320511. 1
              World Trade Center, 80th Floor, New York, NY 10007. Loans made or
              arranged pursuant to a California Finance Lenders Law License. Not
              available in all states. Equal Housing Lender. NMLS Consumer
              Access
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
