import React from "react";

export const Navbar = ({ children }) => {
	return (
		<>
			<div>
				<div className="bg-[#2EA97D] h-[44px] w-[100vw]"></div>
				{children}
			</div>
		</>
	);
};

export default Navbar;
