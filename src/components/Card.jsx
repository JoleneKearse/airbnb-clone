import KatieZaferes from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

const Card = () => {
  return (
    <section className="container">
      <div className="section-img">
        <img src={KatieZaferes} className="section-img-thumbnail" alt="Katie Saferes swimming for the USA" />
        <p className="section-img-label">sold out</p>
      </div>
      <div className="section-info">
        <div className="section-info-details">
          <img src={star} alt="" />
          <p className="section-info-details-rating">5.0</p>
          <p className="section-info-details-customers">(6)</p>
          <p className="section-info-details-country"><span className="section-info-details-dot">&#x2022; </span>USA</p>
        </div>
        <p className="section-info-blurb">Life lessons with Katie Zaferes</p>
        <p className="section-info rate"><span className="section-info-pricing">From $136</span> / person</p>
      </div>
    </section>
  )
}

export default Card