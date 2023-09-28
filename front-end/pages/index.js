import { useUser } from "@auth0/nextjs-auth0/client";

function index() {
  const { user, err, isLoading } = useUser();
  if (isLoading) return <div>Loading ...</div>;
  if (err) return <div>{err.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

export default index;
