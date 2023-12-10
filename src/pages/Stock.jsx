import React from "react";
import { useStockContext } from "../components/StockContextContainer";
import { useParams } from "react-router-dom";

export default function Stock() {
  const { stocks } = useStockContext();
  const { symbol } = useParams();
  const [targetStock] = stocks.filter((stock) => stock.symbol == symbol);

  console.log(targetStock);
  
  return (
    <div>
      <h3>Name: {targetStock.name} | {targetStock.symbol}</h3>
      <h3>Price: {targetStock.lastPrice + targetStock.change}</h3>
      
    </div>
    
  );
}