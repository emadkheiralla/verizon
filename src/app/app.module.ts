import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MatDialogModule } from '@angular/material';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AnswerComponent } from './answer/answer.component';


import { AgGridModule } from 'ag-grid-angular';
import { LinkRendererComponent } from './home/link-renderer/link-renderer.component';
import { MatDialogComponent } from './answer/mat-dialog/mat-dialog.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'answer/:id', component: AnswerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    HomeComponent,
    LinkRendererComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LinkRendererComponent, MatDialogComponent]
})
export class AppModule { }
