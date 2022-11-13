import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MainPageRoutingModule } from './main-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { PostComponent } from '../post/post.component';
import { CommentComponent } from '../comment/comment.component';
import { LikeComponent } from '../like/like.component';
import { CommentInputComponent } from '../comment/comment-input/comment-input.component';
import { CreatePostComponent } from '../post/create-post/create-post.component';
import { FriendsComponent } from '../friends/friends.component';
import { SettingsComponent } from '../settings/settings.component';
import { FriendSearchComponent } from '../friends/friend-search/friend-search.component';



@NgModule({
    declarations: [MainComponent, NavbarComponent, SideBarComponent, PostComponent, CommentComponent, LikeComponent, CommentInputComponent, CreatePostComponent, FriendsComponent, SettingsComponent, 
    FriendSearchComponent],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        MainPageRoutingModule
    ]
})
export class MainPageModule { }
