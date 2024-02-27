import { Outlet } from "react-router-dom";
import Header from "../header";

const Layout = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
