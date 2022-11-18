import { gql } from "apollo-angular";

export const GET_POSTS = gql`
query {
   posts{
    id
    written_text
    created_at
    media_url
    profile_id
    likes {
      id
      post_id
      profile_id
      created_time
    }
    comments {
      comment_text
      id
      created_time
    }
  }
}`