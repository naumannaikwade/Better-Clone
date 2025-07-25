import React, { useState } from "react";

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <style>{`
        .welcome-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 150px;
          
          font-family: Arial, sans-serif;
        }
        .header {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
        }
        .header svg {
          width: 36px;
          height: 36px;
          margin-right: 15px;
        }
        .header h1 {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin: 0;
          line-height: 1.4;
        }
        .header h1 span {
          font-weight: 700;
          color: #017848;
        }
        .options {
          margin-bottom: 30px;
        }
        .option {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding: 15px;
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .option:hover {
          background: #f0f0f0;
        }
        .option.selected .check-icon {
          display: inline-block;
        }
        .option svg {
          width: 36px;
          height: 36px;
          margin-right: 15px;
        }
        .option span {
          font-size: 16px;
          color: #333;
          flex-grow: 1;
        }
        .check-icon {
          display: none;
          width: 18px;
          height: 18px;
          color: #017848;
        }
        .stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .stat {
          text-align: center;
          flex: 1;
        }
        .stat h2 {
          font-size: 24px;
          font-weight: 700;
          color: #017848;
          margin-bottom: 8px;
        }
        .stat p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }
        .benefits {
          background-color: #D4EDDA;
          padding: 20px;
          border-radius: 8px;
        }
        .benefits h3 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
        }
        .benefits ul {
          list-style: none;
          padding: 0;
          margin: auto;
         
        }
        .benefits li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding:0px 0px 0px 125px
           
        }
        .benefits svg {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          fill: #017848;
         
        }
        .benefits span {
          font-size: 14px;
          color: #333;
         
        }
        @media (max-width: 768px) {
          .welcome-section {
            padding: 20px;
          }
          .stats {
            flex-direction: column;
            gap: 20px;
          }
          .stat {
            margin-bottom: 15px;
          }
        }
      `}</style>
      <div
        className="bg-light pt-5"
        style={{ minWidth: "100vw", maxWidth: "100%" }}
      >
        <div className="welcome-section">
          <div className="header">
            <h1
              className="text-center"
              style={{ width: "100%", fontSize: "40px" }}
            >
              <span>Hi, I&apos;m Betsy!</span>
              <br />
              What can I help you with?
            </h1>
          </div>
          <div className="options">
            <div
              className={`option ${
                selectedOption === "buying" ? "selected" : ""
              }`}
              onClick={() => handleOptionChange("buying")}
              role="radio"
              aria-checked={selectedOption === "buying"}
              tabIndex={0}
              data-qa="purchase"
            >
              <svg
                height="36"
                stroke="none"
                viewBox="0 0 36 36"
                width="36"
                aria-hidden="true"
                fill="#017848"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="start-purchase-icon">Start Purchase</title>
                <path
                  d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z"
                  fill="#017848"
                ></path>
                <path
                  d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z"
                  fill="#017848"
                ></path>
              </svg>
              <span>Buying a home</span>
              <svg
                height="18px"
                width="18px"
                className="check-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="#017848"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.35588 16.0296L3.61455 11.2882L2 12.8914L8.35588 19.2473L22 5.60318L20.3968 4L8.35588 16.0296Z"></path>
              </svg>
            </div>
            <div
              className={`option ${
                selectedOption === "refinancing" ? "selected" : ""
              }`}
              onClick={() => handleOptionChange("refinancing")}
              role="radio"
              aria-checked={selectedOption === "refinancing"}
              tabIndex={-1}
              data-qa="refinance"
            >
              <svg
                height="36"
                stroke="none"
                viewBox="0 0 36 36"
                width="36"
                aria-hidden="true"
                fill="#017848"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="start-refinance-icon">Start Refinance</title>
                <path
                  d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z"
                  fill="#017848"
                ></path>
                <path
                  d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z"
                  fill="#017848"
                ></path>
                <path
                  d="M18.456 10C12.5 10 7.67 14.83 7.67 20.785H6l2.869 4.782 2.865-4.782h-1.667a8.383 8.383 0 0 1 8.389-8.388 8.383 8.383 0 0 1 8.389 8.388 8.383 8.383 0 0 1-8.39 8.389 8.32 8.32 0 0 1-5.919-2.469l-1.702 1.702a10.73 10.73 0 0 0 7.622 3.164c5.956 0 10.785-4.83 10.785-10.786C29.241 14.83 24.411 10 18.456 10Z"
                  fill="#017848"
                ></path>
              </svg>
              <span>Refinancing my mortgage</span>
              <svg
                height="18px"
                width="18px"
                className="check-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="#017848"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.35588 16.0296L3.61455 11.2882L2 12.8914L8.35588 19.2473L22 5.60318L20.3968 4L8.35588 16.0296Z"></path>
              </svg>
            </div>
            <div
              className={`option ${
                selectedOption === "cash" ? "selected" : ""
              }`}
              onClick={() => handleOptionChange("cash")}
              role="radio"
              aria-checked={selectedOption === "cash"}
              tabIndex={-1}
              data-qa="heloc"
            >
              <svg
                height="36"
                stroke="none"
                viewBox="0 0 36 36"
                width="36"
                aria-hidden="true"
                fill="#017848"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="start-cashout-refinance-icon">Start Heloc</title>
                <path
                  d="M2.25 18a15.75 15.75 0 0 1 31.5 0H36a18 18 0 1 0-18 18v-2.25A15.75 15.75 0 0 1 2.25 18Z"
                  fill="#017848"
                ></path>
                <path
                  d="M23.143 20.204c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-4.457c-.398 0-.766-.21-.965-.551a1.092 1.092 0 0 1 0-1.102c.199-.341.567-.551.965-.551H19.8c.296 0 .579.116.788.323.209.206.326.487.326.779h2.229c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-1.114v-2.204h-2.229v2.204h-1.114a3.35 3.35 0 0 0-2.895 1.653 3.275 3.275 0 0 0 0 3.306 3.35 3.35 0 0 0 2.895 1.653H19.8c.398 0 .766.21.965.551.199.341.199.761 0 1.102-.199.341-.567.551-.965.551h-4.457a1.12 1.12 0 0 1-.788-.323 1.096 1.096 0 0 1-.326-.779H12c0 .877.352 1.718.979 2.338.627.62 1.477.968 2.364.968h1.114v2.204h2.229V23.51H19.8c.887 0 1.737-.348 2.364-.968.627-.62.979-1.461.979-2.338ZM29.852 19.97a1.13 1.13 0 0 0-1.429 0l-5.714 4.653a1.17 1.17 0 0 0-.423.907v9.307c0 .308.12.604.334.822.215.218.506.341.809.341h11.428c.303 0 .594-.123.808-.34.215-.219.335-.515.335-.823V25.53a1.171 1.171 0 0 0-.434-.907l-5.714-4.654Zm3.862 13.703H31.43v-3.49c0-.308-.12-.604-.335-.822a1.133 1.133 0 0 0-.808-.34H28c-.303 0-.594.122-.808.34a1.174 1.174 0 0 0-.335.822v3.49h-2.285V26.09l4.571-3.723 4.571 3.723v7.584Z"
                  fill="#017848"
                ></path>
              </svg>
              <span>Get cash from my home</span>
              <svg
                height="18px"
                width="18px"
                className="check-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="#017848"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.35588 16.0296L3.61455 11.2882L2 12.8914L8.35588 19.2473L22 5.60318L20.3968 4L8.35588 16.0296Z"></path>
              </svg>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <h2>$100B</h2>
              <p>home loans funded entirely online</p>
            </div>
            <div className="stat">
              <h2>400K</h2>
              <p>Customers who chose a Better Mortgage</p>
            </div>
          </div>
          <div className="benefits text-center">
            <h3>After a few questions, you&apos;ll unlock:</h3>
            <ul className="text-center">
              <li>
                <svg
                  style={{ fill: "none", stroke: "none" }}
                  height="22px"
                  width="22px"
                  aria-hidden="true"
                  fill="#017848"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 .833C4.94.833.833 4.94.833 10S4.94 19.166 10 19.166 19.167 15.06 19.167 10C19.167 4.94 15.06.833 10 .833Zm0 16.5c-4.042 0-7.333-3.29-7.333-7.333S5.957 2.666 10 2.666 17.333 5.957 17.333 10c0 4.042-3.29 7.333-7.333 7.333ZM7.458 15H5.5l7.057-10h1.958L7.458 15ZM7 9.476a1.71 1.71 0 0 0 1.716-1.738C8.716 6.748 7.946 6 7 6c-.968 0-1.738.748-1.738 1.738S6.032 9.476 7 9.476Zm6 4.5a1.71 1.71 0 0 0 1.716-1.738c0-.99-.77-1.738-1.716-1.738-.968 0-1.738.748-1.738 1.738s.77 1.738 1.738 1.738Z"
                    fill="#017848"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span>Custom mortgage rates</span>
              </li>
              <li>
                <svg
                  height="22px"
                  width="22px"
                  aria-hidden="true"
                  fill="#017848"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path>
                </svg>
                <span>Exclusive offers</span>
              </li>

              <li>
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ivbj1-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PhoneIphoneOutlinedIcon"
                >
                  <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path>
                </svg>
                <span>A personalized dashboard</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;