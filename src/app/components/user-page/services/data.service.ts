import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { USER_DATA } from '../../../graphql/user-data.query'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private apollo: Apollo
  ) { }

  getUserData() {
    return this.apollo.watchQuery<{user: User}>({query: USER_DATA}).valueChanges.pipe(map((user) => user.data.user))
  }
}
