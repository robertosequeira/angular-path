import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectionComponent } from './projection/projection.component';
import { HomeComponent } from './home/home.component';
import { CollapsibleComponent } from './projection/collapsible/collapsible.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectionComponent,
    HomeComponent,
    CollapsibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
