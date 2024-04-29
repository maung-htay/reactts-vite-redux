import React, { useState } from 'react'
import Cart from './Cart'

const Header = () => {
    const [cartIsVisible, setCartIsVisible] = useState(false)

    const handleOpenCartClick = () => {
        setCartIsVisible(true)
    }
    const handleCloseCartClick = () => {
        setCartIsVisible(false)
    }

    return (
        <>
            {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
            <header id='main-header'>
                <div id='main-title'>
                    <h1>My Blog</h1>

                </div>
                <p>
                    <button onClick={handleOpenCartClick}>All Liked Post</button>
                </p>
            </header>
        </>
    )
}

export default Header