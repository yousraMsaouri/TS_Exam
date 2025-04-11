import { Course, MathCourse, ScienceCourse, HistoryCourse } from '../models/Course';
import { Teacher } from '../models/Teacher';

export class CourseFactory {
    static createCourse(type: 'math' | 'science' | 'history', id: number, title: string, teacher: Teacher): Course {
        switch (type) {
            case 'math':
                return new MathCourse(id, title, teacher);
            case 'science':
                return new ScienceCourse(id, title, teacher);
            case 'history':
                return new HistoryCourse(id, title, teacher);
            default:
                throw new Error(`Unknown course type: ${type}`);
        }
    }
}
