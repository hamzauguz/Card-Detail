import React, { useEffect, useState } from "react";
import leftPhoto from "../../images/bg-main-desktop.png";
import "./Styles.CardDetail.css";

const CardDetail = () => {
  const [card, setCard] = useState("");

  useEffect(() => {
    document.body.className = "carddetail-body";
  }, []);
  const handleCardDisplay = () => {
    const rawText = [...card.split(" ").join("")]; // Remove old space
    const creditCard = []; // Create card as array
    rawText.forEach((t, i) => {
      if (i % 4 === 0 && i !== 0) creditCard.push(" "); // Add space
      creditCard.push(t);
    });
    return creditCard.join(""); // Transform card array to string
  };

  console.log(card);
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
              <span className="card-number">{card}</span>
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
        <input
          maxLength={19}
          value={handleCardDisplay()}
          onChange={(e) => setCard(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CardDetail;
