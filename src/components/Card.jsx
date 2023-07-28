/* eslint-disable react/prop-types */
import star from "../assets/star.png"

const Card = ({ img, label, rating, ratingCount, country, blurb, price }) => {
  return (
    <section className="container">
      <div className="section-img">
        <img src={`../public/${img}`} className="section-img-thumbnail" alt="" />
        <p className="section-img-label">{label}</p>
      </div>
      <div className="section-info">
        <div className="section-info-details">
          <img src={star} alt="" />
          <p className="section-info-details-rating">{rating}</p>
          <p className="section-info-details-customers">({ratingCount})</p>
          <p className="section-info-details-country"><span className="section-info-details-dot">&#x2022; </span>{country}</p>
        </div>
        <p className="section-info-blurb">{blurb}</p>
        <p className="section-info rate"><span className="section-info-pricing">From ${price}</span> / person</p>
      </div>
    </section>
  )
}

export default Card