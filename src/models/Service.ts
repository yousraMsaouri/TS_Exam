import { Student } from './Student';

export interface Service {
    getDescription(): string;
    getStudent(): Student;
}


