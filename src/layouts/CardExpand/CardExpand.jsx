import React, { useState } from "react";
import "./CardExpand.scss";
import { useNavigate } from "react-router-dom";
import { CARD_DATA } from "./cardExpandData";

const CardExpand = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();


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

        {
          CARD_DATA.map((item, i) => {
            return <div
              className="gc0 com-gc"
              style={{
                zIndex: count === i ? 3 : 0,
                transform: `translateX(${i * 25}%)`,
                // clipPath: count === i ? "rct(-100px 450px 380px -1vw)" : "rect(-100px 80px 380px -1vw)"

              }}
              onMouseEnter={() => {
                setCount(i);
              }}
            //  onMouseOut={() => {
            //   setCount(6);
            // }}
            >
              <div
                className="mini-c1"
              >
                <h2>LEVEL</h2>
                <h1>
                  {item.card} <span>{item.no}</span>
                </h1>
              </div>
              <div
                className="mini-c2"
              >
                <p>
                  {item.para}
                </p>
                <div className="duration-box">
                  <h2 className="db1">
                    Duration : <span>{item.duration}</span>
                  </h2>
                  <h2 className="db2">
                    Language : <span>{item.language}</span>
                  </h2>
                </div>
                <button className="shash-btn-cl"
                  onClick={() => navigate(`/course-details/${item.linkTo}`)}
                >Know More</button>
              </div>
            </div>
          })
        }

        {/* <div
          className="gc0 com-gc"
          style={{
            zIndex: count >= 2 && 3,
          }}
          onMouseEnter={() => {
            setCount(0);
          }}
        >
          <div
            className="mini-c1"
          >
            <h2>LEVEL</h2>
            <h1>
              A <span>1</span>
            </h1>
          </div>
          <div
            className="mini-c2"
          >
            <p>
              Build on your A1<br />
              knowledge and improve<br />
              sentence formation, <br />
              grammar accuracy, and<br />
              conversation skills.
            </p>
            <div className="duration-box">
              <h2 className="db1">
                Duration : <span>3 Months</span>
              </h2>
              <h2 className="db2">
                Language : <span>English</span>
              </h2>
            </div>
            <button className="shash-btn-cl"
              onClick={() => navigate("/course-details/a1")}
            >Know More</button>
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default CardExpand;






// {/* First Card----------------------> */}

//       <div
//         className="gc1 com-gc"
//         style={{
//           clipPath: count >= 2 && "rect(-100px 5.25vw 380px -1vw)",
//           zIndex: count >= 2 && 3,
//         }}
//         onMouseEnter={() => {
//           setCount(1);
//         }}
//       >
//         <div
//           className="mini-c1"
//         // style={{filter:(count >2 ) &&"blur(1.5px)"}}
//         >
//           <h2>LEVEL</h2>
//           <h1>
//             A <span>2</span>
//           </h1>
//         </div>
//         <div
//           className="mini-c2"
//           style={{ transform: count >= 2 && "scale(0)" }}
//         >
//           <p>
//             Learn the basics of<br />
//             German language including <br />
//             grammar, vocabulary, <br />
//             and everyday expressions.
//           </p>
//           <div className="duration-box">
//             <h2 className="db1">
//               Duration : <span>3 Months</span>
//             </h2>
//             <h2 className="db2">
//               Language : <span>English</span>
//             </h2>
//           </div>
//           <button className="shash-btn-cl"
//             onClick={() => navigate("/course-details/a2")}
//           >Know More</button>
//         </div>
//       </div>

//       {/* Second Card ------------------------->  */}

//       <div
//         className="gc2 com-gc"
//         style={{
//           clipPath:
//             count === 1
//               ? "rect(-100px 450px 380px 9vw)"
//               : count >= 3
//                 ? "rect(-100px 5.15vw 380px -1vw)"
//                 : "rect(-100px 450px 380px -1vw)",
//         }}
//         onMouseEnter={() => {
//           // if(count === 1 || count ===3)
//           setCount(2);
//         }}
//       >
//         <div
//           className="mini-c21"
//         // style={{filter:(count === 4 || count ===5 ) &&"blur(1.5px)"}}
//         >
//           <h2>LEVEL</h2>
//           <h1>
//             B <span>1</span>
//           </h1>
//         </div>
//         <div
//           className="mini-c22"
//           style={{
//             width: count === 1 && "0vw",
//             transform: count !== 2 && "scale(0)",
//           }}
//         >
//           <p>
//             Strengthen your grammar,<br />
//             vocabulary, and<br />
//             communication skills for<br />
//             everyday German usage.
//           </p>
//           <div className="duration-box">
//             <h2 className="db1">
//               Duration : <span>3 Months</span>
//             </h2>
//             <h2 className="db2">
//               Language : <span>English</span>
//             </h2>
//           </div>
//           <button className="shash-btn-cl"
//             onClick={() => navigate("/course-details/b1")}
//           >Know More</button>
//         </div>
//       </div>

