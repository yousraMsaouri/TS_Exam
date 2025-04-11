"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseFactory = void 0;
const Course_1 = require("../models/Course");
class CourseFactory {
    static createCourse(type, id, title, teacher) {
        switch (type) {
            case 'math':
                return new Course_1.MathCourse(id, title, teacher);
            case 'science':
                return new Course_1.ScienceCourse(id, title, teacher);
            case 'history':
                return new Course_1.HistoryCourse(id, title, teacher);
            default:
                throw new Error(`Unknown course type: ${type}`);
        }
    }
}
exports.CourseFactory = CourseFactory;
//# sourceMappingURL=CourseFactory.js.map