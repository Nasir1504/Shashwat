import React from "react";
import "./QueryPage.scss";
import Imgg1 from "../../assets/imgs/imggg12.png";

const QuseryPage = ()=>{

    return(
        <div className="query-page-main">
          <div className="qp-cont-outside">
          <div className="qp-cont">
           {/* <h2>QueryPage</h2> */}
           <div className="qp-inside1">
            <p className="qp-p">QUERIES?</p>
            <h2 className="qp-h2">Feel free to <br /> Contact Us</h2>
            <div className="input-btn-div">
              <input className="input-shash" type="number" placeholder="Enter your Contact Number " name="" id="" />
              <button className="input-btn">Get Started</button>
            </div>
           </div>
           <div className="qp-inside2">
            <div className="qp-colored-div">
              <span className="qp2-p">Hey there</span>
              <div className="text-imgg-div">
                <p className="reply-text">Hey. Thanks for contacting. If you <br /> have any question, I'm here to <br />help!</p>
                <img className="reply-img" src={Imgg1} alt="" />
              </div>
            </div>
           </div>
          </div>
          </div>
        </div>
    )
}

export default QuseryPage;