import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
function App({ Component, pageProps }) {
  return (
    <Layout>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Layout>
  );
}

export default App;
