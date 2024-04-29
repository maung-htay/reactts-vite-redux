import React from 'react'

type PostsProps = {
    children: React.ReactNode
}

const Posts = ({ children }: PostsProps) => {
    return (
        <section id='shop'>
            <h2>All Blog Post</h2>
            <ul id='products'> {children} </ul>
        </section>
    )
}

export default Posts