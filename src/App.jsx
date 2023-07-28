import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Card 
        img="katie-zaferes.png"
        label="sold out"
        rating="5.0"
        ratingCount={6}
        country="USA"
        blurb="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  )
}

export default App
