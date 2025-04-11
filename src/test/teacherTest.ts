import 'fake-indexeddb/auto';
import { TeacherDAO } from '../dao/TeacherDAO';
import { Teacher } from '../models/Teacher';
import { MathCourse } from '../models/MathCourse';

async function testTeacherDAO() {
    const teacherDAO = new TeacherDAO();

    // Create a Teacher object
    const teacher = new Teacher(1, "John Smith", "Mathematics");
    console.log("Adding teacher:", teacher.getName());

    try {
        // Test add method
        await teacherDAO.add(teacher);
        console.log("✅ Teacher added successfully!");

        // Test getById method
        const retrievedTeacher = await teacherDAO.getById(1);
        if (retrievedTeacher) {
            console.log("📝 Retrieved teacher:", retrievedTeacher.getName());
        } else {
            console.log("❌ Teacher not found");
        }

        // Test getAll method
        const allTeachers = await teacherDAO.getAll();
        console.log("📚 All teachers:", allTeachers.map(t => t.getName()));

        // Create a Course object
        const course = new MathCourse(1, "Advanced Calculus", teacher);

        // Test update method
        teacher.assign(course);
        await teacherDAO.update(teacher);
        console.log("✅ Teacher updated successfully!");

        // Test delete method
        await teacherDAO.delete(1);
        console.log("✅ Teacher deleted successfully!");

    } catch (error) {
        console.error("❌ Error:", error);
    }
}

testTeacherDAO().catch(console.error);