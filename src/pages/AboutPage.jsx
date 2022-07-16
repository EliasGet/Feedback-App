import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this Project</h1>
                <p>This is a react app to leave a feedback on a product or service</p>
                <p>Version: 1.0.0</p>
                <p> <Link to="/">Back to Home</Link> </p>

            </div>
        </Card>
    )
}

export default AboutPage