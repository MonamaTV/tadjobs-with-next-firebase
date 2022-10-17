import "../styles/globals.css";
import AdminLayout from "./admin/layout";
import { adminRoutes } from "../src/utils/routes";
import { AuthProvider } from "../src/context/authProvider";
import AppQueryClientProvider from "../src/context/queryProvider";
function MyApp({ Component, pageProps, ...appProps }) {
  //Make admin layout
  const { router } = appProps;
  if (adminRoutes.includes(router.pathname)) {
    return (
      <AppQueryClientProvider>
        <AuthProvider>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </AuthProvider>
      </AppQueryClientProvider>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
