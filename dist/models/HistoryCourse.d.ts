import { Course } from './Course';
import { Teacher } from './Teacher';
export declare class HistoryCourse extends Course {
    constructor(id: number, title: string, teacher: Teacher);
    getInfo(): string;
}
