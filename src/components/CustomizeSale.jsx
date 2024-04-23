import { useState, useEffect } from "react";
import GpayLogo from "../assets/gpay.png";
import IciciLogo from "../assets/icici.png";
import Form from "./Form";

const CustomizeSale = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedValues, setSelectedValues] = useState(null);

  const [quantity, setQuantity] = useState(1); // Default quantity
  const [price, setPrice] = useState(15500); // Default price

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (values) => {
    setSelectedValues(values);
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const updatedPrice = 15500 * quantity;
    setPrice(updatedPrice);
  }, [quantity]);

  return (
    <div className="customize">
      <div className="container">
        <button onClick={toggleForm}>
          {selectedValues
            ? `${selectedValues.category} , ${selectedValues.height}, ${selectedValues.sizeUnit}, ${selectedValues.dimension}`
            : "Select Mattress Dimensions"}{" "}
          <span>
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00873 5.47639L7.62667 4L13.0198 8.97854L18.376 4L20.0013 5.4764L14.6082 10.4893L13.0198 12L11.3945 10.4893L6.00134 5.47639L6.00873 5.47639Z"
                fill="#1A2B58"
              />
            </svg>
          </span>
        </button>
        {showForm && (
          <div className="popup">
            <div className="popup-inner">
              <span className="close-btn" onClick={toggleForm}>
                {" "}
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.303 0.33863L2.303 0.338634L0.338616 2.303C0.338612 2.30301 0.338607 2.30301 0.338603 2.30301C0.313889 2.32774 0.3 2.36127 0.3 2.39624C0.3 2.43118 0.313867 2.46469 0.338562 2.48942C0.33858 2.48944 0.338598 2.48945 0.338616 2.48947L7.13836 9.28656L7.35057 9.49869L7.1384 9.71086L0.338641 16.5106C0.31392 16.5353 0.300038 16.5689 0.300038 16.6038C0.300038 16.6388 0.313933 16.6723 0.338643 16.6971L2.30298 18.6614C2.32773 18.6861 2.36127 18.7 2.39622 18.7C2.43114 18.7 2.46466 18.6861 2.4894 18.6614C2.48942 18.6614 2.48944 18.6614 2.48946 18.6614L9.28654 11.8617L9.49868 11.6494L9.71085 11.8616L16.5106 18.6613C16.5106 18.6614 16.5106 18.6614 16.5106 18.6614C16.5354 18.6861 16.5689 18.6999 16.6038 18.6999C16.6388 18.6999 16.6723 18.6861 16.697 18.6614L2.303 0.33863ZM2.303 0.33863C2.32726 0.314369 2.36001 0.300523 2.39429 0.300014L2.303 0.33863ZM18.6614 16.6971L16.697 18.6613L2.39432 0.300013C2.41195 0.299762 2.42945 0.303048 2.44577 0.309673C2.46209 0.316295 2.47695 0.326139 2.48944 0.33863L9.28654 7.13837L9.49868 7.35058L9.71085 7.13841L16.5106 0.338673C16.5353 0.313958 16.5689 0.300072 16.6038 0.300072C16.6388 0.300072 16.6723 0.313958 16.697 0.338673L18.6614 2.303C18.6861 2.32773 18.7 2.36127 18.7 2.39624C18.7 2.43118 18.6861 2.46469 18.6614 2.48942C18.6614 2.48943 18.6614 2.48945 18.6614 2.48947L11.8616 9.28656L11.6494 9.49869L11.8616 9.71086L18.6614 16.5106C18.6861 16.5353 18.7 16.5689 18.7 16.6038C18.7 16.6388 18.6861 16.6723 18.6614 16.697C18.6614 16.697 18.6614 16.697 18.6614 16.6971Z"
                    fill="white"
                  />
                  <path
                    d="M2.303 0.33863L2.303 0.338634L0.338616 2.303C0.338612 2.30301 0.338607 2.30301 0.338603 2.30301C0.313889 2.32774 0.3 2.36127 0.3 2.39624C0.3 2.43118 0.313867 2.46469 0.338562 2.48942C0.33858 2.48944 0.338598 2.48945 0.338616 2.48947L7.13836 9.28656L7.35057 9.49869L7.1384 9.71086L0.338641 16.5106C0.31392 16.5353 0.300038 16.5689 0.300038 16.6038C0.300038 16.6388 0.313933 16.6723 0.338643 16.6971L2.30298 18.6614C2.32773 18.6861 2.36127 18.7 2.39622 18.7C2.43114 18.7 2.46466 18.6861 2.4894 18.6614C2.48942 18.6614 2.48944 18.6614 2.48946 18.6614L9.28654 11.8617L9.49868 11.6494L9.71085 11.8616L16.5106 18.6613C16.5106 18.6614 16.5106 18.6614 16.5106 18.6614C16.5354 18.6861 16.5689 18.6999 16.6038 18.6999C16.6388 18.6999 16.6723 18.6861 16.697 18.6614L2.303 0.33863ZM2.303 0.33863C2.32726 0.314369 2.36001 0.300523 2.39429 0.300014L2.303 0.33863ZM18.6614 16.6971L16.697 18.6613L2.39432 0.300013C2.41195 0.299762 2.42945 0.303048 2.44577 0.309673C2.46209 0.316295 2.47695 0.326139 2.48944 0.33863L9.28654 7.13837L9.49868 7.35058L9.71085 7.13841L16.5106 0.338673C16.5353 0.313958 16.5689 0.300072 16.6038 0.300072C16.6388 0.300072 16.6723 0.313958 16.697 0.338673L18.6614 2.303C18.6861 2.32773 18.7 2.36127 18.7 2.39624C18.7 2.43118 18.6861 2.46469 18.6614 2.48942C18.6614 2.48943 18.6614 2.48945 18.6614 2.48947L11.8616 9.28656L11.6494 9.49869L11.8616 9.71086L18.6614 16.5106C18.6861 16.5353 18.7 16.5689 18.7 16.6038C18.7 16.6388 18.6861 16.6723 18.6614 16.697C18.6614 16.697 18.6614 16.697 18.6614 16.6971Z"
                    stroke="#C1ECFB"
                    stroke-width="0.6"
                  />
                  <path
                    d="M2.303 0.33863L2.303 0.338634L0.338616 2.303C0.338612 2.30301 0.338607 2.30301 0.338603 2.30301C0.313889 2.32774 0.3 2.36127 0.3 2.39624C0.3 2.43118 0.313867 2.46469 0.338562 2.48942C0.33858 2.48944 0.338598 2.48945 0.338616 2.48947L7.13836 9.28656L7.35057 9.49869L7.1384 9.71086L0.338641 16.5106C0.31392 16.5353 0.300038 16.5689 0.300038 16.6038C0.300038 16.6388 0.313933 16.6723 0.338643 16.6971L2.30298 18.6614C2.32773 18.6861 2.36127 18.7 2.39622 18.7C2.43114 18.7 2.46466 18.6861 2.4894 18.6614C2.48942 18.6614 2.48944 18.6614 2.48946 18.6614L9.28654 11.8617L9.49868 11.6494L9.71085 11.8616L16.5106 18.6613C16.5106 18.6614 16.5106 18.6614 16.5106 18.6614C16.5354 18.6861 16.5689 18.6999 16.6038 18.6999C16.6388 18.6999 16.6723 18.6861 16.697 18.6614L2.303 0.33863ZM2.303 0.33863C2.32726 0.314369 2.36001 0.300523 2.39429 0.300014L2.303 0.33863ZM18.6614 16.6971L16.697 18.6613L2.39432 0.300013C2.41195 0.299762 2.42945 0.303048 2.44577 0.309673C2.46209 0.316295 2.47695 0.326139 2.48944 0.33863L9.28654 7.13837L9.49868 7.35058L9.71085 7.13841L16.5106 0.338673C16.5353 0.313958 16.5689 0.300072 16.6038 0.300072C16.6388 0.300072 16.6723 0.313958 16.697 0.338673L18.6614 2.303C18.6861 2.32773 18.7 2.36127 18.7 2.39624C18.7 2.43118 18.6861 2.46469 18.6614 2.48942C18.6614 2.48943 18.6614 2.48945 18.6614 2.48947L11.8616 9.28656L11.6494 9.49869L11.8616 9.71086L18.6614 16.5106C18.6861 16.5353 18.7 16.5689 18.7 16.6038C18.7 16.6388 18.6861 16.6723 18.6614 16.697C18.6614 16.697 18.6614 16.697 18.6614 16.6971Z"
                    stroke="#1A2B58"
                    stroke-width="0.6"
                  />
                </svg>
              </span>
              <Form
                onSubmit={handleFormSubmit}
                price={price}
                setPrice={setPrice}
                showForm={showForm}
                setShowForm={setShowForm}
              />
            </div>
          </div>
        )}
        <div className="offer-pill">OfferEnds in 2d 6h 3m 35s 5ms</div>
        <div className="payment">
          <p className="price">
            Price: <span>₹{price}</span> MRP ₹<del>25,833 </del>
            <span>39% OFF</span>
          </p>
          <div className="taxes">
            <p>(Inclusive of all taxes)</p>{" "}
            <span className="dark-pill">You Saved ₹10,333</span>
          </div>
          <div className="payment-option">
            <p>
              or Pay ₹3875 now. Rest in% interst EMIs{" "}
              <span style={{ height: "50px" }}>
                <svg
                  width="44"
                  height="14"
                  viewBox="0 0 44 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_94_1571)">
                    <path
                      d="M14.598 5.44329L14.1701 6.26455C13.6985 6.00773 13.2631 5.86867 12.9367 5.86867C12.7117 5.86867 12.5521 5.95642 12.5521 6.13972C12.5521 6.6823 14.6126 6.41836 14.6051 7.79674C14.6051 8.61054 13.9017 9.05777 12.9585 9.05777C12.3056 9.05777 11.6745 8.86719 11.2028 8.50059L11.6019 7.69411C12.0444 8.00936 12.5521 8.18534 12.9875 8.18534C13.2342 8.18534 13.4154 8.09741 13.4154 7.91415C13.4154 7.33479 11.3913 7.63547 11.3987 6.24981C11.3987 5.43601 12.0806 4.99609 12.9875 4.99609C13.5534 4.99609 14.1191 5.15736 14.598 5.44329Z"
                      fill="#014751"
                    />
                    <path
                      d="M19.0084 6.51374V9.00642H17.7606V6.86573C17.7606 6.40379 17.4921 6.11786 17.0715 6.11786C16.6144 6.11786 16.3241 6.44782 16.2735 6.91705V9.00642H15.0183V5.0547H16.2735V5.69994C16.549 5.238 16.999 5.00352 17.5792 4.99609C18.4425 4.99609 19.0084 5.58999 19.0084 6.51374Z"
                      fill="#014751"
                    />
                    <path
                      d="M21.837 7.66496V7.31293H21.0463C20.669 7.31293 20.4805 7.44492 20.4805 7.73814C20.4805 8.02424 20.6837 8.20737 21.0317 8.20737C21.4236 8.20737 21.7573 7.9875 21.837 7.66496ZM23.0702 6.42596V9.00659H21.8443V8.55211C21.5905 8.88935 21.1768 9.0652 20.6473 9.0652C19.8131 9.0652 19.3053 8.55211 19.3053 7.82623C19.3053 7.07832 19.8348 6.63858 20.8069 6.63112H21.837V6.57251C21.837 6.18392 21.5832 5.9493 21.0754 5.9493C20.7489 5.9493 20.3208 6.06651 19.9073 6.27926L19.5519 5.44346C20.1614 5.15753 20.7125 4.99609 21.3654 4.99609C22.4392 4.99609 23.0631 5.53139 23.0702 6.42596Z"
                      fill="#014751"
                    />
                    <path
                      d="M26.7036 7.01285C26.7036 6.41164 26.3481 5.98647 25.8258 5.98647C25.3182 5.98647 24.9627 6.41164 24.9627 7.01285C24.9627 7.62878 25.3182 8.04652 25.8258 8.04652C26.3481 8.04652 26.7036 7.62132 26.7036 7.01285ZM27.9662 7.04943C27.9662 8.25182 27.2553 9.05088 26.1595 9.05088C25.652 9.05088 25.2382 8.84558 24.9627 8.47915V10.4293H23.7076V5.05529H24.9627V5.57584C25.2382 5.21656 25.6372 5.01123 26.1307 5.01123C27.2335 5.01123 27.9662 5.82503 27.9662 7.04943Z"
                      fill="#014751"
                    />
                    <path
                      d="M34.8578 6.62448V9.00725H34.2919V6.77847C34.2919 6.08933 33.8928 5.68602 33.2325 5.68602C32.4419 5.70802 31.9849 6.27992 31.9849 7.10843V9.00725H31.4118V6.77847C31.4118 6.08933 31.0201 5.68602 30.3526 5.68602C29.5691 5.70802 29.0974 6.27992 29.0974 7.10843V9.00725H28.5386V5.14344H29.0974V6.01598C29.3514 5.4148 29.8665 5.12887 30.5557 5.12158C31.2738 5.12158 31.7672 5.49543 31.9269 6.13322C32.1661 5.45154 32.703 5.12887 33.4359 5.12158C34.3281 5.12158 34.8578 5.69331 34.8578 6.62448Z"
                      fill="#014751"
                    />
                    <path
                      d="M35.8231 5.14269H36.3814V9.0065H35.8231V5.14269ZM36.4688 4.03553C36.4688 4.26287 36.309 4.43142 36.0987 4.43142C35.8884 4.43142 35.7286 4.26287 35.7286 4.03553C35.7286 3.80836 35.8884 3.63965 36.0987 3.63965C36.309 3.63965 36.4688 3.80836 36.4688 4.03553Z"
                      fill="#014751"
                    />
                    <path
                      d="M40.9654 6.62448V9.00725H40.3996V6.77847C40.3996 6.09662 39.9933 5.69331 39.3185 5.69331C38.5642 5.70073 38.1 6.19911 38.0346 6.93228V9.00725H37.4685V5.14344H38.0346V5.99398C38.3031 5.40734 38.8178 5.12887 39.5142 5.12158C40.4284 5.12158 40.9654 5.69331 40.9654 6.62448Z"
                      fill="#014751"
                    />
                    <path
                      d="M43.9115 8.74284C43.643 8.92611 43.3528 9.02877 43.0481 9.03623C42.4897 9.03623 42.076 8.69895 42.076 7.93633V5.72958H41.5248V5.26763H42.076V4.24854H42.6347V5.26763L43.8461 5.26035V5.72958H42.6347V7.83366C42.6347 8.30306 42.8161 8.47891 43.1425 8.47891C43.3382 8.47891 43.5414 8.41285 43.752 8.2809L43.9115 8.74284Z"
                      fill="#014751"
                    />
                    <path
                      d="M2.1941 5.21618C1.78966 4.08636 2.20131 3.17784 2.49805 2.72064C2.89748 2.10519 3.52576 1.71327 4.02927 1.56689C4.03053 2.32619 4.02943 3.58814 4.02896 3.962C3.71544 4.05484 2.80013 4.38528 2.1941 5.21618ZM4.17898 0.854329C3.42669 1.10273 2.69306 1.64847 2.11509 2.38813C1.38491 3.28049 0.970597 4.36328 0.917142 5.52367L0.916672 5.54173C0.914007 5.60242 0.91244 5.66325 0.911969 5.72329L0.911499 5.77067C0.911499 5.83071 0.912753 5.89041 0.914948 5.95014L0.915418 5.96947C0.995208 8.1496 2.42093 10.0891 4.46381 10.7956L4.64769 10.8592V7.07159L4.5237 7.05794C4.32021 7.0356 4.11768 6.99014 3.92189 6.92315C3.32025 6.71656 2.80342 6.3088 2.45777 5.77067C2.80467 5.23014 3.32386 4.82191 3.92848 4.61579C4.12176 4.5499 4.32177 4.50539 4.5237 4.48336L4.64769 4.46975V0.682129L4.46381 0.745654C4.36802 0.778606 4.26896 0.816467 4.17898 0.854329Z"
                      fill="#AFE137"
                    />
                    <path
                      d="M6.0572 12.7977C6.05595 12.0384 6.0572 10.7764 6.05734 10.4025C6.371 10.3097 7.2865 9.97925 7.89205 9.14852C8.2971 10.2782 7.88514 11.1865 7.58841 11.6441C7.18946 12.2592 6.56085 12.6511 6.0572 12.7977ZM9.17183 8.41474L9.17088 8.39493C9.09158 6.2151 7.66584 4.2756 5.6228 3.5689L5.43909 3.50537V7.29314L5.56308 7.30659C5.76656 7.32893 5.96893 7.37426 6.16457 7.44124C6.7662 7.64797 7.28304 8.05559 7.6287 8.5939C7.28179 9.13456 6.76261 9.54283 6.15813 9.74878C5.96487 9.81466 5.76484 9.85917 5.56308 9.88134L5.43909 9.89482V13.6827L5.6228 13.619C5.72235 13.5844 5.82047 13.5468 5.90765 13.5104C6.66008 13.2617 7.39372 12.7158 7.97138 11.9763C8.7017 11.084 9.11586 10.0013 9.16949 8.8396L9.16962 8.82266C9.17247 8.76166 9.17416 8.70115 9.17464 8.63317L9.17511 8.5939C9.17511 8.53403 9.17386 8.47412 9.17183 8.41474Z"
                      fill="#AFE137"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_94_1571">
                      <rect
                        width="43"
                        height="13"
                        fill="white"
                        transform="translate(0.911499 0.682129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </p>
            <p>UPI & Cards Accespted, Online approval in 2 minutes</p>
          </div>
          <div className="payment-methods">
            <div className="card">
              <div className="head">
                <h4>No cost EMI from ₹2583/month</h4>
              </div>
              <div className="links">
                <span>
                  <img src={IciciLogo} alt="img" />
                </span>

                <a href="#!">View Plans</a>
              </div>
            </div>
            <div className="card">
              <div className="head">
                <h4>Save up to ₹775</h4>
              </div>
              <div className="links">
                <span>
                  <img src={GpayLogo} alt="gpay" />
                </span>

                <a href="#!">View Offers</a>
              </div>
            </div>
          </div>
          <p>
            Secured by{" "}
            <svg
              width="54"
              height="12"
              viewBox="0 0 54 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3227 4.83281C13.2404 5.13944 13.081 5.3645 12.8443 5.5082C12.6074 5.65187 12.2752 5.72385 11.8466 5.72385H10.4849L10.9629 3.9419H12.3246C12.7528 3.9419 13.0469 4.01375 13.2066 4.15742C13.366 4.30125 13.4049 4.52634 13.3227 4.83281ZM14.7328 4.79441C14.9059 4.14961 14.8341 3.65456 14.5175 3.30969C14.2009 2.96482 13.646 2.79248 12.8536 2.79248H9.81402L7.98462 9.6129H9.46134L10.1989 6.8636H11.1674C11.3845 6.8636 11.5554 6.89878 11.6805 6.96903C11.8057 7.03942 11.8791 7.16399 11.9017 7.34257L12.1651 9.6129H13.7474L13.4907 7.49597C13.4384 7.02335 13.2219 6.74554 12.8415 6.66256C13.3265 6.52222 13.7327 6.28886 14.0599 5.96312C14.3868 5.63755 14.6113 5.24807 14.7328 4.79441Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3221 7.17043C18.1987 7.63014 18.0086 7.98152 17.752 8.22411C17.495 8.46687 17.1875 8.58811 16.8298 8.58811C16.465 8.58811 16.2175 8.46847 16.0871 8.2289C15.956 7.98949 15.9516 7.64319 16.0734 7.18953C16.1949 6.73621 16.3887 6.3818 16.6556 6.12612C16.9222 5.87094 17.2344 5.74305 17.5925 5.74305C17.9503 5.74305 18.1926 5.86619 18.3183 6.11197C18.4439 6.35775 18.4455 6.71056 18.3221 7.17043ZM18.9694 4.7564L18.7845 5.44614C18.7044 5.19701 18.5498 4.99916 18.3208 4.8523C18.0916 4.70544 17.8074 4.63184 17.4688 4.63184C17.0533 4.63184 16.6537 4.73889 16.2704 4.95282C15.8871 5.16688 15.552 5.4686 15.2653 5.85805C14.9787 6.24767 14.7685 6.69146 14.6349 7.18953C14.5013 7.6878 14.4745 8.12681 14.5549 8.5067C14.6352 8.88678 14.8093 9.1789 15.0775 9.38326C15.3454 9.58779 15.6904 9.68973 16.1123 9.68973C16.4509 9.68973 16.7736 9.61951 17.0798 9.479C17.3859 9.33868 17.6458 9.14372 17.8597 8.89472L17.6668 9.61313H19.0954L20.398 4.7564H18.9694Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.5344 4.75635H21.3826L21.0924 5.83889H23.5086L20.314 8.5976L20.0414 9.61307H24.3275L24.6179 8.53069H22.0293L25.2723 5.73343L25.5344 4.75635Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.1899 7.16087C29.0614 7.63968 28.871 7.9976 28.6191 8.23384C28.3672 8.47006 28.0623 8.58809 27.7045 8.58809C26.9564 8.58809 26.7102 8.1126 26.9654 7.16087C27.0923 6.68824 27.2836 6.33224 27.5394 6.09284C27.7954 5.85327 28.1054 5.73348 28.4698 5.73348C28.8276 5.73348 29.069 5.85327 29.1934 6.09284C29.3177 6.33224 29.3168 6.68824 29.1899 7.16087ZM30.0257 4.93831C29.6969 4.73408 29.2769 4.63184 28.7654 4.63184C28.2476 4.63184 27.768 4.73408 27.3264 4.93831C26.8847 5.14283 26.5087 5.43658 26.1985 5.81965C25.8878 6.20289 25.664 6.64987 25.5269 7.16087C25.3898 7.67186 25.3738 8.11868 25.4791 8.50192C25.584 8.88516 25.8021 9.1789 26.1344 9.38326C26.4663 9.58779 26.8911 9.68973 27.4089 9.68973C27.9204 9.68973 28.3952 9.58779 28.8337 9.38326C29.2715 9.1789 29.6462 8.88516 29.9568 8.50192C30.267 8.11868 30.4909 7.67186 30.628 7.16087C30.7651 6.64987 30.7811 6.20289 30.6762 5.81965C30.5709 5.43658 30.3541 5.14283 30.0257 4.93831Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.9679 7.17043C44.8445 7.63014 44.6544 7.98152 44.3977 8.22411C44.141 8.46687 43.833 8.58811 43.4752 8.58811C43.111 8.58811 42.8633 8.46847 42.7328 8.2289C42.6018 7.98949 42.5973 7.64319 42.7191 7.18953C42.8406 6.73621 43.0345 6.3818 43.3014 6.12612C43.568 5.87094 43.8802 5.74305 44.2382 5.74305C44.596 5.74305 44.8384 5.86619 44.964 6.11197C45.0897 6.35775 45.0913 6.71056 44.9679 7.17043ZM45.6152 4.7564L45.4302 5.44614C45.3502 5.19701 45.1955 4.99916 44.9666 4.8523C44.7373 4.70544 44.4532 4.63184 44.1145 4.63184C43.699 4.63184 43.2995 4.73889 42.9162 4.95282C42.5329 5.16688 42.1977 5.4686 41.9111 5.85805C41.6244 6.24767 41.4142 6.69146 41.2806 7.18953C41.147 7.6878 41.1205 8.12681 41.2006 8.5067C41.2809 8.88678 41.4548 9.1789 41.7232 9.38326C41.9911 9.58779 42.3361 9.68973 42.758 9.68973C43.0966 9.68973 43.4194 9.61951 43.7255 9.479C44.0316 9.33868 44.2915 9.14372 44.5055 8.89472L44.3126 9.61313H45.7411L47.0438 4.7564H45.6152Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.1193 6.05893L35.4835 4.73698C35.3597 4.67311 35.1958 4.64111 34.9914 4.64111C34.6652 4.64111 34.3511 4.7225 34.0485 4.88544C33.7886 5.02523 33.5673 5.22146 33.3805 5.46732L33.5699 4.75543L33.1563 4.75612H32.1417L30.8291 9.61281H32.2774L32.9582 7.07441C33.0574 6.70406 33.2354 6.4151 33.4927 6.20755C33.7494 6 34.0699 5.89613 34.4535 5.89613C34.6901 5.89613 34.9117 5.95044 35.1193 6.05893Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.1508 7.18937C39.029 7.64303 38.8402 7.98933 38.5845 8.22873C38.3281 8.4683 38.0213 8.58792 37.6635 8.58792C37.3054 8.58792 37.0615 8.46671 36.9317 8.22395C36.8016 7.98136 36.7984 7.63011 36.9218 7.17024C37.0452 6.7104 37.2372 6.35756 37.498 6.11177C37.7589 5.86599 38.0685 5.74285 38.4266 5.74285C38.778 5.74285 39.0169 5.87078 39.1434 6.12612C39.2697 6.38161 39.2723 6.73618 39.1508 7.18937ZM40.1629 4.95263C39.8941 4.7387 39.5519 4.63184 39.1368 4.63184C38.7723 4.63184 38.4253 4.71482 38.0969 4.88081C37.7675 5.0471 37.5006 5.27345 37.2959 5.56095L37.3005 5.52909L37.5438 4.75555H37.2638V4.75624H36.13L35.77 6.09927C35.7659 6.11488 35.7624 6.12945 35.7582 6.14522L34.2732 11.6821H35.7212L36.469 8.89472C36.5423 9.14353 36.6948 9.33849 36.9257 9.47883C37.1565 9.61931 37.4413 9.68957 37.7802 9.68957C38.2021 9.68957 38.6033 9.58762 38.9843 9.3831C39.3651 9.17887 39.6961 8.88659 39.9767 8.50654C40.2576 8.12679 40.4649 7.68761 40.5985 7.18937C40.7321 6.69127 40.7599 6.2475 40.6824 5.85788C40.6049 5.46841 40.4314 5.16672 40.1629 4.95263Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M53.04 4.75769L53.0409 4.75635H52.1638C52.1358 4.75635 52.111 4.75714 52.0854 4.75769H51.6302L51.3974 5.0817C51.3787 5.10611 51.3601 5.13068 51.34 5.15918L51.3146 5.1967L49.4647 7.77073L49.0811 4.75635H47.5657L48.3331 9.33686L46.6384 11.6822H46.6867H47.552H48.1482L48.5589 11.101C48.571 11.0837 48.5813 11.0695 48.5943 11.0512L49.0735 10.3724L49.0873 10.3529L51.2317 7.31589L53.0385 4.7597L53.0409 4.75769H53.04Z"
                fill="#072654"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.26344 3.57389L3.82996 5.16762L6.31035 3.56493L4.68826 9.61145L6.3355 9.61296L8.73177 0.682129L4.26344 3.57389Z"
                fill="#3395FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.59357 7.07119L0.911621 9.61306H4.2881C4.2881 9.61306 5.66916 4.44338 5.66954 4.44189C5.66825 4.44272 1.59357 7.07119 1.59357 7.07119Z"
                fill="#072654"
              />
            </svg>
          </p>
        </div>
        <div>
          <button style={{ width: "100%", textAlign: "left" }}>
            {" "}
            Exciting Offers{" "}
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.2651 4.03568C25.4603 3.84042 25.4603 3.52383 25.2651 3.32857L22.0831 0.146593C21.8878 -0.0486696 21.5712 -0.0486696 21.376 0.146593C21.1807 0.341855 21.1807 0.658437 21.376 0.853699L24.2044 3.68213L21.376 6.51055C21.1807 6.70582 21.1807 7.0224 21.376 7.21766C21.5712 7.41292 21.8878 7.41292 22.0831 7.21766L25.2651 4.03568ZM0.911499 4.18213L24.9115 4.18213L24.9115 3.18213L0.911499 3.18213L0.911499 4.18213Z"
                fill="#1A2B58"
              />
            </svg>
          </button>
        </div>
        <div className="cta">
          <div className="number-input">
            <button className="control" onclick={decrement}>
              -
            </button>
            <input type="number" id="num" value="1" />
            <button className="control" onclick={increment}>
              +
            </button>
          </div>
          <div className="" style={{ width: "100%" }}>
            <button className="cart">Add to cart</button>
          </div>
        </div>
        <div>
          <button className="demo">
            <span>
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4062 11.134C7.79025 11.134 9.1743 11.137 10.5584 11.133C11.611 11.1301 12.4064 10.5098 12.6201 9.52639C12.6557 9.36266 12.6681 9.19052 12.6686 9.02233C12.6715 6.79242 12.6735 4.562 12.6691 2.33209C12.6671 1.2661 11.9943 0.448431 10.9798 0.257988C10.8913 0.24117 10.7997 0.233255 10.7097 0.233255C7.83922 0.231771 4.96823 0.221878 2.09773 0.237707C1.16134 0.242654 0.402042 0.892634 0.18835 1.8033C0.147293 1.97742 0.133938 2.16193 0.133938 2.34198C0.12998 4.56596 0.13097 6.78994 0.131464 9.01392C0.132454 10.2535 0.997115 11.1281 2.23623 11.133C3.62622 11.1385 5.01621 11.134 6.4062 11.134Z"
                  fill="#CC0000"
                />
                <path
                  d="M18.6919 2.37766C18.6004 2.02102 18.4297 1.71779 18.1057 1.52092C17.7442 1.30129 17.3603 1.26221 16.9829 1.45216C16.5684 1.6609 16.1697 1.9018 15.766 2.13182C15.121 2.49985 14.4799 2.87331 13.8324 3.23738C13.7191 3.30119 13.6711 3.36797 13.6716 3.50252C13.6771 4.95879 13.6766 6.41506 13.6716 7.87084C13.6716 8.0039 13.7147 8.07365 13.8284 8.13894C14.7985 8.69247 15.7784 9.22966 16.7271 9.81732C17.5596 10.3327 18.5381 9.87371 18.6726 9.02636C18.6751 9.01004 18.6845 8.9947 18.6909 8.97937V2.37816L18.6919 2.37766Z"
                  fill="#CC0000"
                />
              </svg>
            </span>
            <span className="live-pill"> • Live</span> Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeSale;
