// pages/mortgage-calculator.js
import { useState } from "react";
import Script from 'next/script';

import CalculateMortgageCalculator from "@/components/Calculator-MortageCal";
import Footer from "@/components/Footer";
import CalculatorFAQSection from "@/components/Calculator-FAQSection";
import Navbar from "@/components/Navbar";

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(300000);
  const [monthlyPayment, setMonthlyPayment] = useState(214);

  // ✅ Correct definition of calculatorData using useState
  const [calculatorData, setCalculatorData] = useState({
    homePrice: "",
    downPayment: "",
    loanTerm: "",
    interestRate: "",
    propertyTax: "",
    homeInsurance: "",
    hoaFees: "",
    monthlyPayment: "", // Add this if it's used in CalculatePaymentBreakdown
  });

  return (
    <>
      {" "}
      <Navbar />
      <div style={{ margin: "0px", padding: "0px", color: "black" }}>
        <div
          className=" min-vh-100 min-vw-100"
          style={{
            margin: "0px",
            padding: "0px 85px 0px 85px",
            backgroundColor: "white",
          }}
        >
          <div className="container py-5">
            <CalculateMortgageCalculator
              data={calculatorData}
              setData={setCalculatorData}
            />

            <CalculatorFAQSection />
          </div>
          
        </div>
        
      </div>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" ></script>
    </>
  );
}
