export declare class IDBManager {
    private static instance;
    private db;
    private dbName;
    private version;
    private constructor();
    static getInstance(dbName?: string, version?: number): IDBManager;
    initDB(stores: {
        name: string;
        keyPath: string;
    }[]): Promise<void>;
    add(storeName: string, data: any): Promise<void>;
    get(storeName: string, id: number): Promise<any>;
    getAll(storeName: string): Promise<any[]>;
    update(storeName: string, data: any): Promise<void>;
    delete(storeName: string, id: number): Promise<void>;
}
