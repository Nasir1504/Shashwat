import React, { useState } from "react";
import "./CardExpand.scss";

const CardExpand = () => {
  const [count, setCount] = useState(1);

  // console.log(count,"Count");
  return (
    <div className="card-expand-main">
      <div className="card-expand-div1">
        <div className="ced-inner">
          <p className="ced-explore">Explore other</p>
          <h2 className="ced-german">German Courses</h2>
        </div>
      </div>
      <div className="card-expand-div2">
        {/* First Card----------------------> */}

        <div
          className="gc1 com-gc"
          style={{
            clipPath: count >= 2 && "rect(-100px 5.25vw 380px -1vw)",
            zIndex: count >= 2 && 3,
          }}
          onMouseEnter={() => {
            setCount(1);
          }}
        >
          <div
            className="mini-c1"
            // style={{filter:(count >2 ) &&"blur(1.5px)"}}
          >
            <h2>LEVEL</h2>
            <h1>
              A <span>2</span>
            </h1>
          </div>
          <div
            className="mini-c2"
            style={{ transform: count >= 2 && "scale(0)" }}
          >
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam
              tincidunt <br /> tortor placerat urna{" "}
            </p>
            <div className="duration-box">
              <h2 className="db1">
                Duration : <span>3 Months</span>
              </h2>
              <h2 className="db2">
                Language : <span>English</span>
              </h2>
            </div>
            <button className="shash-btn-cl">Know More</button>
          </div>
        </div>

        {/* Second Card ------------------------->  */}

        <div
          className="gc2 com-gc"
          style={{
            clipPath:
              count === 1
                ? "rect(-100px 450px 380px 9vw)"
                : count >= 3
                  ? "rect(-100px 5.15vw 380px -1vw)"
                  : "rect(-100px 450px 380px -1vw)",
          }}
          onMouseEnter={() => {
            // if(count === 1 || count ===3)
            setCount(2);
          }}
        >
          <div
            className="mini-c21"
            // style={{filter:(count === 4 || count ===5 ) &&"blur(1.5px)"}}
          >
            <h2>LEVEL</h2>
            <h1>
              B <span>1</span>
            </h1>
          </div>
          <div
            className="mini-c22"
            style={{
              width: count === 1 && "0vw",
              transform: count !== 2 && "scale(0)",
            }}
          >
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam
              tincidunt <br /> tortor placerat urna{" "}
            </p>
            <div className="duration-box">
              <h2 className="db1">
                Duration : <span>3 Months</span>
              </h2>
              <h2 className="db2">
                Language : <span>English</span>
              </h2>
            </div>
            <button className="shash-btn-cl">Know More</button>
          </div>
        </div>

        {/* Third Card ----------------------------->  */}

        <div
          className="gc2 gc3 com-gc"
          style={{
            clipPath:
              count === 1 || count === 2
                ? "rect(-100px 450px 380px 9vw)"
                : count >= 4
                  ? "rect(-100px 5.15vw 380px -1vw)"
                  : "rect(-100px 450px 380px -1vw)",
            zIndex: count >= 3 && 5,
          }}
          onMouseEnter={() => {
            // if(count === 2 || count ===4)
            setCount(3);
          }}
        >
          <div
            className="mini-c21"
            // style={{filter:(count === 1 || count ===5 ) &&"blur(1.5px)"}}
          >
            <h2>LEVEL</h2>
            <h1>
              B <span>2</span>
            </h1>
          </div>
          <div
            className="mini-c22"
            style={{
              width: count < 3 && "0vw",
              transform: count !== 3 && "scale(0)",
            }}
          >
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam
              tincidunt <br /> tortor placerat urna{" "}
            </p>
            <div className="duration-box">
              <h2 className="db1">
                Duration : <span>3 Months</span>
              </h2>
              <h2 className="db2">
                Language : <span>English</span>
              </h2>
            </div>
            <button className="shash-btn-cl">Know More</button>
          </div>
        </div>

        {/* Fourth Card --------------------------------->  */}

        <div
          className="gc2 gc4 com-gc"
          style={{
            clipPath:
              count < 4
                ? "rect(-100px 450px 380px 11vw)"
                : count === 4
                  ? "rect(-100px 450px 380px -1vw)"
                  : count === 5 && "rect(-100px 5.15vw 380px -1vw)",
            zIndex: count >= 4 && 5,
          }}
          onMouseEnter={() => {
            // if(count === 3 || count ===5)
            setCount(4);
          }}
        >
          <div
            className="mini-c21"
            // style={{filter:(count === 1 || count ===2 ) &&"blur(1.5px)"}}
          >
            <h2>LEVEL</h2>
            <h1>
              C <span>1</span>
            </h1>
          </div>
          <div
            className="mini-c22"
            style={{
              width: count < 4 && "0vw",
              transform: count !== 4 && "scale(0)",
            }}
          >
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam
              tincidunt <br /> tortor placerat urna{" "}
            </p>
            <div className="duration-box">
              <h2 className="db1">
                Duration : <span>3 Months</span>
              </h2>
              <h2 className="db2">
                Language : <span>English</span>
              </h2>
            </div>
            <button className="shash-btn-cl">Know More</button>
          </div>
        </div>

        {/* Fifth Card -------------------------------------->  */}

        <div
          className="gc2 gc5 com-gc"
          style={{
            clipPath: count !== 5 && "rect(-100px 450px 380px 11vw)",
            zIndex: count === 5 && 5,
          }}
          onMouseEnter={() => {
            // if(count === 4)
            setCount(5);
          }}
        >
          <div
            className="mini-c21"
            // style={{filter:(count === 1 || count ===2 || count===3 ) &&"blur(1.5px)"}}
          >
            <h2>LEVEL</h2>
            <h1>
              C <span>2</span>
            </h1>
          </div>
          <div
            className="mini-c22"
            style={{
              width: count !== 5 && "0vw",
              transform: count !== 5 && "scale(0)",
            }}
          >
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam
              tincidunt <br /> tortor placerat urna{" "}
            </p>
            <div className="duration-box">
              <h2 className="db1">
                Duration : <span>3 Months</span>
              </h2>
              <h2 className="db2">
                Language : <span>English</span>
              </h2>
            </div>
            <button className="shash-btn-cl">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExpand;
