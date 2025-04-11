export class Resource {
    constructor(
        private id: number,
        private type: string
    ) {}

    getId(): number {
        return this.id;
    }

    getType(): string {
        return this.type;
    }
}
