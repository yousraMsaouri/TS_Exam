import { Course } from './Course';
import { Teacher } from './Teacher';

export class ScienceCourse extends Course {
    constructor(id: number, title: string, teacher: Teacher) {
        super(id, title, teacher);
    }

    getInfo(): string {
        return `Science Course: ${this.getTitle()} - Teacher: ${this.getTeacher().getName()}`;
    }
}
