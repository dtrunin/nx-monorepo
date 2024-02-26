import styles from './empty-course-list.module.scss';
import { Button } from '@nx-monorepo/courses-shared-ui';

export function EmptyCourseList() {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Your list is empty</div>
      <div>Please use ’Add New Course’ button to add your first course</div>
      <div>
        <Button text="Add new course" />
      </div>
    </div>
  );
}

export default EmptyCourseList;
