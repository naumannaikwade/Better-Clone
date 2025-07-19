// components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (<>
    
    <footer
      className="bg-white text-black border-top "
      style={{ padding: "35px 150px 10px 150px", fontSize: "14px",borderTopColor:"##121212"}}
    >
      <div className="container">
        <div className="row">
          {/* Logo and Main Section */}
         <div className="row">
          <img
            src="/media/better-logo.png"
            style={{ height: "40px",width:"10%"
             }}
             className="mb-3"
            
          ></img>
          </div>
          <div className="col-4">
            <p className="text-sm mb-2">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
            <div>
              <img
                src="/media/better-mortgage-logo.svg"
                style={{ height: "25px" }}
                className="my-3"
              ></img>
              <p className="text-sm" style={{ marginBottom: "0" }}>
                We can’t wait to say "Welcome home." Apply 100% online, with
                expert customer support.
              </p>
              <img
                src="/media/better-real-estate-logo.svg"
                style={{ height: "25px" }}
                className="my-3"
              ></img>
              <p className="text-sm" style={{ marginBottom: "0" }}>
                Connect with a local Better Real Estate Partner Agent to find
                out all the ways you can save.
              </p>
              <img
                src="/media/better-cover-logo.svg"
                style={{ height: "25px" }}
                className="my-3"
              ></img>
              <p className="text-sm" style={{ marginBottom: "0" }}>
                Shop, bundle, and save on insurance coverage for home, auto,
                life, and more.
              </p>
              <img
                src="/media/better-inspect-logo.svg"
                style={{ height: "25px" }}
                className="my-3"
              ></img>
              <p className="text-sm" style={{ marginBottom: "0" }}>
                Get free repair estimates, 24-hour turnarounds on reports, and
                rest easy with our 100-day inspection guarantee.
              </p>
              <img
                src="/media/better-settlement-services-logo.svg"
                style={{ height: "25px" }}
                className="my-3"
              ></img>
              <p className="text-sm" style={{ marginBottom: "0" }}>
                Get transparent rates when you shop for title insurance all in
                one convenient place.
              </p>
            </div>
          </div>

          {/* Resources Section */}
          <div className="col-3" style={{ paddingLeft: "75px" }}>
            <h4 className="font-weight-bold mb-4">Resources</h4>
            <ul className="list-unstyled text-sm">
              <li className="mb-3">Home affordability calculator</li>
              <li className="mb-3">Mortgage calculator</li>
              <li className="mb-3">Free mortgage calculator</li>
              <li className="mb-3">Mortgage calculator with taxes</li>
              <li className="mb-3">Mortgage calculator with PMI</li>
              <li className="mb-3">Rent vs buy calculator</li>
              <li className="mb-3">HELOC payment calculator</li>
              <li className="mb-3">HELOC vs cash-out refinance calculator</li>
              <li className="mb-3">Buy a home</li>
              <li className="mb-3">Sell a home</li>
              <li className="mb-3">Get home inspection</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-3" style={{ paddingLeft: "55px" }}>
            <h4 className="font-weight-bold mb-4">Company</h4>
            <ul className="list-unstyled text-sm">
              <li className="mb-3">About Us</li>
              <li className="mb-3">Careers</li>
              <li className="mb-3">Media</li>
              <li className="mb-3">Partner With Us</li>
              <li className="mb-3">Learning center</li>
              <li className="mb-3">FAQs</li>
              <li className="mb-3">Investor Relations</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-2">
            <h4 className="font-weight-bold mb-4">Contact Us</h4>
            <ul className="list-unstyled text-sm">
              <li className="mb-3">hello@better.com</li>
              <li className="mb-3">415-523-8837</li>
              <li className="mb-3">FAQ</li>
              <li className="mb-3">Glossary</li>
            </ul>
            <h4 className="font-weight-bold mb-4 mt-4">Legal</h4>
            <ul className="list-unstyled text-sm">
              <li className="mb-3">NMLS Consumer Access</li>
              <li className="mb-3">Privacy Policy</li>
              <li className="mb-3">Terms of Use</li>
              <li className="mb-3">Disclosures & Licensing</li>
              <li className="mb-3">Affiliated Business</li>
              <li className="mb-3">Browser Disclaimer</li>
            </ul>

            <div className="my-4">
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt="Lender Icon"
                  className="h-6 mr-4"
                  style={{ width: "25%", height: "25%", opacity: "0.5" }}
                />
                <img
                  src="data:image/png;base64,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"
                  alt="Housing Icon"
                  className="h-6 mr-4"
                  style={{
                    width: "27%",
                    height: "27%",
                    opacity: "0.5",
                    marginLeft: "20px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="d-flex justify-content-start align-items-center gap-3 mb-3"
          style={{ marginTop: "250px" }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ height: "23px" }} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ height: "23px" }} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={{ height: "23px" }} />
          </a>
        </div>

        <div className="mt-5">
          <p class="text-muted small mt-3">
            <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers
            qualified customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a mortgage loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in a final
            underwriting approval. See{" "}
            <a
              class="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit"
              href="/with/one-day-mortgage-terms"
            >
              One Day Mortgage™ Terms and Conditions.
            </a>
          </p>

          <p class="text-muted small mt-3">
            <sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers
            qualified customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a HELOC loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in final
            underwriting approval. See{" "}
            <a
              class="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit"
              href="/b/better-mortgage-one-day-heloc-promotion-terms-and-conditions"
            >
              One Day Heloc™ Terms and Conditions.
            </a>
          </p>

          <p class="text-muted small mt-3">
            <sup>3</sup>Assumes borrowers are eligible for the Automated
            Valuation Model (AVM) to calculate their home value, their loan
            amount is less than $400,000, all required documents are uploaded to
            their Better Mortgage online account within 24 hours of application,
            closing is scheduled for the earliest available date and time, and a
            notary is readily available. Funding timelines may vary and may be
            longer if an appraisal is required to calculate a borrower’s home
            value.
          </p>

          <hr class="my-xl border-strokeBorder"></hr>

          <p class="text-muted small mt-3">
            © 2025 Better Home &amp; Finance Holding Company and/or its
            affiliates. Better is a family of companies. Better Mortgage
            Corporation provides home loans; Better Real Estate, LLC and Better
            Real Estate California Inc License # 02164055 provides real estate
            services; Better Cover, LLC sells insurance products; and Better
            Settlement Services provides title insurance services; and Better
            Inspect, LLC provides home inspection services. All rights reserved.
          </p>

          <p class="text-muted small mt-3">
            Better BMC operates under the name Better Mortgage Corporation in
            New York.
          </p>

          <p class="text-muted small mt-3">
            Home lending products offered by Better Mortgage Corporation. Better
            Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
            Center, 80th Floor, New York, NY 10007. Loans made or arranged
            pursuant to a California Finance Lenders Law License. Not available
            in all states. Equal Housing Lender.{" "}
            <a
              class="underline"
              data-qa="nmls-link"
              href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511"
            >
              NMLS Consumer Access
            </a>
          </p>

          <p class="text-muted small mt-3">
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
            LLC and Better Real Estate, and operating in the State of California
            through its wholly owned subsidiary Better Real Estate California
            Inc., is a licensed real estate brokerage and maintains its
            corporate headquarters at 325-41 Chestnut Street, Suite 826,
            Philadelphia, PA 19106. Here is a full listing of Better Real
            Estate, LLC’s{" "}
            <a class="underline" href="/with/better-realestate-license">
              license numbers
            </a>
            . Better Real Estate, LLC provides access to real estate brokerage
            services via its nationwide network of partner brokerages and real
            estate agents (“Better Real Estate Partner Agents”). Equal Housing
            Opportunity. All rights reserved.
          </p>

          <p class="text-muted small mt-3">
            <a
              class="underline"
              href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf"
            >
              New York State Housing and Anti-Discrimination Notice
            </a>
          </p>

          <p class="text-muted small mt-3">
            <a
              class="underline"
              href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf"
            >
              New York Standard Operating Procedures
            </a>
          </p>

          <p class="text-muted small mt-3">
            Texas Real Estate Commission:{" "}
            <a
              class="underline"
              href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&amp;cid=645736"
            >
              Information About Brokerage Services
            </a>{" "}
            |{" "}
            <a
              class="underline"
              href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf"
            >
              Consumer Protection Notice
            </a>
          </p>

          <p class="text-muted small mt-3">
            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
            Philadelphia, PA 19106.
          </p>

          <p class="text-muted small mt-3">
            Homeowners insurance policies are offered through Better Cover, LLC,
            a Pennsylvania Resident Producer Agency. License #881593. 325-41
            Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>

          <p class="text-muted small mt-3">
            Insurance quotes and policies are offered through Better Cover, LLC.
            A Pennsylvania Resident Producer Agency. License #881593. Here is a
            full listing of Better Cover, LLC’s{" "}
            <a class="underline" href="https://www.bettercover.com/licenses">
              license numbers
            </a>
            .
          </p>
          <p class="text-muted small mt-3">
            Better Inspect, LLC maintains its corporate headquarters at 325-41
            Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>

          <p class="text-muted small mt-3">
            Better Mortgage Corporation, Better Real Estate, LLC, Better
            Settlement Services, LLC, Better Cover, LLC, Better Connect, and
            Better Inspect, LLC are separate operating subsidiaries of Better
            Home &amp; Finance Holding Company. Each company is a separate legal
            entity operated and managed through its own management and
            governance structure as required by its state of incorporation, and
            applicable and legal and regulatory requirements. Products not
            available in all states.
          </p>

          <p class="text-muted small mt-3">
            Any unauthorized use of any proprietary or intellectual property is
            strictly prohibited. All trademarks, service marks, trade names,
            logos, icons, and domain names are proprietary to Better Home &amp;
            Finance Holding Company. Better Home &amp; Finance Holding Company
            trademarks are federally registered with the U. S. Patent and
            Trademark Office. Better Cover is a registered trademark with the
            U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
          </p>

          <p class="text-muted small mt-3">
            Licensed by the Department of Financial Protection and Innovation
            under the California Residential Mortgage Lending Act
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
