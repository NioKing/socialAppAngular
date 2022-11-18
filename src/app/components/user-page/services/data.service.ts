import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, Subject, tap } from 'rxjs';
import { CREATE_POST } from 'src/app/graphql/create-post.mutation';
import { GET_POSTS } from 'src/app/graphql/posts.query';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { USER_DATA } from '../../../graphql/user-data.query'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<void>()
  private refreshData$ = new Subject<void>()
  

  constructor(
    private apollo: Apollo
  ) { }

  // Get all user data
  getUserData() {
    return this.apollo.watchQuery<{user: User}>({query: USER_DATA}).valueChanges.pipe(map((user) => user.data.user))
  }

  // Get user posts
  getUserPosts() {
    return this.apollo.watchQuery<{posts: Post[]}>({
      query: GET_POSTS
    }).valueChanges.pipe(map((data) => data.data.posts))
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
    ).pipe(tap(() => this.reload.next()))
  }

  sendClickEvent() {
    this.subject.next()
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable()
  }

  get reload() {
    return this.refreshData$
  }
}
