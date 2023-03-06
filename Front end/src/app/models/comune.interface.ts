import { Provincia } from "./provincia.interface";

export interface Comune {
    id: number;
    nome: string;
    codProvincia: number;
    progComune: string;
    provincia: Provincia;
}
