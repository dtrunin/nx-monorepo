import styles from './empty-course-list.module.scss';

/* eslint-disable-next-line */
export interface EmptyCourseListProps {}

export function EmptyCourseList(props: EmptyCourseListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EmptyCourseList!</h1>
    </div>
  );
}

export default EmptyCourseList;
