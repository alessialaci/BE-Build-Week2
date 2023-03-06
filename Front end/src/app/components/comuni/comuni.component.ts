import { Component, OnInit } from '@angular/core';
import { Comune } from 'src/app/models/comune.interface';
import { ComuniService } from 'src/app/services/comuni.service';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.scss']
})
export class ComuniComponent implements OnInit {

  comuni: Comune[] = [];
  config: any;
  ruoloConnesso: boolean | undefined;

  constructor(private cs: ComuniService) { }

  ngOnInit(): void {

    const authUser: any = window.sessionStorage.getItem('auth-user');
    const  parseAuthUser = JSON.parse(authUser);
      const ruolo = parseAuthUser.roles;
      console.log(ruolo);
      if(ruolo[0] == "ROLE_ADMIN") {
        this.ruoloConnesso = true;
      }

    this.getComuni();
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.comuni.length
    };
  }

  getComuni(): void {
    this.cs.getComuni().subscribe((comuni: Comune[]) => {
      this.comuni = comuni;
    });
  }

}
