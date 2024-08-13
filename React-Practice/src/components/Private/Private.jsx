import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Private = () => {
  return (
    <div>
        <Link to='/private/shop'> <li>Shop</li> </Link>
        <Link to='/private/about'> <li>About</li> </Link>
        <Outlet />
    </div>
  )
}

export default Private