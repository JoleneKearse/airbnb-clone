/* eslint-disable react/prop-types */
import star from "../assets/star.png"

const Card = ({ coverImg, rating, reviewCount, location, title, price, openSpots }) => {
  let labelText
  if (!openSpots) {
    labelText = "sold out"
  } else if (location === "Online") {
    labelText = "online"
  }

  return (
    <section className="card">
      <div className="section-img">
        <img src={`../public/${coverImg}`} className="section-img-thumbnail" alt="" />
        {labelText && <p className="section-img-label">{labelText}</p>}
      </div>
      <div className="section-info">
        <div className="section-info-details">
          <img src={star} alt="" />
          <p className="section-info-details-rating">{rating}</p>
          <p className="section-info-details-customers">({reviewCount})</p>
          <p className="section-info-details-country"><span className="section-info-details-dot">&#x2022; </span>{location}</p>
        </div>
        <p className="section-info-blurb">{title}</p>
        <p className="section-info rate"><span className="section-info-pricing">From ${price}</span> / person</p>
      </div>
    </section>
  )
}

export default Card