import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MainPageRoutingModule } from './main-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
    declarations: [MainComponent, NavbarComponent],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        MainPageRoutingModule
    ]
})
export class MainPageModule { }
