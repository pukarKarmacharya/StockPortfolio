import React, { useState } from "react";
//import LoginImage from "../assets/svgs/login-illustration.svg";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
//import { TextArea } from "../components/TextArea";
import { buyStock } from "../apis/buyStock";
import { toast } from "react-toastify";
import { COLORS } from "../helpers/constants";

export const BuyStock = () => {
  const [stockData, setStockData] = useState({
    symbol: "",
    price: 0,
    quantity: 0,
    date: "",
  });

  const handleChange = ({ field, value }) => {
    setStockData(() => ({
      ...stockData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform further actions here, such as sending the data to an API or saving it in state.
    console.log("Submitted stock data:", stockData);
    try {
      const resp = await buyStock({
        ...stockData,
        //images: [stockData.images],
      });
      toast("Stock buy succefully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        progressStyle: {
          background: COLORS.primary,
        },
      });
      setStockData({
        symbol: "",
        date: "",
        price: 0,
        quantity: 0,
      });
    } catch (e) {
      console.log("Errorr", e);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}>
          <h1 style={{ textAlign: "center" }}>Buy Stock</h1>
          <TextInput
            placeholder="Stock"
            onTextChange={(text) => {
              handleChange({ field: "symbol", value: text });
            }}
            value={stockData.symbol}
          />
          <TextInput
            type="number"
            placeholder="Price"
            onTextChange={(text) => {
              handleChange({ field: "price", value: text });
            }}
            value={stockData.price}
          />
          <TextInput
            type="number"
            placeholder="Quantity"
            onTextChange={(text) => {
              handleChange({ field: "quantity", value: text });
            }}
            value={stockData.quantity}
          />
          <TextInput
            type="date"
            placeholder="date"
            onTextChange={(text) => {
              handleChange({ field: "date", value: text });
            }}
            value={stockData.date}
          />
          <Button
            style={styles.button}
            label={"Buy Stock"}
            onClick={handleSubmit}
          />
        </div>
      </div>
      
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormContainer: {
    display: "flex",
    flex: 1,
    padding: "40px",
    height: "100%",
    backgroundColor: "rgba(24, 92, 205, 0.31)",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    width: "60%",
    padding: 20,
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: COLORS.primary,
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "60%",
  },
};
