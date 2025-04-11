"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherDAO = void 0;
const Teacher_1 = require("../models/Teacher");
const IDBManager_1 = require("./IDBManager");
class TeacherDAO {
    constructor() {
        this.storeName = 'teachers';
        this.db = null;
        this.dbManager = IDBManager_1.IDBManager.getInstance();
        this.initDB().then(() => {
            console.log("Database initialized");
        }).catch(error => {
            console.error("Error initializing database:", error);
        });
    }
    async initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.storeName, 1);
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
    async add(teacher) {
        await this.dbManager.add(this.storeName, {
            id: teacher.getId(),
            name: teacher.getName(),
            specialty: teacher.getSpecialty(),
            assignedCourses: teacher.getAssignedCourses()
        });
    }
    async getById(id) {
        const data = await this.dbManager.get(this.storeName, id);
        if (!data)
            return null;
        const teacher = new Teacher_1.Teacher(data.id, data.name, data.specialty);
        data.assignedCourses.forEach((course) => teacher.assign(course));
        return teacher;
    }
    async getAll() {
        const data = await this.dbManager.getAll(this.storeName);
        return data.map(item => {
            const teacher = new Teacher_1.Teacher(item.id, item.name, item.specialty);
            item.assignedCourses.forEach((course) => teacher.assign(course));
            return teacher;
        });
    }
    async update(teacher) {
        await this.dbManager.update(this.storeName, {
            id: teacher.getId(),
            name: teacher.getName(),
            specialty: teacher.getSpecialty(),
            assignedCourses: teacher.getAssignedCourses()
        });
    }
    async delete(id) {
        await this.dbManager.delete(this.storeName, id);
    }
}
exports.TeacherDAO = TeacherDAO;
//# sourceMappingURL=TeacherDAO.js.map