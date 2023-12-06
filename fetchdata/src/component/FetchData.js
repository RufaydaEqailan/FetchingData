import React, { useEffect, useState } from 'react'
const FetchData = () => {

  const [state, setstate] = useState([])
  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    }).then(respone => respone.json())
      .then(data => setstate(data))
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {state.map((item) => { return (<h3>{item.title}</h3>) })}
    </div>
  )
}

export default FetchData
