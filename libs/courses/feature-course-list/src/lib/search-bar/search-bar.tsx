import styles from './search-bar.module.scss';
import { Button } from '@nx-monorepo/courses-shared-ui';

/* eslint-disable-next-line */
export interface SearchBarProps {}

export function SearchBar(props: SearchBarProps) {
  return (
    <div className={styles['container']}>
      <input className={styles['input']} type="text" placeholder="Input text" />
      <Button text="Search" />
    </div>
  );
}

export default SearchBar;
