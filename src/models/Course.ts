import { Teacher } from './Teacher';

export abstract class Course {
    constructor(
        protected id: number,
        protected title: string,
        protected teacher: Teacher
    ) {}

    abstract getInfo(): string;

    getTeacher(): Teacher {
        return this.teacher;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }
}

export class MathCourse extends Course {
    getInfo(): string {
        return `Math Course: ${this.title} - Teacher: ${this.teacher.getName()}`;
    }
}

export class ScienceCourse extends Course {
    getInfo(): string {
        return `Science Course: ${this.title} - Teacher: ${this.teacher.getName()}`;
    }
}

export class HistoryCourse extends Course {
    getInfo(): string {
        return `History Course: ${this.title} - Teacher: ${this.teacher.getName()}`;
    }
}
