import { Departamento } from './departamento';
import { Ticket } from './ticket';
export interface Usuario {
    displayName?: string;
    email?: string;
    photoURL?: string;
    uid?: string;
    departamento_id?: string;
    departamento?: Departamento;
    tickets?: Ticket;
}
