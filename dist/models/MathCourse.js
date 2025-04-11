"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCourse = void 0;
const Course_1 = require("./Course");
class MathCourse extends Course_1.Course {
    constructor(id, title, teacher) {
        super(id, title, teacher);
    }
    getInfo() {
        return `Math Course: ${this.getTitle()} - Teacher: ${this.getTeacher().getName()}`;
    }
}
exports.MathCourse = MathCourse;
//# sourceMappingURL=MathCourse.js.map