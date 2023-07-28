import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiencesData from "./data"

function App() {
  const cards = experiencesData.map(experience => {
    return (
      <Card
        key={experience.key}
        coverImg={experience.coverImg}
        rating={experience.stats.rating}
        reviewCount={experience.stats.reviewCount}
        location={experience.location}
        title={experience.title}
        price={experience.price}
        openSpots={experience.openSpots}
      />
    )
  })

  return (
    <>
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}

export default App
