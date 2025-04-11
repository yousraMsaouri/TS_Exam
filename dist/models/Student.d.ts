import { Course } from './Course';
import { Service } from '../decorators/Service';
export declare class Student {
    private id;
    private name;
    private email;
    private courses;
    private services;
    constructor(id: number, name: string, email: string);
    enroll(course: Course): void;
    addService(service: Service): void;
    getCourses(): Course[];
    getServices(): Service[];
    getName(): string;
    getEmail(): string;
    getId(): number;
}
