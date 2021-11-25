import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './/views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component'; 


const routes: Routes = [
  {
    path:'', 
    component: HomeComponent,
  },

  {
    path:'jogos',
    component: JogosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
