"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.courses = [];
        this.services = [];
    }
    enroll(course) {
        this.courses.push(course);
    }
    addService(service) {
        this.services.push(service);
    }
    getCourses() {
        return this.courses;
    }
    getServices() {
        return this.services;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map