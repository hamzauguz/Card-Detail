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
            <div></div>
            <div>
              <div />
              <div />
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
