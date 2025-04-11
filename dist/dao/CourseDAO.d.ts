import { ICourseDAO } from './ICourseDAO';
import { Course } from '../models/Course';
export declare class CourseDAO implements ICourseDAO {
    private dbManager;
    private storeName;
    constructor();
    private initDB;
    add(course: Course): Promise<void>;
    getById(id: number): Promise<Course | null>;
    getAll(): Promise<Course[]>;
    update(course: Course): Promise<void>;
    delete(id: number): Promise<void>;
    private getCourseType;
}
