import styles from './search-bar.module.scss';
import { Button } from '@nx-monorepo/courses-shared-ui';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

export interface SearchBarProps {
  onChange: (value: string) => void;
}

export function SearchBar({ onChange }: SearchBarProps) {
  function onSubmit(e: SyntheticEvent): void {
    e.preventDefault();
    onChange(searchText);
  }

  function onSearchTextChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value);
  }

  const [searchText, setSearchText] = useState('');

  return (
    <form className={styles['container']} onSubmit={onSubmit}>
      <input
        className={styles['input']}
        type="text"
        placeholder="Input text"
        value={searchText}
        onChange={onSearchTextChange}
      />
      <Button text="Search" type="submit" />
    </form>
  );
}

export default SearchBar;
