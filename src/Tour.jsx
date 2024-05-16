import { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeSingleTour }) => {
  const [readmore, setReadmore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} className="img" alt={name} />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadmore(!readmore)}
          >
            {readmore ? 'Show less' : 'Read more'}
          </button>
        </p>

        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => removeSingleTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  )
}
export default Tour
