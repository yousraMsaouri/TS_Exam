import { Teacher } from '../models/Teacher';
export interface ITeacherDAO {
    add(teacher: Teacher): Promise<void>;
    getById(id: number): Promise<Teacher | null>;
    getAll(): Promise<Teacher[]>;
    update(teacher: Teacher): Promise<void>;
    delete(id: number): Promise<void>;
}
