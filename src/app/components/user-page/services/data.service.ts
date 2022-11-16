import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, Subject } from 'rxjs';
import { CREATE_POST } from 'src/app/graphql/create-post.mutation';
import { Post } from 'src/app/interfaces/post.interface';
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

  // Get all user data
  getUserData() {
    return this.apollo.watchQuery<{user: User}>({query: USER_DATA}).valueChanges.pipe(map((user) => user.data.user))
  }
  
  // Add new post
  createPost(text: string) {
    return this.apollo.mutate<{ createUserPost: Post }>(
      {
        mutation: CREATE_POST,
        variables: {
          written_text: text
        }
      }
    ).subscribe()
  }

  sendClickEvent() {
    this.subject.next()
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable()
  }
}
