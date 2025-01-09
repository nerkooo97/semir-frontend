import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './models/User.class';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
