import { Student } from '../models/Student';
import { Service } from '../models/Service';

export class TutoringDecorator implements Service {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }

    getDescription(): string {
        return "Tutoring service for academic support";
    }

    getStudent(): Student {
        return this.student;
    }
}
