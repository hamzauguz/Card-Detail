import React, { useEffect } from "react";
import leftPhoto from "../../images/bg-main-desktop.png";
import "./Styles.CardDetail.css";

const CardDetail = () => {
  useEffect(() => {
    document.body.className = "carddetail-body";
  }, []);
  return <div></div>;
};

export default CardDetail;
