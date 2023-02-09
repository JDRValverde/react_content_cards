import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import data from "./data"


// App component that renders the Navbar, Hero, Cards, and Contact components
export default function App() {

  // Map over the data array to create an array of Card components
  const cardElements = data.map(card => {
    return <Cards
      key={card.id}  // Provide a unique key for each card
      card={card}  // Pass the card data as a prop
    //{...card}
    />
  })

  return (
    <div className="App">
      {/* Render the components */}
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
      <Contact />
    </div>
  )
}