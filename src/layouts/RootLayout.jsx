import { Outlet } from "react-router";

import Header from "@/components/header/Header";
import FooterComponent from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        className={cn(
          "sticky top-0 z-50 w-full transition-all",
          scrolled &&
            "bg-background/70 backdrop-blur-md border-b border-border shadow-sm",
        )}
      >
        <div className="container mx-auto px-4">
          <Header />
        </div>
      </div>

      <main className="min-h-screen container mx-auto p-4">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
};

export default RootLayout;
