import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { NewbreedComponent } from './newbreed/newbreed.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: BreedsComponent },
  { path: 'post',  component: NewbreedComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    NewbreedComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
