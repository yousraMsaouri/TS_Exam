"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDAO = void 0;
const IDBManager_1 = require("./IDBManager");
const CourseFactory_1 = require("../factory/CourseFactory");
const MathCourse_1 = require("../models/MathCourse");
const ScienceCourse_1 = require("../models/ScienceCourse");
const HistoryCourse_1 = require("../models/HistoryCourse");
class CourseDAO {
    constructor() {
        this.storeName = 'courses';
        this.dbManager = IDBManager_1.IDBManager.getInstance();
        this.initDB();
    }
    async initDB() {
        await this.dbManager.initDB([{ name: this.storeName, keyPath: 'id' }]);
    }
    async add(course) {
        await this.dbManager.add(this.storeName, {
            id: course.getId(),
            title: course.getTitle(),
            type: this.getCourseType(course),
            teacher: course.getTeacher()
        });
    }
    async getById(id) {
        const data = await this.dbManager.get(this.storeName, id);
        if (!data)
            return null;
        return CourseFactory_1.CourseFactory.createCourse(data.type, data.id, data.title, data.teacher);
    }
    async getAll() {
        const data = await this.dbManager.getAll(this.storeName);
        return data.map(item => CourseFactory_1.CourseFactory.createCourse(item.type, item.id, item.title, item.teacher));
    }
    async update(course) {
        await this.dbManager.update(this.storeName, {
            id: course.getId(),
            title: course.getTitle(),
            type: this.getCourseType(course),
            teacher: course.getTeacher()
        });
    }
    async delete(id) {
        await this.dbManager.delete(this.storeName, id);
    }
    getCourseType(course) {
        if (course instanceof MathCourse_1.MathCourse)
            return 'math';
        if (course instanceof ScienceCourse_1.ScienceCourse)
            return 'science';
        if (course instanceof HistoryCourse_1.HistoryCourse)
            return 'history';
        throw new Error('Unknown course type');
    }
}
exports.CourseDAO = CourseDAO;
//# sourceMappingURL=CourseDAO.js.map