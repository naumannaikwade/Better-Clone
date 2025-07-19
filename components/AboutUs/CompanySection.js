import React from "react";
import Image from "next/image";

const CompanySection = () => {
  return (
    <>
      {/* First Section - Status Quo */}
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "0px 200px 0px 250px",
        }}
      >
        <div className="row">
          <div className="col-6" style={{ paddingRight: "50px" }}>
            <h1 className="my-5">The status quo is broken</h1>
            <p>
              The traditional processes around homeownership are opaque and
              stressful. Fees aren’t transparent and some are simply outrageous
              in size. Traditional mortgage lending is rife with unnecessary
              fees and slow, painful processes. It’s a system set up to benefit
              insiders — not you. Better.com CEO, Vishal Garg, set out to
              change that.
            </p>
            <button
              className="btn mb-5"
              style={{
                height: "64px",
                width: "225px",
                marginTop: "32px",
                padding: "0px 40px",
                backgroundColor: "#017848",
                color: "white",
              }}
            >
              Read Vishal&apos;s Story
            </button>
          </div>

          <div className="col-6">
            <Image
              src="/media/vishal-mission.jpg"
              alt="Vishal's Mission"
              width={500}
              height={400}
              style={{
                objectFit: "cover",
                marginTop: "50px",
                marginBottom: "120px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Second Section - How We're Changing Things */}
      <div
        style={{
          backgroundColor: "#017848",
          padding: "80px 250px 80px 250px",
          color: "white",
        }}
      >
        <div className="row">
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
          >
            How we&apos;re changing things
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers&apos;.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            That&apos;s why Better.com is redefining the homeownership process
            from the ground up. We&apos;re using technology to make it faster
            and more efficient, and humans to help make it friendly and
            enjoyable.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanySection;
