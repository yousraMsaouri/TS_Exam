import { Course } from '../models/Course';
export interface ICourseDAO {
    add(course: Course): Promise<void>;
    getById(id: number): Promise<Course | null>;
    getAll(): Promise<Course[]>;
    update(course: Course): Promise<void>;
    delete(id: number): Promise<void>;
}
