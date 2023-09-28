import React from "react";


export const Card = ({ symbol, quantity, price, date, ltp, onClick }) => {

  const lp = price+10;
  const cb = price*quantity;
  const mv = lp*quantity;

  return (
    <div style={styles.cardStyle} onClick={onClick}>
      <div style={styles.titleStyle}>{symbol}</div>
      <div style={styles.textStyle}>Everest Bank Limited</div>

      <div style={styles.cardCStyle}>
        <div style={styles.profitStyle}>NPR {mv-cb}</div>
        <div style={styles.profitTextStyle}>Total Profit </div>
      </div>

      <div style={styles.cardRowStyle}>
        <div style={styles.textLtpStyle}>LTP</div>
        <div style={styles.ltpStyle}>NPR.{lp}</div>
        
        <div style={styles.textLtpStyle}>Market Value</div>
        <div style={styles.marketStyle}>NPR.{mv}</div>
      </div>

      <div style={styles.cardRowStyle}>
        <div style={styles.textLtpStyle}>Paid Price</div>
        <div style={styles.priceStyle}>NPR.{price}</div>

        <div style={styles.textLtpStyle}>Cost Basis</div>
        <div style={styles.costBasisStyle}>NPR.{cb}</div>
      </div>
      
      <div style={styles.quantityStyle}>{quantity}</div>
      <div style={styles.textStyle}>Quantity</div>

      <div style={styles.quantityStyle}>{date}</div>
      <div style={styles.textStyle}>Date</div>
    </div>
  );
};

const styles = {
  cardStyle: {
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: 500,
    cursor: "pointer",
  },

  cardRowStyle: {
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    width: 460,
    cursor: "pointer",
    marginBottom: "5px",
  },
  cardCStyle: {
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#32CD30",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: 460,
    cursor: "pointer",
    marginBottom: "5px",
  },

  titleStyle: {
    color: "#6315eb",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  descriptionStyle: {
    color: "#333",
    fontSize: "16px",
    marginBottom: "5px",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
  },
  priceStyle: {
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px",
    marginRight: "60px",
  },
  costBasisStyle: {
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px",
  },
  
  quantityStyle: {
    color: "#333",
    fontSize: "16px",
    marginTop: "5px",
  },
  textStyle: {
    color: "#808080",
    fontSize: "14px",
    marginBottom: "5px",
  },
  ltpStyle: {
    color: "green",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
    marginRight: "90px",
  },
  marketStyle: {
    color: "green",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
  },
  
  textLtpStyle: {
    color: "#808080",
    fontSize: "16px",
    padding: "10px",
  },

  profitStyle: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  },
  profitTextStyle: {
    color: "white",
    fontSize: "14px",
  },
};

export default Card;
