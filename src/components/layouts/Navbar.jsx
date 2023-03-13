import React, { Children } from "react";

export const Navbar = ({ children }) => {
	return (
		<>
			<div>
				<div className="bg-[#2EA97D] h-[44px] w-[100vw]">Navbar</div>
				{children}
			</div>
		</>
	);
};

export default Navbar;
