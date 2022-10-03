export interface Post {
    id: number;
    profile_id: number;
    written_text: string;
    media_url?: string;
    created_at: Date
}