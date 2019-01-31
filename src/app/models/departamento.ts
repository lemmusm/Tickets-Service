import { Usuario } from './usuario';

export interface Departamento {
    id_departamento?: string;
    departamento?: string;
    ubicacion?: string;
    usuarios?: Usuario;
}
