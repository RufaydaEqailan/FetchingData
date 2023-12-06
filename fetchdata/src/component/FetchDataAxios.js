import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FetchDataAxios = () => {
    const [state, setstate] = useState([])
    const fetchAxios = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setstate(result.data)
        console.log(result.data)
    }

 
    useEffect(() => {
        fetchAxios()
    }, [])
    return (
        <div>
            {state.map((item) => { return (<h3>{ item.title}</h3>) })}
        </div>
    )
}

export default FetchDataAxios
