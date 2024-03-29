import styles from './course-card.module.scss';
import { Course } from '@nx-monorepo/courses-data-access-course-list';
import { Button } from '@nx-monorepo/courses-shared-ui';
import {
  formatDate,
  formatDuration,
} from '@nx-monorepo/shared-util-formatting';

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
  onShowCourse: (course: Course) => void;
}

export function CourseCard({ course, onShowCourse }: CourseCardProps) {
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
          <CourseInfo name="Duration" value={formatDuration(course.duration)} />
          <CourseInfo name="Created" value={formatDate(course.creationDate)} />
          <div className={styles['buttons']}>
            <Button
              text="Show course"
              onClick={() => onShowCourse(course)}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
