"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classroom = void 0;
class Classroom {
    constructor(id, name, capacity) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.resources = [];
    }
    addResource(resource) {
        this.resources.push(resource);
    }
    getResources() {
        return this.resources;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCapacity() {
        return this.capacity;
    }
}
exports.Classroom = Classroom;
//# sourceMappingURL=Classroom.js.map