import styles from './button.module.scss';
import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface ButtonProps {
  text?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button
      type={type ?? 'button'}
      className={styles['button']}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
