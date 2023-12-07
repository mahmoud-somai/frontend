import React from 'react'
import './SeeMore.css'
import { Link } from 'react-router-dom'

const SeeMore = () => {
  return (
    <div class="book_myCard">
    <div class="book_innerCard">
        <div class="book_frontSide">
            <p class="book_title">Need A Doctor</p>
        </div>
        <div class="book_backSide">
          <Link to={"/booking"}>
            <p class="book_title">Check Doctors</p>
            </Link>
        </div>
    </div>
</div>
  )
}

export default SeeMore

