import { Course } from './Course';
import { Service } from '../decorators/Service';

export class Student {
    private courses: Course[] = [];
    private services: Service[] = [];

    constructor(
        private id: number,
        private name: string,
        private email: string
    ) {}

    enroll(course: Course): void {
        this.courses.push(course);
    }

    addService(service: Service): void {
        this.services.push(service);
    }

    getCourses(): Course[] {
        return this.courses;
    }

    getServices(): Service[] {
        return this.services;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getId(): number {
        return this.id;
    }
}
