import { gql } from "apollo-angular";

export const SIGNUP_USER = gql`
mutation($email:String!, $password: String!, $country: String!, $date_of_birth: String!) {
  createUser(createUserInput: {
    email: $email,
    password: $password,
    country: $country,
    date_of_birth: $date_of_birth
  }) {
    id
    email
    country
    date_of_birth
  }
}
`