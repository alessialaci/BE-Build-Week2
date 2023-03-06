import { Comune } from "./comune.interface";

export interface Indirizzo {
  id: number;
  via: string;
  civico: number;
  localita: string;
  cap: number;
  comune: Comune;
}
