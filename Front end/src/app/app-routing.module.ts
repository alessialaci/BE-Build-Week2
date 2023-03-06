import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { ComuniComponent } from './components/comuni/comuni.component';
import { IndirizziComponent } from './components/indirizzi/indirizzi.component';
import { ProvinceComponent } from './components/province/province.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'user/:id', component: UserComponent },
      { path: 'fatture', component: FattureComponent },
      { path: 'utenti', component: UtentiComponent },
      { path: 'clienti', component: ClientiComponent },
      { path: 'comuni', component: ComuniComponent },
      { path: 'indirizzi', component: IndirizziComponent },
      { path: 'province', component: ProvinceComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
