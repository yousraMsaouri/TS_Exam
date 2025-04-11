"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutoringDecorator = void 0;
class TutoringDecorator {
    constructor(student) {
        this.student = student;
    }
    getDescription() {
        return "Tutoring service for academic support";
    }
    getStudent() {
        return this.student;
    }
}
exports.TutoringDecorator = TutoringDecorator;
//# sourceMappingURL=TutoringDecorator.js.map