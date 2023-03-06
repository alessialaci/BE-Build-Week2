import { Indirizzo } from "./indirizzo.interface";

export interface Cliente {
    id: number;
    ragioneSociale: string;
    partitaIva: number;
    email: string;
    dataInserimento: Date;
    dataUltimoContatto: Date;
    fatturatoAnnuale: number;
    pec: string;
    telefono: number;
    emailContatto: string;
    nomeContatto: string;
    cognomeContatto: string;
    telefonoContatto: number;
    tipoCliente: string;
    sedeLegale: Indirizzo;
    sedeOperativa: Indirizzo;
    fattureId: number[];
}
