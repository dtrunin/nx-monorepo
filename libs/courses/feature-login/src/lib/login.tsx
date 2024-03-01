import styles from './login.module.scss';
import { Button } from '@nx-monorepo/courses-shared-ui';

export function Login() {
  return (
    <div className={styles['container']}>
      <h1>Login</h1>
      <form className={styles['form']}>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="email">
            Email:
          </label>
          <input
            className={styles['input']}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label className={styles['label']} htmlFor="password">
            Password:
          </label>
          <input
            className={styles['input']}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <Button type="submit" text="Login" />
        <div className={styles['registration-note']}>
          If you do not have an account you may Register
        </div>
      </form>
    </div>
  );
}

export default Login;
