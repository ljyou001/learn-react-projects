import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import cardData from './data.js'

export default function App() {
  // Version 1:
  //
  // const cardElements = cardData.map(card => {
  //   return <Card key={item.id} {...card} />
  // })
  //
  // const cardElements = cardData.map(card => {
  //   return <Card 
  //     key={card.id}
  //     img={card.coverImg}
  //     rating={card.stats.rating}
  //     reviewCount={card.stats.reviewCount}
  //     country={card.location}
  //     title={card.title}
  //     price={card.price}
  //     openSpots={card.openSpots}
  //   />
  // })

  // Version 2:
  const cardElements = cardData.map(card => {
    return <Card 
      key={card.id}
      item={card}
    />
  })
  console.log("aaaa"+cardElements)
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Card 
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
      /> */}
      <section className="cards-list">
        {cardElements}
      </section>
    </>
  )
}

