import "./App.css";

import React, { useState } from "react";

import Cart from "./Pages/cart";

function App() {
  const [page, setPage] = useState("cart");
  return <div className="App">{page === "cart" && <Cart />}</div>;
}

export default App;
