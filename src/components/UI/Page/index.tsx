"use client";

import Image from "next/image";
import { FC, useState } from "react";
import YourLogo from "@/assets/logo.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaChevronDown, FaRegUser } from "react-icons/fa";
import { IoIosLogOut, IoMdClose } from "react-icons/io";

type TPage = {
  children: React.ReactNode;
};

export const Page: FC<TPage> = ({ children }) => {
  const fakeUser = {
    name: "Fabio C. Pinto",
  };

  const [pageActions, setPageActions] = useState({
    menu: false,
    userMenu: false,
  });

  const userActions = [
    { name: "Perfil", icon: <FaRegUser className="w-6 h-6" /> },
    { name: "Sair", icon: <IoIosLogOut className="w-6 h-6" /> },
  ];

  const fakePages = [
    { name: "Home", link: "/" },
    { name: "Sobre", link: "/sobre" },
    { name: "Contato", link: "/contato" },
    { name: "FAQ", link: "/faq" },
  ];

  const handlePageActions = (key: keyof typeof pageActions) => {
    setPageActions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-whitesmoke relative  min-h-screen h-full flex flex-col">
      <span className="absolute h-80 w-full bg-blue-dark top-0 left-0"></span>

      <section className="z-10">
        <header className="px-8 py-4 flex justify-between">
          <section className="flex gap-4 items-center">
            <button onClick={() => handlePageActions("menu")}>
              <HiOutlineMenuAlt1 className="w-6 h-6" color="#fff" />
            </button>
            <Image
              src={YourLogo}
              alt="Logo que representa a indentidade visual da empresa"
              height={20}
            />
          </section>

          <section className="relative font-semibold cursor-pointer">
            <article
              className=" text-white flex items-center gap-4"
              onClick={() => handlePageActions("userMenu")}
            >
              <div className="bg-gray-quaternary w-10 h-10 rounded-full grid place-items-center">
                {fakeUser.name[0]}
              </div>

              <p>{fakeUser.name}</p>

              <FaChevronDown className="w-6 h-6" />
            </article>

            {pageActions.userMenu && (
              <aside className="absolute -bottom-28 w-full bg-white border border-blue-dark text-blue-dark font-normal rounded-lg animate-fadeIn">
                {userActions.map((action, index) => (
                  <button
                    className={`flex items-center gap-2 w-full p-2  ${
                      index === 1 ? "rounded-b-lg" : "rounded-t-lg"
                    } hover:bg-whitesmoke transition-colors duration-300`}
                    onClick={() => handlePageActions("userMenu")}
                  >
                    {action.icon}
                    <p className="text-lg">{action.name}</p>
                  </button>
                ))}
              </aside>
            )}
          </section>

          {pageActions.menu && (
            <div className="z-20 fixed left-0 pt-16 p-4 h-screen w-80 animate-slideLeft bg-blue-dark">
              <nav className="relative">
                <button
                  className="absolute -top-12 right-4"
                  onClick={() => handlePageActions("menu")}
                >
                  <IoMdClose className="w-8 h-8 text-white" />
                </button>
                {fakePages.map((page) => (
                  <button
                    className="w-full text-left p-4 rounded-lg text-white hover:bg-whitesmoke hover:text-blue-dark transition-colors duration-300"
                    onClick={() =>
                      alert(`Simulando clique para a página: ${page.name}`)
                    }
                  >
                    {page.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </header>
        <main className="w-full h-full p-4">{children}</main>
      </section>
    </div>
  );
};
