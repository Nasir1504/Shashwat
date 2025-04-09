import React from "react";

//styles
import "./nursing-in-germany.scss";

//data
import { DATA } from "./data";

export default function NursingInGermany({ progress, query }) {
  const sValue = Math.floor((progress.Progress + (progress.Page - 1.2)) * 10);

  return (
    <div
      className={
        !query ? "nursing-in-germany-main" : "nursing-in-germany-main-mobile"
      }
    >
      <div className="upper-section">
        <h3
          style={{
            transform: sValue > 2 && "translateY(-35%)",
          }}
        >
          Steps to Apply to
          <br />
          <span>Ausbildung in Germany</span>
        </h3>
      </div>
      {!query ? (
        <div className="lower-section">
          {DATA.map((item, i) => {
            const cardID = i * 2;
            return (
              <div
                className="ng-card"
                key={i}
                style={{
                  transform:
                    cardID < sValue - 4
                      ? "translateY(-35%) scale(0.8)"
                      : cardID >= sValue - 4 && cardID < sValue - 2
                        ? "translateY(-35%) scale(0.8)"
                        : cardID >= sValue - 2 && cardID < sValue
                          ? "translateY(-20%) scale(0.9)"
                          : cardID >= sValue && cardID < sValue + 2
                            ? "translateY(0%) scale(1)"
                            : cardID >= sValue + 4
                              ? "translateY(100%) scale(1)"
                              : "",

                  filter:
                    cardID < sValue - 4
                      ? "blur(2px)"
                      : cardID >= sValue - 4 && cardID < sValue - 2
                        ? "blur(2px)"
                        : cardID >= sValue - 2 && cardID < sValue
                          ? "blur(2px)"
                          : cardID >= sValue && cardID < sValue + 2
                            ? "blur(0px)"
                            : cardID >= sValue + 2
                              ? "blur(0px)"
                              : "",

                  zIndex: `${i}`,
                }}
              >
                <img src={item.imgURL} alt="" className="card-img" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="lower-section">
          {DATA.map((item, i) => {
            const cardID = i * 2;
            return (
              <div
                className="ng-card"
                key={i}
                style={{
                  transform:
                    cardID < sValue - 4
                      ? "translateY(-35%) scale(0.8)"
                      : cardID >= sValue - 4 && cardID < sValue - 2
                        ? "translateY(-35%) scale(0.8)"
                        : cardID >= sValue - 2 && cardID < sValue
                          ? "translateY(-20%) scale(0.9)"
                          : cardID >= sValue && cardID < sValue + 2
                            ? "translateY(0%) scale(1)"
                            : cardID >= sValue + 4
                              ? "translateY(120%) scale(1)"
                              : "",

                  filter:
                    cardID < sValue - 4
                      ? "blur(2px)"
                      : cardID >= sValue - 4 && cardID < sValue - 2
                        ? "blur(2px)"
                        : cardID >= sValue - 2 && cardID < sValue
                          ? "blur(2px)"
                          : cardID >= sValue && cardID < sValue + 2
                            ? "blur(0px)"
                            : cardID >= sValue + 2
                              ? "blur(0px)"
                              : "",

                  zIndex: `${i}`,
                }}
              >
                <img src={item.imgURL2} alt="" className="card-img" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
