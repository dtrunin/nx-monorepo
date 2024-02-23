import styles from './button.module.scss';

export interface ButtonProps {
  text?: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button type="button" className={styles['button']}>
      {text}
    </button>
  );
}

export default Button;
