import styles from './app.module.scss';
import { FeatureHeader } from '@nx-monorepo/courses-shared-feature-header';
import { CoursesShell } from '@nx-monorepo/courses-feature-shell';

export function App() {
  return (
    <div className={styles['container']}>
      <FeatureHeader />
      <div className={styles['content']}>
        <CoursesShell />
      </div>
    </div>
  );
}

export default App;
