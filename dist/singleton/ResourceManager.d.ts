import { Resource } from '../models/Resource';
export declare class ResourceManager {
    private static instance;
    private resources;
    private constructor();
    static getInstance(): ResourceManager;
    addResource(resource: Resource): void;
    allocateResource(id: number): Resource | null;
    getAllResources(): Resource[];
}
