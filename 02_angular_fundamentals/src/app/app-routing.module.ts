import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectionComponent } from './projection/projection.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'projection', component: ProjectionComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
