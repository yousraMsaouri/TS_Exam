"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtDecorator = void 0;
class ArtDecorator {
    constructor(student) {
        this.student = student;
    }
    getDescription() {
        return "Art classes and creative activities";
    }
    getStudent() {
        return this.student;
    }
}
exports.ArtDecorator = ArtDecorator;
//# sourceMappingURL=ArtDecorator.js.map