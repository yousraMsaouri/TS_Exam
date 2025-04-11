"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDAO = void 0;
const Student_1 = require("../models/Student");
class StudentDAO {
    constructor() {
        this.dbName = 'SchoolDB';
        this.storeName = 'students';
        this.db = null;
        this.initDB();
    }
    async initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'id' });
                }
            };
        });
    }
    async add(student) {
        if (!this.db)
            await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readwrite');
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
    async getById(id) {
        if (!this.db)
            await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(id);
            request.onsuccess = () => {
                const data = request.result;
                if (data) {
                    const student = new Student_1.Student(data.id, data.name, data.email);
                    data.courses.forEach((course) => student.enroll(course));
                    data.services.forEach((service) => student.addService(service));
                    resolve(student);
                }
                else {
                    resolve(null);
                }
            };
            request.onerror = () => reject(request.error);
        });
    }
    async getAll() {
        if (!this.db)
            await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();
            request.onsuccess = () => {
                const students = request.result.map((data) => {
                    const student = new Student_1.Student(data.id, data.name, data.email);
                    data.courses.forEach((course) => student.enroll(course));
                    data.services.forEach((service) => student.addService(service));
                    return student;
                });
                resolve(students);
            };
            request.onerror = () => reject(request.error);
        });
    }
    async update(student) {
        if (!this.db)
            await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readwrite');
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
    async delete(id) {
        if (!this.db)
            await this.initDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
}
exports.StudentDAO = StudentDAO;
//# sourceMappingURL=StudentDAO.js.map