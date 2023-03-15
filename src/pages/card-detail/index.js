import React, { useEffect } from "react";
import leftPhoto from "../../images/bg-main-desktop.png";
import "./Styles.CardDetail.css";

const CardDetail = () => {
  useEffect(() => {
    document.body.className = "carddetail-body";
  }, []);
  return (
    <div className="card-detail-main">
      <div className="cards-place">
        <div id="front-card" className="front-card">
          <div className="front-card-inside">
            <div className="round-place">
              <div className="full-rounded" />
              <div className="entry-rounded" />
            </div>
            <div className="front-card-bottom">
              <span className="card-number">0000 0000 0000 0000</span>
              <div className="namewithdate">
                <span>JANE APPLESEED</span>
                <span>00/00</span>
              </div>
            </div>
          </div>
        </div>
        <div id="back-card" className="back-card"></div>
      </div>
      <div>
        <input placeholder="fd" />
      </div>
    </div>
  );
};

export default CardDetail;
