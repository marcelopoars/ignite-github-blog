import { Outlet } from "react-router-dom";
import { Header } from "../../components";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
