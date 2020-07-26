import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ArchiveComponent } from './archive/archive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoneComponent } from './done/done.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewpostComponent,
    ViewpostComponent,
    SearchComponent,
    NavbarComponent,
    ArchiveComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'newpost',
        component: NewpostComponent
      },
      {
        path: 'viewpost/:id',
        component: ViewpostComponent
      },
      {
        path: 'archive',
        component: ArchiveComponent
      },
      {
        path: 'done',
        component: DoneComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
