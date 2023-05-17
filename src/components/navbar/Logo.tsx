'use client';

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Logo = () => {
  //const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Image
          alt="logo"
          className="hidden md:block cursor-pointer"
          height={100}
          width={100}
          src="/images/logo.png"
        />
      )}
    </>
  );
};
