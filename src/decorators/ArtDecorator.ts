import { Student } from '../models/Student';
import { Service } from '../models/Service';

export class ArtDecorator implements Service {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }

    getDescription(): string {
        return "Art classes and creative activities";
    }

    getStudent(): Student {
        return this.student;
    }
}
