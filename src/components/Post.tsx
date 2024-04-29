import React from 'react'
import { useAppDispatch } from '../store/hooks'
import { addToPosts } from '../store/post-slice'

export type PostProps = {
    id: string
    title: string
    content: string
    date: Date
    count: number
}

const Post = ({ id, title, content, date }: PostProps) => {

    const dispatch = useAppDispatch()

    const handleAddToCart = () => {
        console.log('Liked')
        dispatch(addToPosts({ id, title, content, count: 1 }))
    }

    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{date.toISOString()}</p>
            </div>
            <p className='product-actions'>
                <button onClick={handleAddToCart}>Liked</button>
            </p>
        </article>
    )
}

export default Post