import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private usrSrv: UsersService) { }

  u: User | undefined;

  ngOnInit(): void {
    let x = this.ar.snapshot.params["id"];
    this.usrSrv.getUsers().subscribe((users: User[]) => {
      this.u = users.find((element) => {
        if (x == element.id) {
          return true;
        } else {
          return false;
        }
      })
    }
    )
  }

}

