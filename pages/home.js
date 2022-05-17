import React, { useState } from 'react'

const home = () => {
    const [temp, setTemp] = useState(0)
    return (
        <div align="center">
            <h1>How to Forward Port</h1>
            <p>Cerrent state : {temp}</p>
            <button onClick={() => setTemp(temp + 1)}>plus state</button>
        </div>
    )
}

export default home