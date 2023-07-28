import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiencesData from "./data"

function App() {
  const cards = experiencesData.map(experience => {
    return (
      <Card
        key={experience.key}
        experience={experience}
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
