import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div class='header'>
            <ul>
                <Link to='/'><li className='menuItems'>Users</li> </Link>
                <Link to='comments'><li className='menuItems'>Comments</li> </Link>
            </ul>
        </div>
    )
}

export default Header
