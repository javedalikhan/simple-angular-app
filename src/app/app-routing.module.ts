import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IntroductionComponent} from './introduction/introduction.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
