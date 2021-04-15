import React from 'react'
import {Link }from 'react-router-dom'

function Landing() {
    return (
        <div className = 'landing'>
            <div className = 'landing_statement--box'>
               <h1 className = 'landing_statement--text' > Welcome to Bold Collections.
                Your one stop shop for all your fashion needs.</h1>

                <Link to = '/listings'>
                    <button className = 'landing__button' >
                         View Products
                    </button>
                </Link>
            </div>
           
        </div>
    )
}

export default Landing
