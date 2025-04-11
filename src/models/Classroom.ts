import { Resource } from './Resource';

export class Classroom {
    private resources: Resource[] = [];

    constructor(
        private id: number,
        private name: string,
        private capacity: number
    ) {}

    addResource(resource: Resource): void {
        this.resources.push(resource);
    }

    getResources(): Resource[] {
        return this.resources;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getCapacity(): number {
        return this.capacity;
    }
}
