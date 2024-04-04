import { useState } from 'react';
import ListMenu from './ListMenu';
import Button from './Button';
import logo from '/g658.png';
import logoSimple from '/logosimple.png';
function Nav() {
	const [isOpen, setIsOpen] = useState(false);
   	const toggleMenu = () => {
    setIsOpen(!isOpen);};

	return(
		<>
			<nav className="flex items-center justify-between lg:justify-around p-4 md:p-10 pb-0 md:pb-4  ">
	          <div className="max-w-40">
	            <img src={logo} className="hidden md:block" alt="Logo Desktop"/>
	            <img src={logoSimple} className="block md:hidden w-20" alt="Logo Simple"/>
	          </div>
	          <div className="menu-list hidden md:block">
	            <ListMenu />
	          </div>
	          <div className="sub-menu block md:hidden bg-sky-500 shadow-2xl shadow-black hover:bg-sky-400 flex items-center p-2 rounded-sm h-10">
	            <button onClick={toggleMenu}>
	              {isOpen ? ( 
	                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
	                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
	                </svg>
	                ) : (
	                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
	                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
	                  </svg>
	                )}
	            </button>
	          </div>
	          <div className="input hidden lg:flex">
	            <div className="btn-contain w-24 h-10">
	              <Button description="?" style={{ backgroundColor: "#FFB600"}} />
	            </div>
	            <div className="btn-contain w-24 h-10">
	              <Button description="BROWNSE" style={{ backgroundColor: "#008BBF"}} />
	            </div>
	          </div>
	        </nav>
	         {isOpen && (
	              <div className="block md:hidden mt-2 flex flex-col md:flex-row bg-[#008BBF]"> 
	                {<ListMenu />}
	              </div>
	          )}
		</>
		);

}
export default Nav;