import { Departamento } from './departamento';
export interface Usuario {
    displayName?: string;
    email?: string;
    photoURL?: string;
    uid?: string;
    departamento_id?: string;
    departamento?: Departamento;
}
