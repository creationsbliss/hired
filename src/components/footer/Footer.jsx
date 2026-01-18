import React from "react";

const FooterComponent = () => {
  return (
    <footer className="text-center bg-secondary py-4">
      &copy; {new Date().getFullYear()} Hired All rights reserved.
    </footer>
  );
};

export default FooterComponent;
