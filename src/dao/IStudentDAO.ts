import { Student } from '../models/Student';

export interface IStudentDAO {
    add(student: Student): Promise<void>;
    getById(id: number): Promise<Student | null>;
    getAll(): Promise<Student[]>;
    update(student: Student): Promise<void>;
    delete(id: number): Promise<void>;
}
