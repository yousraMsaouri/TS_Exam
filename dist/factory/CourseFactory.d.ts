import { Course } from '../models/Course';
import { Teacher } from '../models/Teacher';
export declare class CourseFactory {
    static createCourse(type: 'math' | 'science' | 'history', id: number, title: string, teacher: Teacher): Course;
}
