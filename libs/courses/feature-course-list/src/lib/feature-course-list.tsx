import styles from './feature-course-list.module.scss';

/* eslint-disable-next-line */
export interface FeatureCourseListProps {}

export function FeatureCourseList(props: FeatureCourseListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureCourseList!</h1>
    </div>
  );
}

export default FeatureCourseList;
