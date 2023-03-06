import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fattura } from 'src/app/models/fattura.interface';
import { FattureService } from 'src/app/services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {

  fatture: Fattura[] = [];
  ruoloConnesso: boolean | undefined;
  config: any;

  constructor(private fs: FattureService) { }

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
        totalItems: this.fatture.length
      };

    this.getFatture();

    const myButton = document.getElementById('clear1') as HTMLButtonElement;
    const myForm = document.getElementById('formModal1') as HTMLFormElement;

    myButton.addEventListener('click', () => {
      this.resetForm(myForm);
    });
  }

  // GET
  getFatture(): void {
    this.fs.getFatture().subscribe((fatture: Fattura[]) => {
      this.fatture = fatture;
    });
  }

  // POST
  addFattura(form: NgForm) {
    const nuovaFattura: Partial<Fattura> = {
      anno: form.value.anno,
      data: form.value.data,
      importo: form.value.importo,
      numero: form.value.numero,
      statoFattura: form.value.stato
    };

    this.fs.addFatture(nuovaFattura).subscribe((res: any) => {
      console.log("fattura aggiunta")
      location.reload();
    });
  }

  // PUT
  updateFattura(form: NgForm, id: number) {
    let fatturaDaAggiornare = this.fatture.find(fattura => fattura.id === id);

    let editFattura: Partial<Fattura> = {
      anno: form.value.anno,
      data: form.value.data,
      importo: form.value.importo,
      numero: form.value.numero,
      statoFattura: form.value.stato
    };

    this.fs.updateFatture(editFattura, fatturaDaAggiornare!.id).subscribe(
      response => console.log('Fattura aggiornata:', response),
      error => console.error('Errore durante l\'aggiornamento della fattura:', error)
    );
  }

  // DELETE
  deleteFattura(id: number): void {
    this.fs.deleteFatture(id)
    .subscribe({
      next: () => {
        console.log('Fattura eliminata');
        this.getFatture();
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
