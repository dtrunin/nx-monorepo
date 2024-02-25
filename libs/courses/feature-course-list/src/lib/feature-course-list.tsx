import styles from './feature-course-list.module.scss';
import { useCourses } from '@nx-monorepo/courses-data-access-course-list';
import CourseCard from './course-card/course-card';
import SearchBar from './search-bar/search-bar';
import { isEmpty } from 'lodash-es';
import EmptyCourseList from './empty-course-list/empty-course-list';

export function FeatureCourseList() {
  const { courses, setFilter } = useCourses();

  return (
    <>
      <div className={styles['top-panel']}>
        <SearchBar onChange={setFilter} />
      </div>
      {isEmpty(courses) && <EmptyCourseList />}
      {!isEmpty(courses) && (
        <div className={styles['courses']}>
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </>
  );
}

export default FeatureCourseList;
