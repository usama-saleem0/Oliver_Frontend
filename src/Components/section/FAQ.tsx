import React, { useEffect, useRef } from "react";
import newm from "../../../src/Assets/Images/new-map.png";

const FAQ: React.FC = () => {
  const itemsRef = useRef<HTMLButtonElement[]>([]);

  const toggleAccordion = (index: number) => {
    const itemToggle = itemsRef.current[index].getAttribute('aria-expanded');
    itemsRef.current.forEach((item, idx) => {
      if (idx !== index) {
        item.setAttribute('aria-expanded', 'false');
      }
    });
    if (itemToggle === 'false') {
      itemsRef.current[index].setAttribute('aria-expanded', 'true');
    }
  };

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      item.addEventListener('click', () => toggleAccordion(index));
    });

    return () => {
      itemsRef.current.forEach((item, index) => {
        // item.removeEventListener('click', () => toggleAccordion(index));
      });
    };
  }, []);

  return (
    <>
      <section className="Dashboard">
        <div className="main-Dashboard">
          <div className="map-box">
            <div className="faq-map-box">
              <div className="faq-box">
                <h4>General Inquiries</h4>
                <div className="accordion">
                  {[...Array(8)].map((_, i) => (
                    <div className="accordion-item" key={i}>
                      <button
                        id={`accordion-button-${i + 1}`}
                        aria-expanded="false"
                        ref={(el) => (itemsRef.current[i] = el!)}
                      >
                        <span className="accordion-title">
                          Lorem ipsum dolor sit amet, consectetur?
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                      </button>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Elementum sagittis vitae et leo duis ut.
                          Ut tortor pretium viverra suspendisse potenti.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="faq-box">
                <h4>Other Information</h4>
                <div className="accordion">
                  {[...Array(8)].map((_, i) => (
                    <div className="accordion-item" key={i}>
                      <button
                        id={`accordion-button-${i + 1}`}
                        aria-expanded="false"
                        ref={(el) => (itemsRef.current[i + 8] = el!)}
                      >
                        <span className="accordion-title">
                          Lorem ipsum dolor sit amet, consectetur?
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                      </button>
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Elementum sagittis vitae et leo duis ut.
                          Ut tortor pretium viverra suspendisse potenti.
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

export default FAQ;