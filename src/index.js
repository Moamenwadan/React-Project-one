import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <span>___</span> FAST REACT PIZZA CO. <span>___</span>
        </h1>
        <h2>Our Menu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia
          assumenda ab dicta veritatis expedita.
        </p>
      </div>
    </header>
  );
}
function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Pizza(props) {
  return (
    <div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img
        src={props.pizzaObj.photoName}
        width="40%"
        height="75%"
        alt={props.pizzaObj.name}
      ></img>
      <div className="right-side">
        <h3>{props.pizzaObj.name}</h3>
        <p className="one">{props.pizzaObj.ingredients}</p>
        <p className="two">
          {props.pizzaObj.soldOut ? "SOLD-OUT" : props.pizzaObj.price}
        </p>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const isOpen = 7;
  const isClosed = 24;
  const what = hour >= isOpen && hour <= isClosed;
  return (
    <footer>
      <div className="container">
        {what ? (
          <Order isOpen={isOpen} isClosed={isClosed} />
        ) : (
          <p>
            the resturant is open from {isOpen} until {isClosed}
          </p>
        )}
      </div>
    </footer>
  );
}
function Order(props) {
  return (
    <>
      <p>the resturant is open until {props.isClosed}</p>
      <button
        style={{
          backgroundColor: "#EDC848",
          padding: "10px 20px",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        Order me
      </button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
