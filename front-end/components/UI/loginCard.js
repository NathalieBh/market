import classes from './loginCard.module.css';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

function LoginCard() {
  const { user, err, isLoading } = useUser();
  if (isLoading) return <div>Loading ...</div>;
  if (err) return <div>{err.message}</div>;

  if (user) {
    console.log(user);
    return (
      <div className={classes.login}>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <div className={classes.login}>
      <Link href="/api/auth/login">Login</Link>
    </div>
  );
}

export default LoginCard;
