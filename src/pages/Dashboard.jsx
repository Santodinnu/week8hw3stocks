import React from "react";
import { useStockContext } from "../components/StockContextContainer";
import { Fragment } from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
  // access to the comp level stock context
  const { stocks } = useStockContext();
  console.log(stocks);
  return (
    <div className="stocks">
      {stocks.map((stock, index) => (
        <Link to={`/stocks/${stock.symbol}`} key={index}>
            
          <li>{stock.name} {stock.symbol}</li>
          
        </Link>
      ))}
    </div>
  );
}