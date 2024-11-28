import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
export default AppLayout;
