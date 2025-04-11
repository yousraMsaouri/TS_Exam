import { Student } from './models/Student';
import { Teacher } from './models/Teacher';
import { CourseFactory } from './factory/CourseFactory';
import { StudentDAO } from './dao/StudentDAO';
import { ResourceManager } from './singleton/ResourceManager';
import { Tutoring, Sport, Art } from './decorators/Service';
import { Resource } from './models/Resource';

async function main() {
    // Création d'un professeur
    const mathTeacher = new Teacher(1, "John Smith", "Mathematics");
    
    // Création de cours avec la factory
    const mathCourse = CourseFactory.createCourse('math', 1, "Advanced Calculus", mathTeacher);
    const scienceCourse = CourseFactory.createCourse('science', 2, "Physics", mathTeacher);
    
    // Création d'un étudiant
    const student = new Student(1, "Alice Johnson", "alice@school.com");
    
    // Inscription aux cours
    student.enroll(mathCourse);
    student.enroll(scienceCourse);
    
    // Ajout de services
    student.addService(new Tutoring());
    student.addService(new Sport());
    student.addService(new Art());
    
    // Utilisation du DAO pour persister l'étudiant
    const studentDAO = new StudentDAO();
    await studentDAO.add(student);
    
    // Récupération de l'étudiant
    const savedStudent = await studentDAO.getById(1);
    console.log("Student retrieved:", savedStudent?.getName());
    
    // Utilisation du ResourceManager (singleton)
    const resourceManager = ResourceManager.getInstance();
    resourceManager.addResource(new Resource(1, "Projector"));
    resourceManager.addResource(new Resource(2, "Computer"));
    
    // Allocation d'une ressource
    const projector = resourceManager.allocateResource(1);
    console.log("Allocated resource:", projector?.getType());
}

main().catch(console.error);
