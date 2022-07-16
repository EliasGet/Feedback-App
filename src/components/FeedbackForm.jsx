import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    //state for the text

    const [text, setText] = useState('');

    // state for the ratings or the number selectors this will not show the 
    //selected rating in the ui, the visualization is dealt with in the 
    //RatingSelect Component

    const [rating, setRating] = useState(10);

    // state for the submit button disable functionality

    const [btnDisabled, setbtnDisabled] = useState(true);

    // state for the message

    const [message, setMessage] = useState('');

    // Event handler for the text, button and message   

    //extracting the addFeedback & feedbackEdit function from the 
    //FeedbackContext component
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    // handling the update in the form 
    // setting the the feedbackEdit as the dependency array so that
    // the useEffect renders when the feedbackEdit is changed 
    // we use useEffect because the feedbackForm and feedbackItem are going
    // to communicate   
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setbtnDisabled(false) // enabling the submit button
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating) //this will set the rating to 
            // the form but it will not show it in the ui 
            // it should be set in the RatingSelect component using 
            // the setSelected function
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {

        if (text === '') {
            setbtnDisabled(true)
            setMessage('')
        } else if (text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true)
            setMessage('Text must be atleast 10 characters')
        } else {
            setbtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    // handling the submit button (not using the default event handler of the form element)
    const handleSubmit = (e) => {

        e.preventDefault()
        if (text.trim().length >= 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }
            // assigning the context
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback) // updated feedback
            } else {
                addFeedback(newFeedback) // new feedback
            }

            // seting the text field '' after the feedback is submitted
            setText('')
        }
    }




    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How do you rate your service with us?</h2>
                {/* The select prop is a function because the returned value is
                 needed */}
                <RatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    <input onChange={handleTextChange}
                        type="text"
                        placeholder='Write a review'
                        value={text} />
                    <Button type="submit" version='primary' isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm