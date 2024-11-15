import React, { useEffect, useRef, useState } from "react";
import newm from "../../../src/Assets/Images/new-map.png";

const Sec5 = () => {

  const [activeIndex, setActiveIndex] = useState(null); 
  const toggleAccordion = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <section className="sec5">
      <div className="home-contanir">
        <div className="sec5-box">
          <div className="sec2-tital">
            <h2>Explore Our FAQ Hub</h2>
            <p className="padding">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra posuere.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra posuere.</p>
          </div>
          <div className="faq-home-box">
            <div className="home-faq-box">
              <div className="accordion home-accordion">
                {[...Array(3)].map((_, i) => (
                  <div className="accordion-item home-accordion-item" key={i}>
                    <button
                      id={`accordion-button-${i + 1}`}
                      aria-expanded={activeIndex === i}
                      onClick={() => toggleAccordion(i)}
                    >
                      <span className="accordion-title home-accordion-title">
                        Lorem ipsum dolor sit amet?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className={`accordion-content home-accordion-content ${activeIndex === i ? 'active' : ''}`}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-faq-box">
              <div className="accordion home-accordion">
                {[...Array(3)].map((_, i) => (
                  <div className="accordion-item home-accordion-item" key={i + 8}>
                    <button
                      id={`accordion-button-${i + 8}`}
                      aria-expanded={activeIndex === i + 8}
                      onClick={() => toggleAccordion(i + 8)}
                    >
                      <span className="accordion-title home-accordion-title">
                        Lorem ipsum dolor sit amet, consectetur?
                      </span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className={`accordion-content home-accordion-content ${activeIndex === i + 8 ? 'active' : ''}`}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Sec5;