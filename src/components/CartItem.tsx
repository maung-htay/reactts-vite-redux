import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { type PostItem, addToPosts, removeFromPosts } from '../store/post-slice'

const CartItem = () => {
    const postItems = useAppSelector((state) => state.post.posts)

    const dispatch = useAppDispatch()

    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromPosts(id))
    }

    const handleAddToCart = (post: PostItem) => {
        dispatch(addToPosts(post))
    }

    return (
        <div id='cart'>
            {postItems.length === 0 && <p>No posts in cart</p>}
            {postItems.length > 0 && (
                <ul id="cart-items">
                    {postItems.map((post: PostItem) => (
                        <li key={post.id}>
                            <div>
                                <span>{post.title}</span>
                                <span> - {post.likeCount}</span>

                            </div>
                            <div className='cart-item-actions'>
                                <button onClick={() => handleRemoveFromCart(post.id)}> - </button>
                            </div>
                            <button onClick={() => handleAddToCart(post)}>+</button>
                        </li>

                    ))}
                </ul>
            )}
        </div>
    )
}

export default CartItem