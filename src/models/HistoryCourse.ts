import { Course } from './Course';
import { Teacher } from './Teacher';

export class HistoryCourse extends Course {
    constructor(id: number, title: string, teacher: Teacher) {
        super(id, title, teacher);
    }

    getInfo(): string {
        return `History Course: ${this.getTitle()} - Teacher: ${this.getTeacher().getName()}`;
    }
}
