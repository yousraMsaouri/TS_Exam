import { Student } from '../models/Student';
import { Service } from '../models/Service';
export declare class ArtDecorator implements Service {
    private student;
    constructor(student: Student);
    getDescription(): string;
    getStudent(): Student;
}
