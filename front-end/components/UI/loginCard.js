import classes from './loginCard.module.css';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';

function LoginCard(props) {
  const { user, err, isLoading } = useUser();
  const [sponsorLink, setSoponsoLink] = useState({
    isGenerated: false,
    linkGenerated: '',
  });

  const hendalerSponsorLink = () => {
    setSoponsoLink({
      ...sponsorLink,
      linkGenerated: `http://localhost:8081/sponsored/${
        user.sub.split('|')[1]
      }`,
      isGenerated: true,
    });
  };

  return (
    <div>
      {isLoading && <p> Loading ...</p>}
      {err && <div>{err.message}</div>}
      {user && (
        <div className={classes.log}>
          Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
          <br />
          <button onClick={hendalerSponsorLink}>Generate sponsore link</button>
        </div>
      )}
      {sponsorLink.isGenerated && (
        <div className={classes.log}>{sponsorLink.linkGenerated}</div>
      )}
      {!user && (
        <div className={classes.log}>
          <h1>Welcome to our website</h1>
          <br />
          <Link href="/api/auth/login" className={classes.log_box}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginCard;
