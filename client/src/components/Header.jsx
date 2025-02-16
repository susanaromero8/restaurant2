import { useModalMenu } from "../hooks/useModalMenu";
import ListMenu from "./ListMenu";
import Nav from "./Nav";
import logo from "/g658.png";
import logoSimple from "/logosimple.png";

const Header = ({ bg, p, mp }) => {
  const { isOpen, toggleMenu } = useModalMenu();
  return (
    <>
      <nav
        className={`flex items-center justify-between lg:justify-around ${p} ${mp}  ${bg} relative `}
      >
        {/* Contenedor Header List Menu Sm*/}
        <div className="sub-menu block lg:hidden w-24 h-10">
          <button
            onClick={toggleMenu}
            className="bg-[#008BBF] hover:bg-[#00c4ff] shadow-2xl p-2 rounded-lg contain w-20 h-12 shadow-black flex items-center justify-center"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Contenedor Header Logo */}
        <div className="max-w-40">
          <img src={logo} className="hidden md:block" alt="Logo Desktop" />
          <img
            src={logoSimple}
            className="block md:hidden w-20"
            alt="Logo Simple"
          />
        </div>

        <Nav />
      </nav>

      {isOpen && (
        <div className="block lg:hidden flex flex-col bg-[#008BBF] p-2">
          {<ListMenu />}
        </div>
      )}
    </>
  );
};

export default Header;
