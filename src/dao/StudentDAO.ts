import { DAO } from './DAO';
import { Student } from '../models/Student';

export class StudentDAO implements DAO<Student> {
    private dbName = 'SchoolDB';
    private storeName = 'students';
    private db: IDBDatabase | null = null;

    constructor() {
        this.initDB();
    }

    private async initDB(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);

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

    async add(student: Student): Promise<void> {
        if (!this.db) await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.add({
                id: student.getId(),
                name: student.getName(),
                email: student.getEmail(),
                courses: student.getCourses(),
                services: student.getServices()
            });

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async getById(id: number): Promise<Student | null> {
        if (!this.db) await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(id);

            request.onsuccess = () => {
                const data = request.result;
                if (data) {
                    const student = new Student(data.id, data.name, data.email);
                    data.courses.forEach((course: any) => student.enroll(course));
                    data.services.forEach((service: any) => student.addService(service));
                    resolve(student);
                } else {
                    resolve(null);
                }
            };
            request.onerror = () => reject(request.error);
        });
    }

    async getAll(): Promise<Student[]> {
        if (!this.db) await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();

            request.onsuccess = () => {
                const students = request.result.map((data: any) => {
                    const student = new Student(data.id, data.name, data.email);
                    data.courses.forEach((course: any) => student.enroll(course));
                    data.services.forEach((service: any) => student.addService(service));
                    return student;
                });
                resolve(students);
            };
            request.onerror = () => reject(request.error);
        });
    }

    async update(student: Student): Promise<void> {
        if (!this.db) await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put({
                id: student.getId(),
                name: student.getName(),
                email: student.getEmail(),
                courses: student.getCourses(),
                services: student.getServices()
            });

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async delete(id: number): Promise<void> {
        if (!this.db) await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(id);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
}
