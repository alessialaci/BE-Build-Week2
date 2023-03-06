import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subscription, switchMap } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {

  users: User[] = [];
  sub: Subscription | undefined
  ruoloConnesso: boolean | undefined;
  config: any;


  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {

    const authUser: any = window.sessionStorage.getItem('auth-user');
    const  parseAuthUser = JSON.parse(authUser);
      const ruolo = parseAuthUser.roles;
      console.log(ruolo);
      if(ruolo[0] == "ROLE_ADMIN") {
        this.ruoloConnesso = true;
      }

    this.getUtenti();
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.users.length
    };

    const myButton = document.getElementById('clear3') as HTMLButtonElement;
    const myForm = document.getElementById('formModal3') as HTMLFormElement;

    myButton.addEventListener('click', () => {
      this.resetForm(myForm);
    });
  }

  // GET
  getUtenti(): void {
    this.us.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // POST
  addUtente(form: NgForm) {
    let nuovoUtente: Partial<User> = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      nome: form.value.nome,
      cognome: form.value.cognome,
      attivo: true,
      tipoRuolo: "ROLE_USER"
    };

    this.us.addUser(nuovoUtente).subscribe((res: any) => {
      console.log("utente aggiunto")
      location.reload();
    });
  }

  // PUT
  updateUtente(form: NgForm) {
    console.log("metodo updateUtente da sistemare");
  }

  // DELETE
  deleteUtente(id: number): void {
    this.sub = this.us.deleteUser(id)
      .subscribe({
        next: () => {
          console.log('Cliente eliminato');
          this.getUtenti();
        },
        error: (error) => console.error(error)
      });
    location.reload();
  }

  // CLEAR FORM
  resetForm(form: HTMLFormElement): void {
    form.reset();
  }

}

