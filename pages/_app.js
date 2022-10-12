import "../styles/globals.css";
import AdminLayout from "./admin/layout";
import { adminRoutes } from "../src/utils/routes";
import { AuthProvider } from "../src/context/authProvider";
function MyApp({ Component, pageProps, ...appProps }) {
  //Make admin layout
  const { router } = appProps;
  if (adminRoutes.includes(router.pathname)) {
    return (
      <AuthProvider>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </AuthProvider>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
