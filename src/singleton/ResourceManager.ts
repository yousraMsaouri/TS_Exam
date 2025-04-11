import { Resource } from '../models/Resource';

export class ResourceManager {
    private static instance: ResourceManager;
    private resources: Resource[] = [];

    private constructor() {}

    public static getInstance(): ResourceManager {
        if (!ResourceManager.instance) {
            ResourceManager.instance = new ResourceManager();
        }
        return ResourceManager.instance;
    }

    public addResource(resource: Resource): void {
        this.resources.push(resource);
    }

    public allocateResource(id: number): Resource | null {
        return this.resources.find(resource => resource.getId() === id) || null;
    }

    public getAllResources(): Resource[] {
        return [...this.resources];
    }
}
