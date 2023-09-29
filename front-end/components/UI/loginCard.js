import classes from './loginCard.module.css';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

function LoginCard(props) {
  const { user, err, isLoading } = useUser();
  if (isLoading) return <div>Loading ...</div>;
  if (err) return <div>{err.message}</div>;

  if (user) {
    console.log(user);
    return (
      <div className={classes.log}>
        Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }
  return (
    <div className={classes.log}>
      <p className={classes.log_detail}>
        <strong>Welcome !</strong>
        <br />
        <br />
        <Link href="/api/auth/login" className={classes.log_box}>
          Login
        </Link>{' '}
        to connect to your account <br />
        <Link
          href="https://dev-zk4zrlbpywf1m1zt.eu.auth0.com/u/signup?state=hKFo2SB3QWEwR0VPblhDZGR4TG14Z0ViWFFVRGV5QV9KVVE3aqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDNrNUN6YW9oX3RSRVc2WURoNjdnSGxvQlhUSUpEa29ko2NpZNkgRzA4TzZqUXV1YzFmN28yRElFUmVoZEtTalBTVGZpSmc"
          className={classes.log_box2}
        >
          Don't have an account?{' '}
        </Link>{' '}
      </p>
    </div>
  );
}

export default LoginCard;
