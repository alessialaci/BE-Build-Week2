import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { ComuniComponent } from './components/comuni/comuni.component';
import { IndirizziComponent } from './components/indirizzi/indirizzi.component';
import { ProvinceComponent } from './components/province/province.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    DashboardComponent,
    TestimonialsComponent,
    FattureComponent,
    UtentiComponent,
    ClientiComponent,
    ComuniComponent,
    IndirizziComponent,
    ProvinceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    AuthRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
