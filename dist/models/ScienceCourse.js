"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScienceCourse = void 0;
const Course_1 = require("./Course");
class ScienceCourse extends Course_1.Course {
    constructor(id, title, teacher) {
        super(id, title, teacher);
    }
    getInfo() {
        return `Science Course: ${this.getTitle()} - Teacher: ${this.getTeacher().getName()}`;
    }
}
exports.ScienceCourse = ScienceCourse;
//# sourceMappingURL=ScienceCourse.js.map