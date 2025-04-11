"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportDecorator = void 0;
class SportDecorator {
    constructor(student) {
        this.student = student;
    }
    getDescription() {
        return "Sports activities and physical education";
    }
    getStudent() {
        return this.student;
    }
}
exports.SportDecorator = SportDecorator;
//# sourceMappingURL=SportDecorator.js.map