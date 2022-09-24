import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      id={contact.id}
      key={contact.phone}
      img={contact.imgURL}
      tel={contact.phone}
      web={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/D4D03AQE8moKtkBP3oA/profile-displayphoto-shrink_800_800/0/1663605283937?e=1669248000&v=beta&t=xMGf3GSDhnqr45-0zj1Nx3Enfl5T-wDe2tK-vwgchrc" />

      {contacts.map(createCard)}

      {/* <Card name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      web={contacts[0].email}
      />

<Card name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      web={contacts[1].email}
      />

<Card name={contacts[2].name}
      img={contacts[2].imgURL}
      tel={contacts[2].phone}
      web={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
