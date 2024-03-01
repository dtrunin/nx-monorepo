import styles from './input.module.scss';
import { HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  id: string;
  labelText: string;
  placeholderText?: string;
  type?: HTMLInputTypeAttribute;
}

const defaultPlaceholder = 'Input text';

export function Input({ id, labelText, placeholderText, type }: InputProps) {
  return (
    <div className={styles['container']}>
      <label className={styles['label']} htmlFor={id}>
        {`${labelText}:`}
      </label>
      <input
        className={styles['input']}
        type={type}
        id={id}
        placeholder={placeholderText ?? defaultPlaceholder}
      />
    </div>
  );
}

export default Input;
