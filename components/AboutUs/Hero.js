import React from "react";

const AboutUsHero = () => {
  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        boxSizing: "border-box",
        padding: "150px 275px"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          padding: "40px 20px"
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "32px",
            color: "#004733"
          }}
        >
          Our mission
        </h1>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            lineHeight: "1.3",
            color: "#292B29"
          }}
        >
          We&apos;re making homeownership simpler, faster — and most importantly, more
          accessible for all Americans.
        </h2>
      </div>
    </section>
  );
};

export default AboutUsHero;
