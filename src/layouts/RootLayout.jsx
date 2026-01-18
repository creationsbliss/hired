import { Outlet } from "react-router";

import Header from "@/components/header/Header";
import FooterComponent from "@/components/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Header />

        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>

      <FooterComponent />
    </div>
  );
};

export default RootLayout;
