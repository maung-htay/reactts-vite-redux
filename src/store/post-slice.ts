import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type PostItem = {
    id: string;
    title: string;
    content: string;
    likeCount: number;
};

type PostState = {
    posts: PostItem[];
};

const initialState: PostState = {
    posts: [],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addToPosts(state, action: PayloadAction<{ id: string, title: string, content: string, count: number }>) {
            const postIndex = state.posts.findIndex((post) => post.id === action.payload.id);
            if (postIndex >= 0) {
                state.posts[postIndex].likeCount += 1;
            } else {
                state.posts.push({ ...action.payload, likeCount: 1 })
            }
        },
        removeFromPosts(state, action: PayloadAction<string>) {
            const postIndex = state.posts.findIndex((post) => post.id === action.payload);
            if (state.posts[postIndex].likeCount === 1) {
                state.posts.splice(postIndex, 1);
            } else {
                state.posts[postIndex].likeCount -= 1;
            }
        },
    },
});

export const { addToPosts, removeFromPosts } = postSlice.actions;
