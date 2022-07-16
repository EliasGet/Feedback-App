import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';


function RatingSelect({ select }) {

    //state for the selected state
    const [selected, setSelected] = useState(10);
    //importing and extracting the feedbackEdit state from
    //FeedbackContext component
    const { feedbackEdit } = useContext(FeedbackContext)

    // setting the selected rating in order to show it in the ui and
    // setting the the feedbackEdit as the dependency array so that
    // the useEffect renders when the feedbackEdit is changed
    useEffect(() => {
        setSelected(feedbackEdit.item.rating) //this will show the updated rating in the ui
    }, [feedbackEdit])
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        // handling the prop function (select)
        //by default the type of e is string, inorder to change the type
        //in to a number we use the + sign
        select(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
            <li>
                <input
                    type='radio'
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num2'
                    name='rating'
                    value='2'
                    onChange={handleChange}
                    checked={selected === 2}
                />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num3'
                    name='rating'
                    value='3'
                    onChange={handleChange}
                    checked={selected === 3}
                />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num4'
                    name='rating'
                    value='4'
                    onChange={handleChange}
                    checked={selected === 4}
                />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num5'
                    name='rating'
                    value='5'
                    onChange={handleChange}
                    checked={selected === 5}
                />
                <label htmlFor="num5">5</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num6'
                    name='rating'
                    value='6'
                    onChange={handleChange}
                    checked={selected === 6}
                />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num7'
                    name='rating'
                    value='7'
                    onChange={handleChange}
                    checked={selected === 7}
                />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num8'
                    name='rating'
                    value='8'
                    onChange={handleChange}
                    checked={selected === 8}
                />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num9'
                    name='rating'
                    value='9'
                    onChange={handleChange}
                    checked={selected === 9}
                />
                <label htmlFor="num9">9</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num10'
                    name='rating'
                    value='10'
                    onChange={handleChange}
                    checked={selected === 10}
                />
                <label htmlFor="num10">10</label>
            </li>



        </ul>
    )
}

export default RatingSelect