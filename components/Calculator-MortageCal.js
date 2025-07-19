import React, { useState, useEffect } from "react";

const ChevronDown = () => (
  <svg
    className="chevron-icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const CalculatorMortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("41612");
  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [homeownersInsurance, setHomeownersInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [principalAndInterest, setPrincipalAndInterest] = useState(0);

  // Calculate mortgage payment
  useEffect(() => {
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate > 0 && loanAmount > 0) {
      const monthlyPI =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
      setPrincipalAndInterest(monthlyPI);
      setMonthlyPayment(
        monthlyPI + propertyTaxes + homeownersInsurance + hoaFees
      );
    } else if (loanAmount > 0) {
      const monthlyPI = loanAmount / numPayments;
      setPrincipalAndInterest(monthlyPI);
      setMonthlyPayment(
        monthlyPI + propertyTaxes + homeownersInsurance + hoaFees
      );
    } else {
      setPrincipalAndInterest(0);
      setMonthlyPayment(0);
    }
  }, [
    homePrice,
    downPayment,
    interestRate,
    loanTerm,
    propertyTaxes,
    homeownersInsurance,
    hoaFees,
  ]);

  // Update down payment when percentage changes
  useEffect(() => {
    setDownPayment(homePrice * (downPaymentPercent / 100));
  }, [homePrice, downPaymentPercent]);

  // Update percentage when down payment changes
  const handleDownPaymentChange = (value) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homePrice) * 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  // Calculate percentages for visual breakdown
  const total =
    principalAndInterest + propertyTaxes + homeownersInsurance + hoaFees;
  const piPercent = (principalAndInterest / total) * 100;
  const taxPercent = (propertyTaxes / total) * 100;
  const insurancePercent = (homeownersInsurance / total) * 100;
  const hoaPercent = (hoaFees / total) * 100;

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div style={{ margin: "0px -125px 0px -125px", padding: "0" }}>
        <div style={{ margin: "0", padding: "0" }}>
          <div className="calculator-card">
            {/* Header */}
            <div className="calculator-header">
              <h1 className="calculator-title">Mortgage Calculator</h1>
              <p className="calculator-subtitle">
                Free mortgage calculator to estimate your monthly mortgage
                payments with annual amortization.
              </p>
              <p className="calculator-subtitle">
                Discover how all factors can affect your payment.
              </p>
            </div>

            {/* Main Calculator Section */}
            <div className="calculator-main">
              <div className="row align-items-center">
                <div className="col-12 col-lg-3">
                  <div className="input-group-custom">
                    <label className="input-label">Home price</label>
                    <div className="price-input-container">
                      <span className="currency-symbol">$</span>
                      <input
                        type="text"
                        value={formatNumber(homePrice)}
                        onChange={(e) =>
                          setHomePrice(
                            parseInt(e.target.value.replace(/,/g, "")) || 0
                          )
                        }
                        className="price-input"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="input-group-custom">
                    <label className="input-label">Monthly payment</label>
                    <div className="monthly-payment-display">
                      {formatCurrency(monthlyPayment)}
                      <span className="payment-suffix">/mo</span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-3">
                  <button className="btn-preapproval">Get pre-approved</button>
                </div>
              </div>

              {/* Slider */}
              <div className="slider-container">
                <div className="slider-track">
                  <div
                    className="slider-progress"
                    style={{
                      width: `${((homePrice - 50000) / 950000) * 100}%`,
                    }}
                  ></div>
                  <div
                    className="slider-thumb"
                    style={{ left: `${((homePrice - 50000) / 950000) * 100}%` }}
                  ></div>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(parseInt(e.target.value))}
                  className="slider-input"
                />
              </div>

              {/* Bottom Inputs */}
              <div className="bottom-inputs">
                <div className="input-item">
                  <label className="bottom-label">ZIP code</label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="bottom-input"
                  />
                </div>

                <div className="input-item">
                  <label className="bottom-label">Down payment</label>
                  <div className="down-payment-group">
                    <div className="down-payment-dollar">
                      <span className="dollar-sign">$</span>
                      <input
                        type="text"
                        value={formatNumber(downPayment)}
                        onChange={(e) =>
                          handleDownPaymentChange(
                            parseInt(e.target.value.replace(/,/g, "")) || 0
                          )
                        }
                        className="down-payment-input"
                      />
                    </div>
                    <div className="down-payment-percent">
                      <input
                        type="text"
                        value={`${Math.round(downPaymentPercent)}`}
                        onChange={(e) => {
                          const percent = parseInt(e.target.value) || 0;
                          setDownPaymentPercent(percent);
                        }}
                        className="percent-input"
                      />
                      <span className="percent-sign">%</span>
                    </div>
                  </div>
                </div>

                <div className="input-item">
                  <label className="bottom-label">Interest rate</label>
                  <div className="interest-rate-group">
                    <input
                      type="number"
                      step="0.001"
                      value={interestRate}
                      onChange={(e) =>
                        setInterestRate(parseFloat(e.target.value) || 0)
                      }
                      className="interest-input"
                    />
                    <span className="percent-sign">%</span>
                  </div>
                </div>

                <div className="input-item">
                  <label className="bottom-label">Length of loan</label>
                  <div className="select-container">
                    <select
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                      className="loan-select"
                    >
                      <option value={15}>15 years</option>
                      <option value={20}>20 years</option>
                      <option value={25}>25 years</option>
                      <option value={30}>30 years</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Payment Breakdown */}
            <div className="payment-breakdown">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="breakdown-left">
                    <h3 className="breakdown-title">
                      Monthly payment breakdown
                    </h3>
                    <div className="breakdown-amount">
                      {formatCurrency(monthlyPayment)}
                      <span className="breakdown-suffix">/mo</span>
                    </div>

                    {/* Visual Breakdown */}
                    <div className="visual-breakdown">
                      <div className="breakdown-bar">
                        <div
                          className="bar-segment principal"
                          style={{ width: `${piPercent}%` }}
                        ></div>
                        <div
                          className="bar-segment taxes"
                          style={{ width: `${taxPercent}%` }}
                        ></div>
                        <div
                          className="bar-segment insurance"
                          style={{ width: `${insurancePercent}%` }}
                        ></div>
                        <div
                          className="bar-segment hoa"
                          style={{ width: `${hoaPercent}%` }}
                        ></div>
                      </div>
                      <div className="breakdown-circles">
                        <div className="circle principal-circle"></div>
                        <div className="circle taxes-circle"></div>
                        <div className="circle insurance-circle"></div>
                        <div className="circle hoa-circle"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="breakdown-right">
                    <div className="breakdown-item">
                      <div className="item-indicator principal-indicator"></div>
                      <span className="item-label">Principal & interest</span>
                      <span className="item-amount">
                        {formatCurrency(principalAndInterest)}
                      </span>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-indicator taxes-indicator"></div>
                      <span className="item-label">Property taxes</span>
                      <div className="item-input-group">
                        <span className="input-dollar">$</span>
                        <input
                          type="number"
                          value={propertyTaxes}
                          onChange={(e) =>
                            setPropertyTaxes(parseInt(e.target.value) || 0)
                          }
                          className="breakdown-input"
                        />
                      </div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-indicator insurance-indicator"></div>
                      <span className="item-label">Homeowners insurance</span>
                      <div className="item-input-group">
                        <span className="input-dollar">$</span>
                        <input
                          type="number"
                          value={homeownersInsurance}
                          onChange={(e) =>
                            setHomeownersInsurance(
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="breakdown-input"
                        />
                      </div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-indicator hoa-indicator"></div>
                      <span className="item-label">HOA fees</span>
                      <div className="item-input-group">
                        <span className="input-dollar">$</span>
                        <input
                          type="number"
                          value={hoaFees}
                          onChange={(e) =>
                            setHoaFees(parseInt(e.target.value) || 0)
                          }
                          className="breakdown-input"
                        />
                      </div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-indicator utilities-indicator"></div>
                      <span className="item-label">Utilities</span>
                      <div className="utilities-select-group">
                        <span className="utilities-amount">${utilities}</span>
                        <select
                          value={utilities}
                          onChange={(e) =>
                            setUtilities(parseInt(e.target.value))
                          }
                          className="utilities-select"
                        >
                          <option value={50}>$50</option>
                          <option value={100}>$100</option>
                          <option value={150}>$150</option>
                          <option value={200}>$200</option>
                        </select>
                        <ChevronDown />
                      </div>
                    </div>

                    <button className="copy-link-btn">
                      Copy estimate link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .mortgage-calculator {
            background-color: #f8f9fa;
            min-height: 100vh;
            color:white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          .calculator-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem;
          }

          .calculator-header {
            margin-bottom: 3rem;
          }

          .calculator-title {
            font-size: 2.5rem;
            font-weight: 500;
            color: #2c3e50;
            margin-bottom: 1rem;
          }

          .calculator-subtitle {
            color: #6c757d;
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .calculator-main {
            margin-bottom: 4rem;
          }

          .input-group-custom {
            margin-bottom: 1.5rem;
          }

          .input-label {
            display: block;
            color: #495057;
            font-weight: 500;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
          }

          .price-input-container {
            position: relative;
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            padding: 0.5rem 0.75rem;
            margin:25px 0px 25px 0px;
            display: flex;
            align-items: center;
          }

          .currency-symbol {
            font-size: 1.5rem;
            color: #6c757d;
            margin-right: 0.5rem;
          }

          .price-input {
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #2c3e50;
  background: transparent;
  width: 100%;
  padding: 0px 20px;
}


          .monthly-payment-display {
            font-size: 2.5rem;
            font-weight: 500;
            color: #2c3e50;
            margin-top: 1.5rem;
          }

          .payment-suffix {
            font-size: 1.5rem;
            color: #6c757d;
          }

          .btn-preapproval {
            background: #28a745;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
            margin-top: 1.5rem;
          }

          .btn-preapproval:hover {
            background: #218838;
          }

          .slider-container {
            position: relative;
            margin: 2rem 0;
          }

          .slider-track {
            height: 2px;
            background: #e9ecef;
            border-radius: 1px;
            position: relative;
            margin: 1rem 0;
          }

          .slider-progress {
            height: 100%;
            background: #2c3e50;
            border-radius: 1px;
            position: absolute;
            top: 0;
            left: 0;
          }

          .slider-thumb {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 12px;
            height: 12px;
            background: #2c3e50;
            border-radius: 50%;
          }

          .slider-input {
            position: absolute;
            top: -10px;
            left: 0;
            width: 100%;
            height: 20px;
            opacity: 0;
            cursor: pointer;
          }

          .bottom-inputs {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
          }

          .input-item {
            display: flex;
            flex-direction: column;
          }

          .bottom-label {
            color: #6c757d;
            font-size: 0.85rem;
            margin-bottom: 0.5rem;
          }

          .bottom-input {
            padding: 0.75rem;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s;
          }

          .bottom-input:focus {
            border-color: #28a745;
          }

          .down-payment-group {
            display: flex;
            gap: 0.5rem;
          }

          .down-payment-dollar {
            position: relative;
            flex: 1;
          }

          .dollar-sign {
            position: absolute;
            left: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
            font-size: 0.9rem;
          }

          .down-payment-input {
            padding: 0.75rem 0.75rem 0.75rem 1.5rem;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            font-size: 0.95rem;
            outline: none;
            width: 100%;
          }

          .down-payment-percent {
            position: relative;
            width: 80px;
          }

          .percent-input {
            padding: 0.75rem 1.5rem 0.75rem 0.75rem;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            font-size: 0.95rem;
            outline: none;
            width: 100%;
            text-align: center;
          }

          .percent-sign {
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
            font-size: 0.9rem;
          }

          .interest-rate-group {
            position: relative;
          }

          .interest-input {
            padding: 0.75rem 1.5rem 0.75rem 0.75rem;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            font-size: 0.95rem;
            outline: none;
            width: 100%;
          }

          .select-container {
            position: relative;
          }

          .loan-select {
            padding: 0.75rem 2rem 0.75rem 0.75rem;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            font-size: 0.95rem;
            outline: none;
            width: 100%;
            background: white;
            appearance: none;
          }

          .chevron-icon {
            width: 16px;
            height: 16px;
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
            pointer-events: none;
          }

          .payment-breakdown {
            border-top: 1px solid #e9ecef;
            padding-top: 3rem;
          }

          .breakdown-left {
            margin-bottom: 2rem;
          }

          .breakdown-title {
            font-size: 1.1rem;
            font-weight: 500;
            color: #2c3e50;
            margin-bottom: 1rem;
          }

          .breakdown-amount {
            font-size: 2rem;
            font-weight: 500;
            color: #2c3e50;
            margin-bottom: 2rem;
          }

          .breakdown-suffix {
            font-size: 1.2rem;
            color: #6c757d;
          }

          .visual-breakdown {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;
          }

          .breakdown-bar {
            height: 12px;
            background: #e9ecef;
            border-radius: 20px;
            display: flex;
            overflow: hidden;
            flex: 1;
          }

          .bar-segment {
            height: 100%;
          }

          .bar-segment.principal {
            background: #28a745;
            border-radius: 20px 0 0 20px;
          }

          .bar-segment.taxes {
            background: #6f42c1;
          }

          .bar-segment.insurance {
            background: #007bff;
          }

          .bar-segment.hoa {
            background: #ffc107;
            border-radius: 0 20px 20px 0;
          }

          .breakdown-circles {
            display: flex;
            gap: 0.5rem;
          }

          .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }

          .principal-circle {
            background: #28a745;
          }

          .taxes-circle {
            background: #6f42c1;
          }

          .insurance-circle {
            background: #007bff;
          }

          .hoa-circle {
            background: #ffc107;
          }

          .breakdown-right {
            padding-left: 2rem;
          }

          .breakdown-item {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            gap: 1rem;
          }

          .item-indicator {
            width: 4px;
            height: 20px;
            border-radius: 2px;
          }

          .principal-indicator {
            background: #28a745;
          }

          .taxes-indicator {
            background: #6f42c1;
          }

          .insurance-indicator {
            background: #007bff;
          }

          .hoa-indicator {
            background: #ffc107;
          }

          .utilities-indicator {
            background: #fd7e14;
          }

          .item-label {
            flex: 1;
            color: #495057;
            font-size: 0.95rem;
          }

          .item-amount {
            font-weight: 500;
            color: #2c3e50;
          }

          .item-input-group {
            position: relative;
            width: 100px;
          }

          .input-dollar {
            position: absolute;
            left: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
            font-size: 0.9rem;
          }

          .breakdown-input {
            padding: 0.5rem 0.5rem 0.5rem 1.25rem;
            border: 1px solid #e9ecef;
            border-radius: 4px;
            font-size: 0.9rem;
            outline: none;
            width: 100%;
            text-align: right;
          }

          .utilities-select-group {
            position: relative;
            width: 100px;
          }

          .utilities-amount {
            position: absolute;
            left: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            color: #495057;
            font-size: 0.9rem;
            pointer-events: none;
          }

          .utilities-select {
            padding: 0.5rem 1.5rem 0.5rem 0.5rem;
            border: 1px solid #e9ecef;
            border-radius: 4px;
            font-size: 0.9rem;
            outline: none;
            width: 100%;
            background: white;
            appearance: none;
            color: transparent;
          }

          .copy-link-btn {
            background: #e9ecef;
            color: #495057;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            font-size: 0.9rem;
            cursor: pointer;
            margin-top: 1rem;
            transition: background 0.2s;
          }

          .copy-link-btn:hover {
            background: #dee2e6;
          }

          @media (max-width: 768px) {
            .calculator-card {
              padding: 1.5rem;
            }
            
            .calculator-title {
              font-size: 2rem;
            }
            
            .monthly-payment-display {
              font-size: 2rem;
            }
            
            .breakdown-right {
              padding-left: 0;
              margin-top: 2rem;
            }
            
            .bottom-inputs {
              grid-template-columns: 1fr;
            }
          }
            /* General fixes */
input,
select {
  background-color: #fff;
  color: #212529; /* Darker text */
  border: 1px solid #ced4da;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
}

/* Specific adjustments */
.price-input,
.down-payment-input,
.percent-input,
.interest-input,
.breakdown-input,
.loan-select,
.bottom-input {
  background-color: #fff !important;
  color: #212529 !important;
  border: 1px solid #ccc;
}

input::placeholder {
  color: #adb5bd;
}

/* Utility select group */
.utilities-select-group select {
  background-color: #fff;
  color: #212529;
  padding: 0.5rem;
  border-radius: 6px;
}

/* Slider styles */
.slider-input {
  width: 100%;
  height: 8px;
  background: #dee2e6;
  border-radius: 4px;
  outline: none;
  appearance: none;
}

.slider-input::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}

.slider-input::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
}

/* Buttons */
.btn-preapproval,
.copy-link-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-preapproval:hover,
.copy-link-btn:hover {
  background-color: #0056b3;
}

/* Chevron Icon */
.chevron-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  color: #495057;
}

/* Visual breakdown bars */
.bar-segment {
  height: 12px;
  display: inline-block;
}

.principal {
  background-color: #007bff;
}

.taxes {
  background-color: #28a745;
}

.insurance {
  background-color: #ffc107;
}

.hoa {
  background-color: #fd7e14;
}

/* Breakdown circles */
.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;
}

.principal-circle {
  background-color: #007bff;
}

.taxes-circle {
  background-color: #28a745;
}

.insurance-circle {
  background-color: #ffc107;
}

.hoa-circle {
  background-color: #fd7e14;
}

/* Text colors */
.calculator-title,
.breakdown-title {
  color: #2c3e50;
}

.payment-suffix,
.breakdown-suffix {
  font-size: 0.875rem;
  color: #6c757d;
}
        `,
        }}
      />
    </>
  );
};

export default CalculatorMortgageCalculator;
