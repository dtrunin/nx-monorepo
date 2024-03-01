import styles from './login.module.scss';
import { Button, Input } from '@nx-monorepo/courses-shared-ui';

export function Login() {
  return (
    <div className={styles['container']}>
      <h1>Login</h1>
      <form className={styles['form']}>
        <Input id="email" labelText="Email" type="email" />
        <Input id="password" labelText="Password" type="password" />
        <Button type="submit" text="Login" />
        <div className={styles['registration-note']}>
          If you do not have an account you may Register
        </div>
      </form>
    </div>
  );
}

export default Login;
