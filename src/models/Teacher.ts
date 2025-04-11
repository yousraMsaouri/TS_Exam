import { Course } from './Course';

export class Teacher {
    private assignedCourses: Course[] = [];

    constructor(
        private id: number,
        private name: string,
        private specialty: string
    ) {}

    assign(course: Course): void {
        this.assignedCourses.push(course);
    }

    getAssignedCourses(): Course[] {
        return this.assignedCourses;
    }

    getName(): string {
        return this.name;
    }

    getSpecialty(): string {
        return this.specialty;
    }

    getId(): number {
        return this.id;
    }
}
