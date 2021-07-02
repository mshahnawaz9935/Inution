import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task2Component } from './task2/task2.component';
import { DialogComponent } from './task2/task2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { Task3Component } from './task3/task3.component';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from "devextreme-angular";
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    Task1Component,
    Task2Component,
    Task3Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }