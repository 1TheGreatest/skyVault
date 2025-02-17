import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Design Section */}
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex items-center">
            <Image
              src="/icons/logo-full.svg"
              alt="logo"
              width={224}
              height={82}
              className="h-auto"
            />
          </div>

          <div className="space-y-5 text-white">
            <h1 className="h1">
              Secure storage up in the cloud, with a touch of elegance
            </h1>
            <p className="body-1">
              This is a place you can store all your documents.
            </p>
          </div>
          <Image
            src="/images/illustration.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      {/* SignIn SignUp Section */}
      <section className="flex flex-1 flex-col items-center p-4 py-10 lg:justify-center lg=p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/images/skVault.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
