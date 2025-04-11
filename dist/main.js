"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./models/Student");
const Teacher_1 = require("./models/Teacher");
const CourseFactory_1 = require("./factory/CourseFactory");
const StudentDAO_1 = require("./dao/StudentDAO");
const ResourceManager_1 = require("./singleton/ResourceManager");
const Service_1 = require("./decorators/Service");
const Resource_1 = require("./models/Resource");
async function main() {
    // Création d'un professeur
    const mathTeacher = new Teacher_1.Teacher(1, "John Smith", "Mathematics");
    // Création de cours avec la factory
    const mathCourse = CourseFactory_1.CourseFactory.createCourse('math', 1, "Advanced Calculus", mathTeacher);
    const scienceCourse = CourseFactory_1.CourseFactory.createCourse('science', 2, "Physics", mathTeacher);
    // Création d'un étudiant
    const student = new Student_1.Student(1, "Alice Johnson", "alice@school.com");
    // Inscription aux cours
    student.enroll(mathCourse);
    student.enroll(scienceCourse);
    // Ajout de services
    student.addService(new Service_1.Tutoring());
    student.addService(new Service_1.Sport());
    student.addService(new Service_1.Art());
    // Utilisation du DAO pour persister l'étudiant
    const studentDAO = new StudentDAO_1.StudentDAO();
    await studentDAO.add(student);
    // Récupération de l'étudiant
    const savedStudent = await studentDAO.getById(1);
    console.log("Student retrieved:", savedStudent?.getName());
    // Utilisation du ResourceManager (singleton)
    const resourceManager = ResourceManager_1.ResourceManager.getInstance();
    resourceManager.addResource(new Resource_1.Resource(1, "Projector"));
    resourceManager.addResource(new Resource_1.Resource(2, "Computer"));
    // Allocation d'une ressource
    const projector = resourceManager.allocateResource(1);
    console.log("Allocated resource:", projector?.getType());
}
main().catch(console.error);
//# sourceMappingURL=main.js.map