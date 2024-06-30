"use client";

import { NAV_LINKS } from "@/constant";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { Fragment } from "react";
import { Suspense } from "react";

const Navbar = () => {
  const [bgStyle, setBgStyle] = useState("nav-bg-default");

  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== "undefined" && window.scrollY >= 150) {
        setBgStyle("nav-bg-onscroll");
      } else {
        setBgStyle("nav-bg-default");
      }
    };

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        changeColor();
        if (window.scrollY === 0) {
          if (window.location.hash) {
            history.replaceState(null, "", " ");
          }
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Suspense>
      <nav
        className={`${bgStyle} z-30 xl-container fixed right-0 left-0 ease-in duration-300 text-cream font-light`}
      >
        <div className="max-container py-4">
          <div className="flexBetween mx-4">
            <Link href="/">
              <Image
                src="/Logo-light.svg"
                alt="LostInNL-logo"
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </Link>

            <Navlinks parentStyle="max-lg:hidden flex items-center gap-6" />

            {/* Mobile button */}
            <MobileMenu className="lg:hidden cursor-pointer z-10" />
          </div>
        </div>
      </nav>
    </Suspense>
  );
};

type StyleProps = {
  parentStyle?: string;
  linkStyle?: string;
  onClick?: () => void;
  isMobile?: boolean;
};

const Navlinks = ({
  parentStyle,
  onClick,
  isMobile,
  linkStyle,
}: StyleProps) => {
  return (
    <ul className={parentStyle}>
      {NAV_LINKS.map(({ label, href, key }, index) => {
        const isExternal = key === "login" || key === "missing";
        return (
          <li
            key={key}
            className={classnames(`${linkStyle}`, {
              "nav-links": true,
              "mobile-links": isMobile,
              [`delay-${index}`]: isMobile,
            })}
          >
            {isExternal ? (
              <Link
                onClick={onClick}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {label}
              </Link>
            ) : (
              <Link onClick={onClick} href={href}>
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const MobileMenu = ({ className }: { className: string }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Fragment>
      <button
        className={className}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <IoMenuSharp
          size={25}
          className={classnames({
            "opacity-100 absolute top-6": !openMenu,
            "opacity-0 absolute": openMenu,
          })}
        />
        <IoCloseSharp
          size={30}
          className={classnames({
            "text-primary-700 rotate-90 opacity-100 transition-all duration-500 ease-in":
              openMenu,
            "opacity-0": !openMenu,
          })}
        />
      </button>

      <div
        className={classnames({
          "mobile-menu": openMenu,
          "mobile-menu-close": !openMenu,
        })}
      >
        <Navlinks
          isMobile
          linkStyle={classnames({
            "opacity-0": !openMenu,
            "translate-x-14 opacity-100": openMenu,
          })}
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </Fragment>
  );
};

export default Navbar;
