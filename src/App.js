import React from"react"; 
import Navbar from "./Navbar";
import data from "./data";
import Card from "./Card";

function App() {
  const card = data.map(item => {
    return(
        <Card 
          key={item.id}
          {...item}
        />
    );
  });

  return (
    <>
      <Navbar />
      <section className="card-list">
        {card}
      </section>
    </>
  );
};

export default App;
