import "../styles/globals.css";
import AdminLayout from "./admin/layout";

function MyApp({ Component, pageProps, ...appProps }) {
  //Make admin layout
  const { router } = appProps;
  const routes = ["/admin", "/admin/profile", "/admin/jobs", "/admin/edit"];
  if (routes.includes(router.pathname)) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
