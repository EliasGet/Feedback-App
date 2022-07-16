import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// This component will show the number of feedback items and calculate the average rating

function FeedbackStats() {

    //extracting the feedback state from the FeedbackContext component
    const { feedback } = useContext(FeedbackContext)

    let sum = 0;

    feedback.forEach((item) => {
        sum += item.rating;
    });

    let average = sum / feedback.length;


    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
        </div>
    )
}

export default FeedbackStats