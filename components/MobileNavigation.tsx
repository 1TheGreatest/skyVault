"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FileUploader from "./FileUploader";

interface Props {
  ownerId: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}

const MobileNavigation = ({
  ownerId,
  accountId,
  fullName,
  avatar,
  email,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="mobile-header">
      <Image
        src="/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Image src="/icons/menu.svg" alt="Menu" width={30} height={30} />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatar}
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item, idx) => {
                return (
                  <Link key={idx} href={item.url} className="lg:w-full">
                    <li
                      className={cn(
                        "mobile-nav-item",
                        pathname === item.url && "shad-active"
                      )}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={24}
                        height={24}
                        className={cn(
                          "nav-icon",
                          pathname === item.url && "nav-icon-active"
                        )}
                      />
                      <p>{item.name}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
          <Separator className="my-4 bg-light-200/20" />

          <div className="flex flex-col justify-between gap-5">
            <FileUploader></FileUploader>
            <Button
              className="mobile-sign-out-button"
              type="submit"
              onClick={() => {}}
            >
              <Image
                src="/icons/logout.svg"
                alt="logo"
                width={24}
                height={24}
              />
              <p>Logout</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
