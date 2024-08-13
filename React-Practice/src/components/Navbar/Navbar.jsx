import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    // const [num, setNum] = useState(0)

    // const increment = () => {
    //     setNum(num + 1)
    // }
    // const decrement = () => {
    //     setNum(num - 1)
    // }
  return (
    <div>
        <nav>
            <ul style = {{display:'flex', listStyle: 'none', alignItems: 'center', gap: 10}}>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/private'> <li>Private</li> </Link>
                <Link to='/contact'> <li>Contact</li> </Link>
            </ul>
        </nav>

        {/* <button onClick={increment}>Increase Number</button>
        {num}
        <button onClick={decrement}>Decrease Number</button> */}
    </div>
  )
}

export default Navbar