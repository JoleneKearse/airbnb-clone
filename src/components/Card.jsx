/* eslint-disable react/prop-types */
import star from "../assets/star.png"

const Card = (props) => {
  let labelText
  if (!props.experience.openSpots) {
    labelText = "sold out"
  } else if (props.experience.location === "Online") {
    labelText = "online"
  }

  return (
    <section className="card">
      <div className="section-img">
        <img src={`../public/${props.experience.coverImg}`} className="section-img-thumbnail" alt="" />
        {labelText && <p className="section-img-label">{labelText}</p>}
      </div>
      <div className="section-info">
        <div className="section-info-details">
          <img src={star} alt="" />
          <p className="section-info-details-rating">{props.experience.stats.rating}</p>
          <p className="section-info-details-customers">({props.experience.stats.reviewCount})</p>
          <p className="section-info-details-country"><span className="section-info-details-dot">&#x2022; </span>{props.experience.location}</p>
        </div>
        <p className="section-info-blurb">{props.experience.title}</p>
        <p className="section-info rate"><span className="section-info-pricing">From ${props.experience.price}</span> / person</p>
      </div>
    </section>
  )
}

export default Card