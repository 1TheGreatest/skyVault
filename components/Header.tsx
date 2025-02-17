import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Search from "./Search";
import { signOutUser } from "@/lib/actions/user.actions";
import FileUploader from "./FileUploader";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <Search></Search>
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId}  ></FileUploader>
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
