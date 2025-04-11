"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceManager = void 0;
class ResourceManager {
    constructor() {
        this.resources = [];
    }
    static getInstance() {
        if (!ResourceManager.instance) {
            ResourceManager.instance = new ResourceManager();
        }
        return ResourceManager.instance;
    }
    addResource(resource) {
        this.resources.push(resource);
    }
    allocateResource(id) {
        return this.resources.find(resource => resource.getId() === id) || null;
    }
    getAllResources() {
        return [...this.resources];
    }
}
exports.ResourceManager = ResourceManager;
//# sourceMappingURL=ResourceManager.js.map