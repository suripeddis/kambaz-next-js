export const enrollIntoCourse = async (userId: string, courseId: string) => {
    const res = await fetch(`/api/enrollments/${userId}/${courseId}`, {
      method: "POST",
    });
    return res.json();
  };
  
  export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const res = await fetch(`/api/enrollments/${userId}/${courseId}`, {
      method: "DELETE",
    });
    return res.json();
  };
  