import { useContext } from "react";
import Header from "../../src/components/Header";
import SideMenu from "../../src/components/SideMenu";
import { AuthContext } from "../../src/context/authProvider";

export default function AdminLayout({ children }) {
  const { user } = useContext(AuthContext);
  return (
    user && (
      <>
        <Header />
        <div className="flex">
          <SideMenu />
          <main>{children}</main>
        </div>
      </>
    )
  );
}
