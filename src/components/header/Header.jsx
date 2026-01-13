import React from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <nav className="py-4 flex items-center justify-between">
      <div>
        <Link to="/">
          <img src="./logo.png" alt="logo" className="w-30" />
        </Link>
      </div>
      <div>
        <Button>Login</Button>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton>hello</UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
