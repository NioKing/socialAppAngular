import { gql } from "apollo-angular";

export const USER_DATA = gql`
query {
  user {
    id
    email
    country
    date_of_birth
    posts {
      id
      written_text
      created_at
    }
    friends {
      id
      profile_request
      profile_accept
    }
    user_likes {
      id
      post_id
      profile_id
      created_time
    }
    user_comments {
      id
      post_id
      profile_id
      comment_text
      created_time
    }
  }
}
`