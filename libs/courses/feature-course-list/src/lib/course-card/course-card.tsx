import styles from './course-card.module.scss';
import { Course } from '@nx-monorepo/courses-data-access-course-list';
import { Button } from '@nx-monorepo/courses-shared-ui';

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
            <Button text="show course"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
