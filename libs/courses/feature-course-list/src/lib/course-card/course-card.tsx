import styles from './course-card.module.scss';
import { Course } from '@nx-monorepo/data-access-course-list';

interface CourseInfoProps {
  name: string;
  value: string;
}

function CourseInfo({ name, value }: CourseInfoProps) {
  return (
    <div>
      <span className={styles['info-title']}>{name}:</span> {value}
    </div>
  );
}

export interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className={styles['card']}>
      <h1>{course.title}</h1>
      <div className={styles['body']}>
        <div>{course.description}</div>
        <div>
          <CourseInfo
            name="Authors"
            value={course.authors.map((a) => a.name).join(', ')}
          />
          <CourseInfo name="Duration" value={course.duration.toString()} />
          <CourseInfo name="Created" value={course.creationDate} />
          <div className={styles['buttons']}>
            <button>show course</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
