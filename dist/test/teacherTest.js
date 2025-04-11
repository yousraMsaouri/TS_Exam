"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("fake-indexeddb/auto");
const TeacherDAO_1 = require("../dao/TeacherDAO");
const Teacher_1 = require("../models/Teacher");
const MathCourse_1 = require("../models/MathCourse");
async function testTeacherDAO() {
    const teacherDAO = new TeacherDAO_1.TeacherDAO();
    // Create a Teacher object
    const teacher = new Teacher_1.Teacher(1, "John Smith", "Mathematics");
    console.log("Adding teacher:", teacher.getName());
    try {
        // Test add method
        await teacherDAO.add(teacher);
        console.log("✅ Teacher added successfully!");
        // Test getById method
        const retrievedTeacher = await teacherDAO.getById(1);
        if (retrievedTeacher) {
            console.log("📝 Retrieved teacher:", retrievedTeacher.getName());
        }
        else {
            console.log("❌ Teacher not found");
        }
        // Test getAll method
        const allTeachers = await teacherDAO.getAll();
        console.log("📚 All teachers:", allTeachers.map(t => t.getName()));
        // Create a Course object
        const course = new MathCourse_1.MathCourse(1, "Advanced Calculus", teacher);
        // Test update method
        teacher.assign(course);
        await teacherDAO.update(teacher);
        console.log("✅ Teacher updated successfully!");
        // Test delete method
        await teacherDAO.delete(1);
        console.log("✅ Teacher deleted successfully!");
    }
    catch (error) {
        console.error("❌ Error:", error);
    }
}
testTeacherDAO().catch(console.error);
//# sourceMappingURL=teacherTest.js.map