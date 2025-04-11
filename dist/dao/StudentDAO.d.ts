import { DAO } from './DAO';
import { Student } from '../models/Student';
export declare class StudentDAO implements DAO<Student> {
    private dbName;
    private storeName;
    private db;
    constructor();
    private initDB;
    add(student: Student): Promise<void>;
    getById(id: number): Promise<Student | null>;
    getAll(): Promise<Student[]>;
    update(student: Student): Promise<void>;
    delete(id: number): Promise<void>;
}
