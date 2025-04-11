import { Course } from './Course';
import { Teacher } from './Teacher';
export declare class ScienceCourse extends Course {
    constructor(id: number, title: string, teacher: Teacher);
    getInfo(): string;
}
