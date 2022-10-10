import "../styles/globals.css";
import AdminLayout from "./admin/layout";
import { adminRoutes } from "../src/utils/routes";
function MyApp({ Component, pageProps, ...appProps }) {
  //Make admin layout
  const { router } = appProps;
  if (adminRoutes.includes(router.pathname)) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
