import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { SearchUsersComponent } from './search-users/search-users.component';


const routes: Routes = [
  {path: 'adduser', component: AddUserComponent},
  {path: 'viewusers', component: SearchUsersComponent},
  {
    path: '',
    redirectTo: '/viewusers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
