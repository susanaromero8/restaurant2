function ListMenu() {
	return(
		<>
			<ul className="list-none text-white flex flex-col md:flex-row uppercase md:gap-5">
                <li className="cursor-pointer border-b-2 p-2 pl-4 md:border-b-0 md:p-0 md:pl-0">Home</li>
                <li className="cursor-pointer border-b-2 p-2 pl-4 md:border-b-0 md:p-0 md:pl-0"><a href="#category">Category</a></li>
                <li className="cursor-pointer border-b-2 p-2 pl-4 md:border-b-0 md:p-0 md:pl-0">App</li>
                <li className="cursor-pointer border-b-2 p-2 pl-4 md:border-b-0 md:p-0 md:pl-0">About us</li>
                <li className="cursor-pointer border-b-2 p-2 pl-4 md:border-b-0 md:p-0 md:pl-0">Contact</li>
                <li className="cursor-pointer border-b-2 p-2 pl-4 md:border-b-0 md:p-0 md:pl-0">Faq</li>
            </ul>
		</>
		);
}

export default ListMenu;