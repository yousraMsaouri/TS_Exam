"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryCourse = void 0;
const Course_1 = require("./Course");
class HistoryCourse extends Course_1.Course {
    constructor(id, title, teacher) {
        super(id, title, teacher);
    }
    getInfo() {
        return `History Course: ${this.getTitle()} - Teacher: ${this.getTeacher().getName()}`;
    }
}
exports.HistoryCourse = HistoryCourse;
//# sourceMappingURL=HistoryCourse.js.map