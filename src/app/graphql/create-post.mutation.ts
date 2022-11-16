import { gql } from "apollo-angular";

export const CREATE_POST = gql`
mutation($written_text: String!) {
  createUserPost(
    createUserPostInput: { written_text: $written_text}
  ) {
    written_text
    profile_id
  }
}

`