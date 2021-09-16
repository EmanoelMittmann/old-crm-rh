import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const token = useSelector(state => state)

    return (
        <div>
            <h1>TOKEN</h1>
            <p>{token}</p>
        </div>
    )
}

export default Home
