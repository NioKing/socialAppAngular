import { Comment } from './comments.interface'
import { Like } from './likes.interface'
export interface Post {
    id: number;
    profile_id: number;
    written_text: string;
    media_url?: string;
    created_at: string,
    comments?: [
        Comment
    ],
    likes?: [
        Like
    ]
}