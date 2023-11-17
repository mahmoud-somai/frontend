import React from 'react'
import './BookDoc.css'
const BookDoc = () => {
  return (
    <div class="parentDoc">
<div class="divDoc">
    <div class="cardDoc">
    <div class="infos">
        <div class="imageDoc"> </div>
        <div class="info">
            <div>
                <p class="name">
                    JOHN DOE
                </p>
                <p class="function">
                   DENTIST
                </p>
            </div>
            <div class="stats">
                <h3>Time Of Appointment</h3>
                <input type='Time'></input>
                <input type='Date'></input>              
            </div>
        </div>
    </div>
    <button class="request" type="button">
            Take Appointment
        </button>
</div>
</div>
</div>

  )
}

export default BookDoc