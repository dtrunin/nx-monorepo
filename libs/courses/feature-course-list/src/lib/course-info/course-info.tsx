import styles from './course-info.module.scss';
import { useCourse } from '@nx-monorepo/courses-data-access-course-list';
import { Button } from '@nx-monorepo/courses-shared-ui';
import { isNil } from 'lodash-es';
import CourseNotFound from '../course-not-found/course-not-found';
import { useTitle } from 'react-use';

export function CourseInfo() {
  const { course, back } = useCourse();
  useTitle(course?.title ?? 'Course not found');

  return (
    <div className={styles['container']}>
      {isNil(course) && <CourseNotFound />}
      {!isNil(course) && (
        <>
          <h1>{course.title}</h1>
          <div>{course.description}</div>
        </>
      )}
      <div className={styles['button-container']}>
        <Button text="Back" onClick={back}></Button>
      </div>
    </div>
  );
}

export default CourseInfo;
