import { Servicio } from './servicio';
export interface Ticket {
  id_ticket?: string;
  servicio_id?: string;
  servicio?: Servicio;
  descripcion?: string;
  diagnostico?: string;
  filesattach?: string;
  tecnico?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  usuario_uid?: string;
  displayName?: string;
  email?: string;
  departamento?: string;
}
