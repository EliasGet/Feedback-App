import React from 'react'

// This is just a styled component

function Card({ children }) {
    return (
        <div className='card'>{children}</div>
    )
}

export default Card