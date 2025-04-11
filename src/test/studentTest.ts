import 'fake-indexeddb/auto';
import { Student } from '../models/Student';
import { StudentDAO } from '../dao/StudentDAO';
import { Teacher } from '../models/Teacher';
import { MathCourse } from '../models/MathCourse';

async function testStudentDAO() {
    const studentDAO = new StudentDAO();

    // Create a new student
    const student = new Student(1, "Alice Johnson", "alice@school.com");
    console.log("Adding student:", student.getName());

    try {
        // Test add method
        await studentDAO.add(student);
        console.log("✅ Student added successfully!");

        // Test getById method
        const retrievedStudent = await studentDAO.getById(1);
        if (retrievedStudent) {
            console.log("📝 Retrieved student:", retrievedStudent.getName());
        } else {
            console.log("❌ Student not found");
        }

        // Test getAll method
        const allStudents = await studentDAO.getAll();
        console.log("📚 All students:", allStudents.map(s => s.getName()));

        // Create a Teacher object
        const teacher = new Teacher(2, "John Smith", "Physics");

        // Create a Course object
        const course = new MathCourse(2, "Physics", teacher);

        // Test update method
        student.enroll(course); // Use the Course object
        await studentDAO.update(student);
        console.log("✅ Student updated successfully!");

        // Test delete method
        await studentDAO.delete(1);
        console.log("✅ Student deleted successfully!");

    } catch (error) {
        console.error("❌ Error:", error);
    }
}

testStudentDAO().catch(console.error);