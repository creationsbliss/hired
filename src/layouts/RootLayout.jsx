import { Outlet } from "react-router";

import Header from "@/components/header/Header";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
