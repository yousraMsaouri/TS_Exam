"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("fake-indexeddb/auto");
const Student_1 = require("../models/Student");
const StudentDAO_1 = require("../dao/StudentDAO");
const Teacher_1 = require("../models/Teacher");
const MathCourse_1 = require("../models/MathCourse");
async function testStudentDAO() {
    const studentDAO = new StudentDAO_1.StudentDAO();
    // Create a new student
    const student = new Student_1.Student(1, "Alice Johnson", "alice@school.com");
    console.log("Adding student:", student.getName());
    try {
        // Test add method
        await studentDAO.add(student);
        console.log("✅ Student added successfully!");
        // Test getById method
        const retrievedStudent = await studentDAO.getById(1);
        if (retrievedStudent) {
            console.log("📝 Retrieved student:", retrievedStudent.getName());
        }
        else {
            console.log("❌ Student not found");
        }
        // Test getAll method
        const allStudents = await studentDAO.getAll();
        console.log("📚 All students:", allStudents.map(s => s.getName()));
        // Create a Teacher object
        const teacher = new Teacher_1.Teacher(2, "John Smith", "Physics");
        // Create a Course object
        const course = new MathCourse_1.MathCourse(2, "Physics", teacher);
        // Test update method
        student.enroll(course); // Use the Course object
        await studentDAO.update(student);
        console.log("✅ Student updated successfully!");
        // Test delete method
        await studentDAO.delete(1);
        console.log("✅ Student deleted successfully!");
    }
    catch (error) {
        console.error("❌ Error:", error);
    }
}
testStudentDAO().catch(console.error);
//# sourceMappingURL=studentTest.js.map