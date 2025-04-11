import { Student } from '../models/Student';
import { Service } from '../models/Service';

export class SportDecorator implements Service {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }

    getDescription(): string {
        return "Sports activities and physical education";
    }

    getStudent(): Student {
        return this.student;
    }
}
