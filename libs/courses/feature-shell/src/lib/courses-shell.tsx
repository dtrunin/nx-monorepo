import { Navigate, Route, Routes } from 'react-router-dom';

import {
  CourseInfo,
  CourseList,
} from '@nx-monorepo/courses-feature-course-list';

const routes = {
  courses: '/courses',
};
export function CoursesShell() {
  return (
    <Routes>
      <Route path={routes.courses} element={<CourseList />} />
      <Route path={`${routes.courses}/:id`} element={<CourseInfo />} />
      <Route path="*" element={<Navigate to={routes.courses} />} />
    </Routes>
  );
}

export default CoursesShell;
