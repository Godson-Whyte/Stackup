import React, { useState } from 'react'

const Navbar = () => {
    const [num, setNum] = useState(0)

    const increment = () => {
        setNum(num + 1)
    }
    const decrement = () => {
        setNum(num - 1)
    }
  return (
    <div>
        <nav>
            <ul style = {{display:'flex'}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

        <button onClick={increment}>Increase Number</button>
        {num}
        <button onClick={decrement}>Decrease Number</button>
    </div>
  )
}

export default Navbar