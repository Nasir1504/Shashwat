import React, { useState } from "react";

//styles
import "./faq.scss";

//imgs
import Heading from "../../../assets/imgs/faq/bottom-heading.png";

export default function FAQ({ query }) {
  const [barID, setBarID] = useState(0);

  return (
    <div className={!query ? "faq-main" : "faq-main-mobile"}>
      {!query ? (
        <section className="top-section">
          <h3>FAQ</h3>
          <div
            className="bar-one"
            style={{
              height: barID === 1 ? "8vw" : "4vw",
            }}
          >
            <div
              className="top-part"
              style={{
                backgroundColor: barID === 1 ? "#2B2E7C" : "",
              }}
            >
              <p
                style={{
                  color: barID === 1 ? "#fff" : "",
                }}
              >
                Q: Can I Do Ausbildung Without Knowing German?
              </p>

              <button
                style={{
                  transform: barID === 1 && "rotate(180deg)",
                }}
              >
                <span className="span1" />
                <span className="span2" />

                <span
                  className="btn1"
                  onClick={() => {
                    setBarID(1);
                  }}
                  style={{
                    display: barID > 0 ? "none" : "",
                  }}
                />
                <span
                  className="btn2"
                  onClick={() => {
                    setBarID(0);
                  }}
                  style={{
                    display: barID === 0 ? "none" : "",
                  }}
                />
              </button>
            </div>

            <div
              className="bottom-part"
              style={{
                height: barID !== 1 && "0vw",
              }}
            >
              <p
                style={{
                  display: barID !== 1 && "none",
                }}
              >
                A: No, proficiency in German (B1/B2 level) is mandatory as the
                training is conducted in German.
              </p>
            </div>
          </div>
          <div
            className="bar-two"
            style={{
              height: barID === 2 ? "8vw" : "4vw",
            }}
          >
            <div
              className="top-part"
              style={{
                backgroundColor: barID === 2 ? "#2B2E7C" : "",
              }}
            >
              <p
                style={{
                  color: barID === 2 ? "#fff" : "",
                }}
              >
                Q: Do I get paid during Ausbildung?
              </p>

              <button
                style={{
                  transform: barID === 2 && "rotate(180deg)",
                }}
              >
                <span className="span1" />
                <span className="span2" />

                <span
                  className="btn1"
                  onClick={() => {
                    setBarID(2);
                  }}
                  style={{
                    display: barID > 0 ? "none" : "",
                  }}
                />
                <span
                  className="btn2"
                  onClick={() => {
                    setBarID(0);
                  }}
                  style={{
                    display: barID === 0 ? "none" : "",
                  }}
                />
              </button>
            </div>

            <div
              className="bottom-part"
              style={{
                height: barID !== 2 && "0vw",
              }}
            >
              <p
                style={{
                  display: barID !== 2 && "none",
                }}
              >
                A: No, proficiency in German (B1/B2 level) is mandatory as the
                training is conducted in German.
              </p>
            </div>
          </div>
          <div
            className="bar-three"
            style={{
              height: barID === 3 ? "8vw" : "4vw",
            }}
          >
            <div
              className="top-part"
              style={{
                backgroundColor: barID === 3 ? "#2B2E7C" : "",
              }}
            >
              <p
                style={{
                  color: barID === 3 ? "#fff" : "",
                }}
              >
                Q: Is Ausbildung a full-time program?
              </p>
              <button
                style={{
                  transform: barID === 3 && "rotate(180deg)",
                }}
              >
                <span className="span1" />
                <span className="span2" />

                <span
                  className="btn1"
                  onClick={() => {
                    setBarID(3);
                  }}
                  style={{
                    display: barID > 0 ? "none" : "",
                  }}
                />
                <span
                  className="btn2"
                  onClick={() => {
                    setBarID(0);
                  }}
                  style={{
                    display: barID === 0 ? "none" : "",
                  }}
                />
              </button>
            </div>

            <div
              className="bottom-part"
              style={{
                height: barID !== 3 && "0vw",
              }}
            >
              <p
                style={{
                  display: barID !== 3 && "none",
                }}
              >
                A: No, proficiency in German (B1/B2 level) is mandatory as the
                training is conducted in German.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="top-section">
          <h3>FAQ</h3>
          <div
            className="bar-one"
            style={{
              height: barID === 1 ? "24vw" : "12vw",
            }}
          >
            <div
              className="top-part"
              style={{
                backgroundColor: barID === 1 ? "#2B2E7C" : "",
              }}
            >
              <p
                style={{
                  color: barID === 1 ? "#fff" : "",
                }}
              >
                Q: Can I Do Ausbildung Without Knowing German?
              </p>

              <button
                style={{
                  transform: barID === 1 && "rotate(180deg)",
                }}
              >
                <span className="span1" />
                <span className="span2" />

                <span
                  className="btn1"
                  onClick={() => {
                    setBarID(1);
                  }}
                  style={{
                    display: barID > 0 ? "none" : "",
                  }}
                />
                <span
                  className="btn2"
                  onClick={() => {
                    setBarID(0);
                  }}
                  style={{
                    display: barID === 0 ? "none" : "",
                  }}
                />
              </button>
            </div>

            <div
              className="bottom-part"
              style={{
                height: barID !== 1 && "0vw",
              }}
            >
              <p
                style={{
                  display: barID !== 1 && "none",
                }}
              >
                A: No, proficiency in German (B1/B2 level) is mandatory as the
                training is conducted in German.
              </p>
            </div>
          </div>
          <div
            className="bar-two"
            style={{
              height: barID === 2 ? "24vw" : "12vw",
            }}
          >
            <div
              className="top-part"
              style={{
                backgroundColor: barID === 2 ? "#2B2E7C" : "",
              }}
            >
              <p
                style={{
                  color: barID === 2 ? "#fff" : "",
                }}
              >
                Q: Do I get paid during Ausbildung?
              </p>

              <button
                style={{
                  transform: barID === 2 && "rotate(180deg)",
                }}
              >
                <span className="span1" />
                <span className="span2" />

                <span
                  className="btn1"
                  onClick={() => {
                    setBarID(2);
                  }}
                  style={{
                    display: barID > 0 ? "none" : "",
                  }}
                />
                <span
                  className="btn2"
                  onClick={() => {
                    setBarID(0);
                  }}
                  style={{
                    display: barID === 0 ? "none" : "",
                  }}
                />
              </button>
            </div>

            <div
              className="bottom-part"
              style={{
                height: barID !== 2 && "0vw",
              }}
            >
              <p
                style={{
                  display: barID !== 2 && "none",
                }}
              >
                A: No, proficiency in German (B1/B2 level) is mandatory as the
                training is conducted in German.
              </p>
            </div>
          </div>
          <div
            className="bar-three"
            style={{
              height: barID === 3 ? "24vw" : "12vw",
            }}
          >
            <div
              className="top-part"
              style={{
                backgroundColor: barID === 3 ? "#2B2E7C" : "",
              }}
            >
              <p
                style={{
                  color: barID === 3 ? "#fff" : "",
                }}
              >
                Q: Is Ausbildung a full-time program?
              </p>
              <button
                style={{
                  transform: barID === 3 && "rotate(180deg)",
                }}
              >
                <span className="span1" />
                <span className="span2" />

                <span
                  className="btn1"
                  onClick={() => {
                    setBarID(3);
                  }}
                  style={{
                    display: barID > 0 ? "none" : "",
                  }}
                />
                <span
                  className="btn2"
                  onClick={() => {
                    setBarID(0);
                  }}
                  style={{
                    display: barID === 0 ? "none" : "",
                  }}
                />
              </button>
            </div>

            <div
              className="bottom-part"
              style={{
                height: barID !== 3 && "0vw",
              }}
            >
              <p
                style={{
                  display: barID !== 3 && "none",
                }}
              >
                A: No, proficiency in German (B1/B2 level) is mandatory as the
                training is conducted in German.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bottom-section">
        <img src={Heading} alt="" className="bottom-heading" />
        <p>
          Join thousands of students who have found success through Shashwat{" "}
          <br />
          Sprachschule. Start today with expert guidance, German language
          training, and <br />
          personalized support.
        </p>
      </section>
    </div>
  );
}
