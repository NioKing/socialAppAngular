import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EntryPageRoutingModule } from './entry-page-routing.module';
import { EntryPageComponent } from './entry-page.component';



@NgModule({
  declarations: [EntryPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    EntryPageRoutingModule
  ]
})
export class EntryPageModule { }
