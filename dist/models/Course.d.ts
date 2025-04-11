import { Teacher } from './Teacher';
export declare abstract class Course {
    protected id: number;
    protected title: string;
    protected teacher: Teacher;
    constructor(id: number, title: string, teacher: Teacher);
    abstract getInfo(): string;
    getTeacher(): Teacher;
    getId(): number;
    getTitle(): string;
}
export declare class MathCourse extends Course {
    getInfo(): string;
}
export declare class ScienceCourse extends Course {
    getInfo(): string;
}
export declare class HistoryCourse extends Course {
    getInfo(): string;
}
