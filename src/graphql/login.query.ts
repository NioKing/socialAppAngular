import { gql } from "apollo-angular";

export const USER_LOGIN = gql`
mutation($email:String!, $password:String!) {
  login(loginUserInput: {
    email: $email,
    password: $password
  })
  {
    access_token
  }
}
`