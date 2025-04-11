"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("fake-indexeddb/auto");
const CourseDAO_1 = require("../dao/CourseDAO");
const Teacher_1 = require("../models/Teacher");
const MathCourse_1 = require("../models/MathCourse");
async function testCourseDAO() {
    const courseDAO = new CourseDAO_1.CourseDAO();
    // Create a Teacher object
    const teacher = new Teacher_1.Teacher(1, "John Smith", "Mathematics");
    // Create a Course object
    const course = new MathCourse_1.MathCourse(1, "Advanced Calculus", teacher);
    console.log("Adding course:", course.getTitle());
    try {
        // Test add method
        await courseDAO.add(course);
        console.log("✅ Course added successfully!");
        // Test getById method
        const retrievedCourse = await courseDAO.getById(1);
        if (retrievedCourse) {
            console.log("📝 Retrieved course:", retrievedCourse.getTitle());
        }
        else {
            console.log("❌ Course not found");
        }
        // Test getAll method
        const allCourses = await courseDAO.getAll();
        console.log("📚 All courses:", allCourses.map(c => c.getTitle()));
        // Test update method
        course.getTeacher().assign(course); // Example update
        await courseDAO.update(course);
        console.log("✅ Course updated successfully!");
        // Test delete method
        await courseDAO.delete(1);
        console.log("✅ Course deleted successfully!");
    }
    catch (error) {
        console.error("❌ Error:", error);
    }
}
testCourseDAO().catch(console.error);
//# sourceMappingURL=courseTest.js.map