import { Ubicacion } from './ubicacion';
import { Usuario } from './usuario';

export interface Departamento {
    id_departamento?: string;
    departamento?: string;
    ubicacion_id?: string;
    ubicacion?: Ubicacion;
    usuarios?: Usuario;
}
