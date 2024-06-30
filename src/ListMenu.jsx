import { useState } from "react";
import { Link } from "react-router-dom";

function ListMenu({ active }) {
  const links = [
    {
      id: 0,
      name: "Home",
      href: "/",
    },
    {
      id: 1,
      name: "Best Seller",
      href: "/best-seller",
    },
    {
      id: 2,
      name: "Category",
      href: null,
      list: [
        { id: 2.1, name: "Entradas", href: "/category/entradas" },
        { id: 2.1, name: "Principales", href: "/category/principales" },
        { id: 2.1, name: "Vegetarianos", href: "/category/vegetarianos" },
        { id: 2.1, name: "Postres", href: "/category/postres" },
      ],
    },
    {
      id: 4,
      name: "About",
      href: "/about",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const listMenu = links.map((link) => (
    <li key={link.id} className="h-full relative">
      <Link
        to={!link.list ? link.href : null}
        onClick={link.list && toggleMenu}
      >
        {link.name}
        <div
          className={
            link.list
              ? "block md:absolute md:top-full relative md:bg-white md:text-black"
              : "hidden"
          }
        >
          {isOpen && link.list
            ? link.list.map((item) => (
                <li key={item.id} className="p-2">
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))
            : null}
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <ul className="list-none text-white flex flex-col md:flex-row uppercase md:gap-5 relative">
        {listMenu}
      </ul>
    </>
  );
}

export default ListMenu;
