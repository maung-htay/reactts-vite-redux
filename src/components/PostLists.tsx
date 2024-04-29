import React, { type PropsWithChildren } from 'react'

// type PostListProps = PropsWithChildren<{
//     title: string
// }>
type PostListsProps = {
    title: string
    children: React.ReactNode

}

const PostLists = ({ title, children }: PostListsProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        </article>
    )
}

export default PostLists