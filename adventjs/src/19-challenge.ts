// https://adventjs.dev/challenges/19

export default function learn(time: number, courses: number[]) {
  let currentTimeCourses = 0;
  let selectedCourses = [];

  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const timeCourses = courses[i] + courses[j];
      if (timeCourses <= time && timeCourses > currentTimeCourses) {
        currentTimeCourses = timeCourses;
        selectedCourses = [i, j];
      }
    }
  }

  return selectedCourses.length === 0 ? null : selectedCourses;
}
