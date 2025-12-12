import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(
    `${API_BASE}/api/enrollments`,
    { user: userId, course: courseId },
    { withCredentials: true }
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(
    `${API_BASE}/api/enrollments/${userId}/${courseId}`,
    { withCredentials: true }
  );
  return response.data;
};
