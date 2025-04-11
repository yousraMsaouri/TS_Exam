import { ITeacherDAO } from './ITeacherDAO';
import { Teacher } from '../models/Teacher';
import { IDBManager } from './IDBManager';

export class TeacherDAO implements ITeacherDAO {
    private dbManager: IDBManager;
    private storeName = 'teachers';
    private db: IDBDatabase | null = null;

    constructor() {
        this.dbManager = IDBManager.getInstance();
        this.initDB().then(() => {
            console.log("Database initialized");
        }).catch(error => {
            console.error("Error initializing database:", error);
        });
    }

    private async initDB(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.storeName, 1);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'id' });
                }
            };
        });
    }

    async add(teacher: Teacher): Promise<void> {
        await this.dbManager.add(this.storeName, {
            id: teacher.getId(),
            name: teacher.getName(),
            specialty: teacher.getSpecialty(),
            assignedCourses: teacher.getAssignedCourses()
        });
    }

    async getById(id: number): Promise<Teacher | null> {
        const data = await this.dbManager.get(this.storeName, id);
        if (!data) return null;
        
        const teacher = new Teacher(data.id, data.name, data.specialty);
        data.assignedCourses.forEach((course: any) => teacher.assign(course));
        return teacher;
    }

    async getAll(): Promise<Teacher[]> {
        const data = await this.dbManager.getAll(this.storeName);
        return data.map(item => {
            const teacher = new Teacher(item.id, item.name, item.specialty);
            item.assignedCourses.forEach((course: any) => teacher.assign(course));
            return teacher;
        });
    }

    async update(teacher: Teacher): Promise<void> {
        await this.dbManager.update(this.storeName, {
            id: teacher.getId(),
            name: teacher.getName(),
            specialty: teacher.getSpecialty(),
            assignedCourses: teacher.getAssignedCourses()
        });
    }

    async delete(id: number): Promise<void> {
        await this.dbManager.delete(this.storeName, id);
    }
}
