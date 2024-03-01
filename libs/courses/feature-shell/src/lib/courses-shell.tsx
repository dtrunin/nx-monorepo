import { Navigate, Route, Routes } from 'react-router-dom';

import {
  CourseInfo,
  CourseList,
} from '@nx-monorepo/courses-feature-course-list';
import { Login } from '@nx-monorepo/courses-feature-login';

const routes = {
  courses: '/courses',
  login: '/login',
};
export function CoursesShell() {
  return (
    <Routes>
      <Route path={routes.courses} element={<CourseList />} />
      <Route path={`${routes.courses}/:id`} element={<CourseInfo />} />
      <Route path={routes.login} element={<Login />} />
      <Route path="*" element={<Navigate to={routes.courses} />} />
    </Routes>
  );
}

export default CoursesShell;
