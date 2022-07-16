import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
//This is a context with the feedback state

const FeedbackContext = createContext()

//Setting a state called feedback and passing it to the provider
//Then assigning the provider a varriable called FeedbackProvider 
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: "This is Feedback Item 1",
        rating: 10,
    }, {
        id: 1,
        text: "This is Feedback Item 2",
        rating: 9,
    }, {
        id: 1,
        text: "This is Feedback Item 3",
        rating: 7,
    },])


    // this state will hold the feedback item which will get updated once
    // the update button is clicked, it holdes the data to be updated
    // then the setFeedbackEdit will handle the actual edit in the 
    // updateFeedback function
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    // deleting feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // constructing a function called addFeedback which accepts newFeedback 
    // object from the FeedbackForm component as a parameter
    // adding feedback
    const addFeedback = (newFeedback) => {
        // giving the object id value a unique id
        newFeedback.id = uuidv4()
        // the spread operator(...) let's us to add the rest of feedbacks, otherwise the setFeedback value will over right the whole thing
        setFeedback([newFeedback, ...feedback])
    }

    //update FeedbackItem (otherwise it adds the new update as a new feedback)
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {
            ...item, ...updItem
        } : item))
        )
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
        <FeedbackContext.Provider value={{
            //states are labeled in white and functions are labeled in purple
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext