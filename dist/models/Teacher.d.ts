import { Course } from './Course';
export declare class Teacher {
    private id;
    private name;
    private specialty;
    private assignedCourses;
    constructor(id: number, name: string, specialty: string);
    assign(course: Course): void;
    getAssignedCourses(): Course[];
    getName(): string;
    getSpecialty(): string;
    getId(): number;
}
