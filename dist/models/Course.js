"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryCourse = exports.ScienceCourse = exports.MathCourse = exports.Course = void 0;
class Course {
    constructor(id, title, teacher) {
        this.id = id;
        this.title = title;
        this.teacher = teacher;
    }
    getTeacher() {
        return this.teacher;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
}
exports.Course = Course;
class MathCourse extends Course {
    getInfo() {
        return `Math Course: ${this.title} - Teacher: ${this.teacher.getName()}`;
    }
}
exports.MathCourse = MathCourse;
class ScienceCourse extends Course {
    getInfo() {
        return `Science Course: ${this.title} - Teacher: ${this.teacher.getName()}`;
    }
}
exports.ScienceCourse = ScienceCourse;
class HistoryCourse extends Course {
    getInfo() {
        return `History Course: ${this.title} - Teacher: ${this.teacher.getName()}`;
    }
}
exports.HistoryCourse = HistoryCourse;
//# sourceMappingURL=Course.js.map