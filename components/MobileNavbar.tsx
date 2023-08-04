"use client";

import { AlignRight } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

const MobileNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div onClick={() => setNavbarOpen(!navbarOpen)}>
      {!navbarOpen ? (
        <div className="text-3xl cursor-pointer mx-2 absolute right-8 flex md:hidden">
          <X />
        </div>
      ) : (
        <div className="text-3xl cursor-pointer mx-2  absolute right-8 flex md:hidden">
          <AlignRight />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
