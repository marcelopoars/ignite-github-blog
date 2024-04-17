import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
