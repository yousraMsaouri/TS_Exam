export interface DAO<T> {
    add(entity: T): Promise<void>;
    getById(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(entity: T): Promise<void>;
    delete(id: number): Promise<void>;
}
