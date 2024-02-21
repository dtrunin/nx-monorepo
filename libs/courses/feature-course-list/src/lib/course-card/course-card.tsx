import styles from './course-card.module.scss';

/* eslint-disable-next-line */
export interface CourseCardProps {}

export function CourseCard(props: CourseCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CourseCard!</h1>
    </div>
  );
}

export default CourseCard;
