import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getStocks } from "../apis/getStocks";

export const Home = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllStocks = async () => {
    setLoading(true);
    try {
      const resp = await getStocks();
      setStocks(resp);
      console.log(resp);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStocks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {stocks.map((card, index) => (
        <div
          key={index}
          style={{ display: "flex", marginBottom: "20px", marginRight: "30px" }}
        >
          <Card
            key={card._id}
            symbol={card.symbol}
            price={card.price}
            quantity={card.quantity}
            date={card.date}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  banner: {
    marginBottom: 20,
  },
};
