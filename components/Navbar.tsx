"use client";

import { NAV_LINKS } from "@/constant";
import classnames from "classnames";
import { easeInOut, motion, scroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { useActiveSectionContext } from "../context/active-section-context";

const Navbar = () => {
  const [bgStyle, setBgStyle] = useState("nav-bg-default");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const handleScroll = scroll((progress) =>
      progress > 0
        ? setBgStyle("nav-bg-onscroll")
        : setBgStyle("nav-bg-default")
    );

    const cancel = scroll(handleScroll);

    cancel();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: easeInOut, duration: 0.8 }}
      className={`${bgStyle}  z-[999] xl-container fixed right-0 left-0 ease-in duration-300 font-light`}
    >
      <div className="max-container py-4">
        <div className="mx-4 flexBetween">
          <Link href="/">
            <Image
              src="/Logo-light.svg"
              alt="Losttracker-logo"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          </Link>

          <ul className="max-lg:hidden flex items-center gap-2">
            {NAV_LINKS.map(({ label, key, href }, index) => {
              const isExternal = key === "login" || key === "missing";
              const isHome = key === "home";
              return (
                <motion.li
                  key={key}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: easeInOut, duration: 1 }}
                  className={classnames({
                    "nav-links": true,
                    [`delay-${index}`]: true,
                  })}
                >
                  {isExternal ? (
                    <Link href={href} rel="noopener noreferrer" target="_blank">
                      {label}
                    </Link>
                  ) : (
                    <Link
                      href={href}
                      className={classnames({
                        "text-primary-300": activeSection === key,
                      })}
                      onClick={() => {
                        setActiveSection(key);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {!isHome && label}

                      {key === activeSection && key !== "home" && (
                        <motion.span
                          className="bg-dark-500 rounded-full absolute inset-0 -z-10"
                          layoutId="activeSection"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </ul>

          {/* <Navlinks parentStyle="max-lg:hidden flex items-center gap-2" /> */}

          {/* Mobile button */}
          {/* <MobileMenu className="lg:hidden cursor-pointer z-10" /> */}
        </div>
      </div>
    </motion.nav>
  );
};

// .mobile-links {
//   @apply mr-20 text-right uppercase cursor-pointer text-[20px] content-font tracking-wider font-light text-primary-700 hover:text-gray-50 mb-6 transition-all duration-700 ease-in;
// }

// .mobile-menu {
//   @apply lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-end text-right items-center h-svh w-full bg-gray-70 transition-all ease-in duration-500 opacity-100 pointer-events-auto;
// }

// .mobile-menu-close {
//   @apply lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-end items-center h-svh w-full bg-gray-70 transition-all ease-in duration-500 opacity-0 pointer-events-none;
// }

// const MobileMenu = ({ className }: { className: string }) => {
//   const [openMenu, setOpenMenu] = useState(false);
//   return (
//     <Fragment>
//       <button
//         className={className}
//         onClick={() => {
//           setOpenMenu(!openMenu);
//         }}
//       >
//         <IoMenuSharp
//           size={25}
//           className={classnames({
//             "opacity-100 absolute top-6": !openMenu,
//             "opacity-0 absolute": openMenu,
//           })}
//         />
//         <IoCloseSharp
//           size={30}
//           className={classnames({
//             "text-primary-700 rotate-90 opacity-100 transition-all duration-500 ease-in":
//               openMenu,
//             "opacity-0": !openMenu,
//           })}
//         />
//       </button>

//       <div
//         className={classnames({
//           "mobile-menu": openMenu,
//           "mobile-menu-close": !openMenu,
//         })}
//       >
//         <Navlinks
//           isMobile
//           linkStyle={classnames({
//             "opacity-0": !openMenu,
//             "translate-x-14 opacity-100": openMenu,
//           })}
//           onClick={() => setOpenMenu(false)}
//         />
//       </div>
//     </Fragment>
//   );
// };

export default Navbar;
