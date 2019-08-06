import { Project } from './project.model';
import { Role } from './role.model';

export interface Source {
  sourceId: Number;
  candidateName: String;
  yearofExperience: Number;
  planned_start_date: Date ;
  actual_start_date: Date ;
  status: String;
  project: Project;
  role: Role;
}
