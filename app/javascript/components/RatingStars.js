import React from "react"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(faStar, far)

export default function RatingStars() {
  const Star = () => (
    <div className='solid-star'>
      <span>
        <FontAwesomeIcon icon="star" />
      </span>
    </div>
  )

  const StarTwo = () => (
    <div className='hollow-star'>
      <span>
        <FontAwesomeIcon icon={['far', 'star']} />
      </span>
    </div>
  )

  const StarThree = () => (
    <span>
      <FontAwesomeIcon icon={['far', 'star-half-stroke']} />
    </span>
  )
  return(
    <div className='rating-stars-container'>
      <Star />
      {/* <StarTwo />
      <StarThree /> */}
    </div>
  );
}
