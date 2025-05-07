import React from "react";
import ReactDOM from "react-dom/client";
import contacts from "./info.js";

let root = ReactDOM.createRoot(document.getElementById("root"));

function Card(props) {
  return (
    <>
      <div className="contact">
        <div className="card">
          <div className="section1">
            <h3>{props.name}</h3>
          </div>
          <img src={props.img} alt="" />
          <div className="section2">
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.img}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

root.render(
  <>
    <h1 className="h1">My Contacts</h1>
    {contacts.map(createCard)}
  </>
);
