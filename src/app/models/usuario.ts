import { Departamento } from './departamento';
import { Ticket } from './ticket';
import { Rol } from './rol';
export interface Usuario {
    uid?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
    rol_id?: string;
    rol?: Rol;
    departamento_id?: string;
    departamento?: Departamento;
    tickets?: Ticket;
}
