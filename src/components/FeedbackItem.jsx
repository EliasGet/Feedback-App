import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

// the item and handleDelete props are passed from FeedbackList component

function FeedbackItem({ item }) {

    //extracting the deleteFeedback & updateFeedback functions from the 
    //FeedbackContext component
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{item.text}</div>

        </Card>
    )
}

export default FeedbackItem