import styles from './feature-course-list.module.scss';
import { useCourses } from '@nx-monorepo/data-access-course-list';
import CourseCard from './course-card/course-card';

export function FeatureCourseList() {
  const courses = useCourses();

  return (
    <div className={styles['courses']}>
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  );
}

export default FeatureCourseList;
