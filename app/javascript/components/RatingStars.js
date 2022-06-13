import React from "react"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(faStar, faStarHalfStroke, far)

export default function RatingStars() {
  const Star = () => (
    <div className='solid-star'>
      <FontAwesomeIcon icon="star" />
    </div>
  )

  const StarTwo = () => (
    <div className='hollow-star'>
      <FontAwesomeIcon icon={['far', 'star']} />
    </div>
  )

  const StarThree = () => (
    <FontAwesomeIcon icon="star-half-stroke" />
  )
  return(
    <>
      <Star />
      <StarTwo />
      <StarThree />
    </>
  );
}
