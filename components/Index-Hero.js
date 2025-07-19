import Image from "next/image";
import Link from 'next/link';

export default function IndexHero() {
  return (
    <>
      <div
        className="container text-center "
        style={{
          background: "linear-gradient(180deg, #03593C 0%, #011F1A 100%)",
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: 0,
          minWidth: "100vw",
        }}
      >
        {/* Heading */}
        <h1 className="fw-bold mt-5 mb-3 text-white display-4 display-md-3 display-lg-1" style={{fontSize:"95px"}}>
          The first <br />
          <span
            style={{
              background:
                "linear-gradient(116deg, #00FF80 16.51%, #A987FF 54.85%, #EA06FF 94.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            AI-powered
          </span>{" "}
          Mortgage
        </h1>

        {/* Paragraph */}
        <p className="lead text-white mt-4" style={{fontSize:"25px"}}>
          Our tech unlocks lower rates, higher chances of approval,
          <br />
          and a lightning‑fast process from approval&nbsp;to&nbsp;closing. Over
          $100 billion funded.
        </p>

        {/* Button */}
        <div className="text-center mt-4">
          <Link
            href="/start"
            className="btn btn-lg px-5 py-3 rounded-pill fw-bold text-center"
            style={{
              background: "#1ee07f",
              border: "none",
              color: "#292b2a",
              width: "262px",
              height: "60px",
              fontSize: "16px",
            }}
          >
            Start my pre-approval
          </Link>

          {/* Subtext with icon */}
          <div className="mt-3 d-flex align-items-center justify-content-center gap-2 small text-muted">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "2px" }}
            >
              <path
                d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z"
                fill="#888"
              ></path>
              <path
                fill="#888"
                d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"
              ></path>
            </svg>
            <span className="" style={{ color: "white" }}>
              3 min
            </span>
            <span style={{ color: "white" }}>| No hard credit check</span>
          </div>
        </div>

        {/* Image */}
        <div className="mt-5 px-4">
          <Image
            src="/media/ai-powered-fico.webp" // Local image in public/media/
            width={510}
            height={810}
            priority
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
