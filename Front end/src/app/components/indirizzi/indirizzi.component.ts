import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Indirizzo } from 'src/app/models/indirizzo.interface';
import { IndirizziService } from 'src/app/services/indirizzi.service';

@Component({
  selector: 'app-indirizzi',
  templateUrl: './indirizzi.component.html',
  styleUrls: ['./indirizzi.component.scss']
})
export class IndirizziComponent implements OnInit {

  indirizzi: Indirizzo[] = [];
  ruoloConnesso: boolean | undefined;
  config: any;
  dati$: Observable<any> | undefined;


  constructor(private is: IndirizziService) { }

  ngOnInit(): void {
    const authUser: any = window.sessionStorage.getItem('auth-user');
    const  parseAuthUser = JSON.parse(authUser);
      const ruolo = parseAuthUser.roles;
      console.log(ruolo);
      if(ruolo[0] == "ROLE_ADMIN") {
        this.ruoloConnesso = true;
      }
      this.dati$ = this.is.getIndirizzi();
    this.getIndirizzi();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.indirizzi.length
    };

    const myButton = document.getElementById('clear2') as HTMLButtonElement;
    const myForm = document.getElementById('formModal2') as HTMLFormElement;

    myButton.addEventListener('click', () => {
      this.resetForm(myForm);
    });
  }

  // GET
  getIndirizzi(): void {
    this.is.getIndirizzi().subscribe((indirizzi: Indirizzo[]) => {
      this.indirizzi = indirizzi;
    });
  }

  // POST
  addIndirizzo(form: NgForm) {
    const nuovoIndirizzo: Partial<Indirizzo> = {
      via: form.value.via,
      civico: form.value.civico,
      localita: form.value.localita,
      cap: form.value.cap
    };

    this.is.addIndirizzi(nuovoIndirizzo).subscribe((res: any) => {
      console.log("indirizzo aggiunto")
      location.reload();
    });
  }

  // PUT
  updateIndirizzo(form: NgForm) {
    console.log("metodo updateIndirizzo da sistemare");
  }

  // DELETE
  deleteIndirizzo(id: number) {
    this.is.deleteIndirizzi(id)
    .subscribe({
      next: () => {
        console.log('Indirizzo eliminato');
        this.getIndirizzi();
      },
      error: (error) => console.error(error)
    });
    location.reload();
  }

  //CLEAR FORM
  resetForm(form: HTMLFormElement): void {
    form.reset();
  }

}
