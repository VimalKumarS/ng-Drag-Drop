import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.route';
import {HomeComponent} from './drag-drop/home.component'
import {DraggableContianer} from './right-pane/right.component'
import {ListAllComponent} from './left-pane/left.component'
import { DndModule } from 'ng2-dnd';
@NgModule({
  declarations: [
    AppComponent,HomeComponent,ListAllComponent,DraggableContianer
  ],
  imports: [
    BrowserModule,routing, DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
