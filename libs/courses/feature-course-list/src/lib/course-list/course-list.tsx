import styles from './course-list.module.scss';
import { useCourses } from '@nx-monorepo/courses-data-access-course-list';
import CourseCard from '../course-card/course-card';
import SearchBar from '../search-bar/search-bar';
import EmptyCourseList from '../empty-course-list/empty-course-list';
import { useTitle } from 'react-use';

export function CourseList() {
  const { courses, isCoursesEmpty, setFilter, showCourse } = useCourses();
  useTitle('Courses');

  return (
    <>
      {isCoursesEmpty && <EmptyCourseList />}
      {!isCoursesEmpty && (
        <div className={styles['container']}>
          <div className={styles['top-panel']}>
            <SearchBar onChange={setFilter} />
          </div>
          <div className={styles['courses']}>
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} onShowCourse={showCourse} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CourseList;
