import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'', component : LoginComponent},
 
  {path: 'login', component:LoginComponent},
  // lazy
  {path: 'content', component :ContentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
