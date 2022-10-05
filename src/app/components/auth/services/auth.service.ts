import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { tap } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { USER_LOGIN } from 'src/app/graphql/login.query';
import { SIGNUP_USER } from 'src/app/graphql/register.mutation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apollo: Apollo
  ) { }

  signIn(email: string, password: string){
    return this.apollo.mutate<{ loginUserInput: User}>(
      {
        mutation: USER_LOGIN,
        variables: {
          email: email,
          password: password
        }
      }
    )
  }

  signUp(email: string, password: string, country: string, date_of_birth: Date) {
    return this.apollo.mutate<{ createUserInput: User}>(
      {
        mutation: SIGNUP_USER,
        variables: {
          email: email,
          password: password,
          country: country,
          date_of_birth: date_of_birth
        }
      }
    )
  }
  
}
