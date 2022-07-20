import { createContext, useState, useEffect } from "react";
import Axios from 'axios'
//This is a context with the feedback state

const FeedbackContext = createContext()

//Setting a state called feedback and passing it to the provider
//Then assigning the provider a varriable called FeedbackProvider 
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => { fetchFeedback() }, [])

    async function fetchFeedback() {
        try {
            const result = await Axios.get('http://localhost:5000/feedback?_sort=id&_order=desc')
            const data = await result.data
            setFeedback(data)
        } catch (error) {
            console.log('ERROR:{error}')
        }
    }

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

    // constructing a async function called addFeedback which accepts newFeedback 
    // object from the FeedbackForm component as a parameter
    // adding feedback
    const addFeedback = async (newFeedback) => {

        const response = await Axios.post('http://localhost:5000/feedback?_sort=id&_order=desc', newFeedback)

        const data = await response.data

        // the spread operator(...) let's us to add the rest of feedbacks, otherwise the setFeedback value will over right the whole thing
        setFeedback([data, ...feedback])
    }

    // {
    //     method: 'POST'
    //     headers: { 'content-type': 'application/json' },
    //     body(newFeedback)
    // }

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