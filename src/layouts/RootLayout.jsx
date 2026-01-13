import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <h1>Welcome to the Root Layout</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
