import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Firebase } from './components/pages/firebase/firebase';
import { Home } from './components/pages/home/home';

const routes: Routes = [
  {path:'', component: Home},
  {path: 'firebase', component: Firebase}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
