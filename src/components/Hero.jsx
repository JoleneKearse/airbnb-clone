import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <img src={hero} className="hero-img" alt="people enjoying their airbnb experiences" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-intro">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero