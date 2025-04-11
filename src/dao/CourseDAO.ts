import { ICourseDAO } from './ICourseDAO';
import { Course } from '../models/Course';
import { IDBManager } from './IDBManager';
import { CourseFactory } from '../factory/CourseFactory';
import { Teacher } from '../models/Teacher';
import { MathCourse } from '../models/MathCourse';
import { ScienceCourse } from '../models/ScienceCourse';
import { HistoryCourse } from '../models/HistoryCourse';

export class CourseDAO implements ICourseDAO {
    private dbManager: IDBManager;
    private storeName = 'courses';

    constructor() {
        this.dbManager = IDBManager.getInstance();
        this.initDB();
    }

    private async initDB(): Promise<void> {
        await this.dbManager.initDB([{ name: this.storeName, keyPath: 'id' }]);
    }

    async add(course: Course): Promise<void> {
        await this.dbManager.add(this.storeName, {
            id: course.getId(),
            title: course.getTitle(),
            type: this.getCourseType(course),
            teacher: course.getTeacher()
        });
    }

    async getById(id: number): Promise<Course | null> {
        const data = await this.dbManager.get(this.storeName, id);
        if (!data) return null;
        
        return CourseFactory.createCourse(
            data.type,
            data.id,
            data.title,
            data.teacher
        );
    }

    async getAll(): Promise<Course[]> {
        const data = await this.dbManager.getAll(this.storeName);
        return data.map(item => 
            CourseFactory.createCourse(
                item.type,
                item.id,
                item.title,
                item.teacher
            )
        );
    }

    async update(course: Course): Promise<void> {
        await this.dbManager.update(this.storeName, {
            id: course.getId(),
            title: course.getTitle(),
            type: this.getCourseType(course),
            teacher: course.getTeacher()
        });
    }

    async delete(id: number): Promise<void> {
        await this.dbManager.delete(this.storeName, id);
    }

    private getCourseType(course: Course): 'math' | 'science' | 'history' {
        if (course instanceof MathCourse) return 'math';
        if (course instanceof ScienceCourse) return 'science';
        if (course instanceof HistoryCourse) return 'history';
        throw new Error('Unknown course type');
    }
}
