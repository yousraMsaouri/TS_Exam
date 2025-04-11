export interface Service {
    getDescription(): string;
}

export class Tutoring implements Service {
    getDescription(): string {
        return "Tutoring service for academic support";
    }
}

export class Sport implements Service {
    getDescription(): string {
        return "Sports activities and physical education";
    }
}

export class Art implements Service {
    getDescription(): string {
        return "Art classes and creative activities";
    }
} 