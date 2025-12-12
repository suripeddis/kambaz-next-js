import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  const { enrollments, courses } = db;

  function enrollUserInCourse(userId, courseId) {
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }

  function unenrollUserFromCourse(userId, courseId) {
    const index = enrollments.findIndex(
      (e) => e.user === userId && e.course === courseId
    );
    if (index !== -1) {
      enrollments.splice(index, 1);
    }
  }

  function findCoursesForUser(userId) {
    const userEnrollments = enrollments.filter((e) => e.user === userId);
    const enrolledCourses = userEnrollments.map((enrollment) =>
      courses.find((course) => course._id === enrollment.course)
    );
    return enrolledCourses.filter((c) => c !== undefined);
  }

  function unenrollAllUsersFromCourse(courseId) {
    const index = enrollments.findIndex((e) => e.course === courseId);
    if (index !== -1) {
      enrollments.splice(index, 1);
    }
  }

  return {
    enrollUserInCourse,
    unenrollUserFromCourse,
    findCoursesForUser,
    unenrollAllUsersFromCourse,
  };
}