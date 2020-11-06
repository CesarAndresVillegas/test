import React, { useState } from 'react'

export const FetchTest = () => {
    let [data, setData] = useState({})
    const handleClick = () => {
        setData = ({data:null})
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then( resp => resp.json() )
            .then( resp => {
                //setData(data+1)
                const {setup, id, type} = resp
                console.log(setup, id, type)
            })
    }
    return (
        <div>
            <button onClick={handleClick}>holi</button>
        </div>
    )
}
