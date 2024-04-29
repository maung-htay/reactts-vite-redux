import React from 'react'
import { createPortal } from 'react-dom'
import CartItem from './CartItem'

type CartProps = {
    onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
    return createPortal(
        <>
            <div className='cart-backdrop'></div>
            <dialog id="cart-model" open>
                <h2>Your liked post</h2>
                <CartItem />
                <p id='cart-actions'>
                    <button onClick={onClose}>Close</button>
                </p>
            </dialog>
        </>,
        document.getElementById('model')!
    )
}

export default Cart