//       {/* Third Card ----------------------------->  */}

//       <div
//         className="gc2 gc3 com-gc"
//         style={{
//           clipPath:
//             count === 1 || count === 2
//               ? "rect(-100px 450px 380px 9vw)"
//               : count >= 4
//                 ? "rect(-100px 5.15vw 380px -1vw)"
//                 : "rect(-100px 450px 380px -1vw)",
//           zIndex: count >= 3 && 5,
//         }}
//         onMouseEnter={() => {
//           // if(count === 2 || count ===4)
//           setCount(3);
//         }}
//       >
//         <div
//           className="mini-c21"
//         // style={{filter:(count === 1 || count ===5 ) &&"blur(1.5px)"}}
//         >
//           <h2>LEVEL</h2>
//           <h1>
//             B <span>2</span>
//           </h1>
//         </div>
//         <div
//           className="mini-c22"
//           style={{
//             width: count < 3 && "0vw",
//             transform: count !== 3 && "scale(0)",
//           }}
//         >
//           <p>
//             Move from B1 to C2<br />
//             with a structured<br />
//             path to fluency and<br />
//             certification.
//           </p>

//           <div className="duration-box">
//             <h2 className="db1">
//               Duration : <span>3 Months</span>
//             </h2>
//             <h2 className="db2">
//               Language : <span>English</span>
//             </h2>
//           </div>
//           <button className="shash-btn-cl"
//             onClick={() => navigate("/course-details/b2")}
//           >Know More</button>
//         </div>
//       </div>

//       {/* Fourth Card --------------------------------->  */}

//       <div
//         className="gc2 gc4 com-gc"
//         style={{
//           clipPath:
//             count < 4
//               ? "rect(-100px 450px 380px 11vw)"
//               : count === 4
//                 ? "rect(-100px 450px 380px -1vw)"
//                 : count === 5 && "rect(-100px 5.15vw 380px -1vw)",
//           zIndex: count >= 4 && 5,
//         }}
//         onMouseEnter={() => {
//           // if(count === 3 || count ===5)
//           setCount(4);
//         }}
//       >
//         <div
//           className="mini-c21"
//         // style={{filter:(count === 1 || count ===2 ) &&"blur(1.5px)"}}
//         >
//           <h2>LEVEL</h2>
//           <h1>
//             C <span>1</span>
//           </h1>
//         </div>
//         <div
//           className="mini-c22"
//           style={{
//             width: count < 4 && "0vw",
//             transform: count !== 4 && "scale(0)",
//           }}
//         >
//           <p>
//             Advance from B1 to c2<br />
//             with a clear, structured<br />
//             path to fluency and<br />
//             certification.
//           </p>
//           <div className="duration-box">
//             <h2 className="db1">
//               Duration : <span>3 Months</span>
//             </h2>
//             <h2 className="db2">
//               Language : <span>English</span>
//             </h2>
//           </div>
//           <button
//             className="shash-btn-cl"
//             onClick={() => navigate("/course-details/c1")}
//           >Know More</button>
//         </div>
//       </div>

//       {/* Fifth Card -------------------------------------->  */}

//       <div
//         className="gc2 gc5 com-gc"
//         style={{
//           clipPath: count !== 5 && "rect(-100px 450px 380px 11vw)",
//           zIndex: count === 5 && 5,
//         }}
//         onMouseEnter={() => {
//           // if(count === 4)
//           setCount(5);
//         }}
//       >
//         <div
//           className="mini-c21"
//         // style={{filter:(count === 1 || count ===2 || count===3 ) &&"blur(1.5px)"}}
//         >
//           <h2>LEVEL</h2>
//           <h1>
//             C <span>2</span>
//           </h1>
//         </div>
//         <div
//           className="mini-c22"
//           style={{
//             width: count !== 5 && "0vw",
//             transform: count !== 5 && "scale(0)",
//           }}
//         >
//           <p>
//             Progress from B1 to<br />
//             C2 with a structured<br />
//             path to fluency and<br />
//             certification.
//           </p>
//           <div className="duration-box">
//             <h2 className="db1">
//               Duration : <span>3 Months</span>
//             </h2>
//             <h2 className="db2">
//               Language : <span>English</span>
//             </h2>
//           </div>
//           <button
//             className="shash-btn-cl"
//             onClick={() => navigate("/course-details/c2")}
//           >Know More</button>
//         </div>
//       </div>