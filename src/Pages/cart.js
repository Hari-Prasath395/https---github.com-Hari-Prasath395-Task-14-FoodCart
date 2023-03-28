import React, { useState } from "react";
import CartCard from "../Components/cartCard";
import ProductCard from "../Components/productCard";
const data = [
  {
    label: "Idli",
    price: 20,
  },
  {
    label: "Poori",
    price: 40,
  },
  {
    label: "Dosa",
    price: 30,
  },
  {
    label: "Vadai",
    price: 10,
  },
  {
    label: "Tea",
    price: 15,
  },
  {
    label: "Badam Milk",
    price: 30,
  },
  {
    label: "Pongal",
    price: 50,
  },
];

function Cart() {
  const [cart, setCart] = useState([]);
  function handleChange(item = {}) {
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy.push(item);
    }
    setCart(cartCopy);
  }

  function handleCart(item = {}) {
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy = cartCopy.filter((_data) => _data.label !== item.label);
    }
    setCart(cartCopy);
  }
  function checkStatusElement(item = {}) {
    let status = false;
    if (item.label) {
      status =
        cart.filter((_data) => _data.label === item.label).length > 0
          ? true
          : false;
    }
    return status;
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Food Court
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Food
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All Food Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular Food
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div id="food-cart">Cart</div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-8">
            {data.map((element, index) => (
              <ProductCard
                key={index}
                data={element}
                onChange={handleChange}
                disabled={checkStatusElement(element)}
              />
            ))}
          </div>
          <div className="col-lg-4">
            {cart.map((e, i) => (
              <CartCard data={e} onRemove={handleCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
