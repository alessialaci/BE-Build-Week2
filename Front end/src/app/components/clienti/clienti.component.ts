import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.interface';
import { ClientiService } from 'src/app/services/clienti.service';


@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})
export class ClientiComponent implements OnInit {

  clienti: Cliente[] = [];
  ruoloConnesso: boolean | undefined;
  config: any;

  constructor(private cs: ClientiService) { }

  ngOnInit(): void {

    const authUser: any = window.sessionStorage.getItem('auth-user');
    const  parseAuthUser = JSON.parse(authUser);
      const ruolo = parseAuthUser.roles;
      console.log(ruolo);
      if(ruolo[0] == "ROLE_ADMIN") {
        this.ruoloConnesso = true;
      }

      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.clienti.length
      };

    this.getClienti();

    const myButton = document.getElementById('clear') as HTMLButtonElement;
    const myForm = document.getElementById('formModal') as HTMLFormElement;

    myButton.addEventListener('click', () => {
      this.resetForm(myForm);
    });
  }

  // GET
  getClienti(): void {
    this.cs.getClienti().subscribe((clienti: Cliente[]) => {
      this.clienti = clienti;
    });
  }

  // POST
  addCliente(form: NgForm): void {
    const nuovoCliente: Partial <Cliente> = {
      ragioneSociale: form.value.ragioneSociale,
      partitaIva: form.value.partitaIva,
      email: form.value.email,
      dataInserimento: new Date(),
      dataUltimoContatto: form.value.dataUltimoContatto,
      fatturatoAnnuale: form.value.fatturatoAnnuale,
      pec: form.value.pec,
      telefono: form.value.telefono,
      emailContatto: form.value.email,
      nomeContatto: form.value.nomeContatto,
      cognomeContatto: form.value.cognomeContatto,
      telefonoContatto: form.value.telefonoContatto,
      tipoCliente: form.value.tipoCliente,
      sedeLegale: form.value.sedeLegale,
      sedeOperativa: form.value.sedeOperativa,
      fattureId: []
    };

    this.cs.addClienti(nuovoCliente).subscribe((res: any) => {
      console.log("cliente aggiunto")
      location.reload();
    });
  }

  // PUT
  updateCliente(form: NgForm) {
    console.log("metodo updateCliente da sistemare");
  }

  // DELETE
  deleteCliente(id: number): void {
    this.cs.deleteClienti(id)
    .subscribe({
      next: () => {
        console.log('Fattura eliminata');
        this.getClienti();
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
