import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Search from "./Search";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

const Header = () => {
  return (
    <header className="header">
      <Search></Search>
      <div className="header-wrapper">
        <FileUploader></FileUploader>
        <form
          action={async () => {
            "use server";
            await signOutUser();
          }}
        >
          <Button className="sign-out-button" type="submit">
            <Image
              src="/icons/logout.svg"
              alt="logo"
              className="w-6"
              width={24}
              height={24}
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
