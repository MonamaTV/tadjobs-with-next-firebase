import Header from "../../src/components/Header";
import SideMenu from "../../src/components/SideMenu";

export default function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <SideMenu />
        <main>{children}</main>
      </div>
    </>
  );
}
