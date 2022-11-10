import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, Subject } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { USER_DATA } from '../../../graphql/user-data.query'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<void>()

  constructor(
    private apollo: Apollo
  ) { }

  getUserData() {
    return this.apollo.watchQuery<{user: User}>({query: USER_DATA}).valueChanges.pipe(map((user) => user.data.user))
  }

  sendClickEvent() {
    this.subject.next()
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable()
  }
}
