import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: string | undefined;
  email: string | undefined;
  ruoloConnesso: boolean | undefined;
  constructor() { }

  ngOnInit(): void {

    const authUser: any = window.sessionStorage.getItem('auth-user');
    const  parseAuthUser = JSON.parse(authUser);
    const ruolo = parseAuthUser.roles;
    this.username = parseAuthUser.username;
    this.email = parseAuthUser.email;
    console.log(ruolo);
    if(ruolo[0] == "ROLE_ADMIN") {
      this.ruoloConnesso = true;
    }

  }

}
