"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(id, name, specialty) {
        this.id = id;
        this.name = name;
        this.specialty = specialty;
        this.assignedCourses = [];
    }
    assign(course) {
        this.assignedCourses.push(course);
    }
    getAssignedCourses() {
        return this.assignedCourses;
    }
    getName() {
        return this.name;
    }
    getSpecialty() {
        return this.specialty;
    }
    getId() {
        return this.id;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map