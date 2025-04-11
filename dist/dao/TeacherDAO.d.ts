import { ITeacherDAO } from './ITeacherDAO';
import { Teacher } from '../models/Teacher';
export declare class TeacherDAO implements ITeacherDAO {
    private dbManager;
    private storeName;
    private db;
    constructor();
    private initDB;
    add(teacher: Teacher): Promise<void>;
    getById(id: number): Promise<Teacher | null>;
    getAll(): Promise<Teacher[]>;
    update(teacher: Teacher): Promise<void>;
    delete(id: number): Promise<void>;
}
