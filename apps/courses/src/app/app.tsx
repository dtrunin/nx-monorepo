import styles from './app.module.scss';
import { FeatureCourseList } from '@nx-monorepo/courses-feature-course-list';
import { FeatureHeader } from '@nx-monorepo/courses-shared-feature-header';

export function App() {
  return (
    <div className={styles['container']}>
      <FeatureHeader />
      <div className={styles['content']}>
        <FeatureCourseList />
      </div>
    </div>
  );
}

export default App;
