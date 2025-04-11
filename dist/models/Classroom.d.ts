import { Resource } from './Resource';
export declare class Classroom {
    private id;
    private name;
    private capacity;
    private resources;
    constructor(id: number, name: string, capacity: number);
    addResource(resource: Resource): void;
    getResources(): Resource[];
    getId(): number;
    getName(): string;
    getCapacity(): number;
}
