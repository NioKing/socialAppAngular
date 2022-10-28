import { Friendship } from "./friendship.interface";
import { Like } from "./likes.interface";
import { Post } from "./post.interface";

export interface User {
    id: number;
    email: string;
    password?: string;
    country: string;
    date_of_birth: string;
    posts?: [
        Post
    ];
    user_comments?: [
        Comment
    ];
    user_likes?: [
        Like
    ];
    friends?: [
        Friendship
    ]
}