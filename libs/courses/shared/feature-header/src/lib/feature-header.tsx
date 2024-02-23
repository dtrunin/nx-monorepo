import styles from './feature-header.module.scss';
import { Button, Logo } from '@nx-monorepo/courses-shared-ui';

/* eslint-disable-next-line */
export interface CoursesSharedFeatureHeaderProps {}

export function FeatureHeader(props: CoursesSharedFeatureHeaderProps) {
  return (
    <div className={styles['container']}>
      <Logo />
      <div>
        <Button text="Login" />
      </div>
    </div>
  );
}

export default FeatureHeader;
