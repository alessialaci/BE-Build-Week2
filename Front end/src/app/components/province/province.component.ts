import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia.interface';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  province: Provincia[] = [];
  ruoloConnesso: boolean | undefined;
  config: any;


  constructor(private ps: ProvinceService) { }

  ngOnInit(): void {
    const authUser: any = window.sessionStorage.getItem('auth-user');
    const  parseAuthUser = JSON.parse(authUser);
      const ruolo = parseAuthUser.roles;
      console.log(ruolo);
      if(ruolo[0] == "ROLE_ADMIN") {
        this.ruoloConnesso = true;
      }

      this.getProvince();
      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.province.length
      };


  }



  getProvince(): void {
    this.ps.getProvince().subscribe((province: Provincia[]) => {
      this.province = province;
    });
  }

}
