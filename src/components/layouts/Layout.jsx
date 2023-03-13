import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layouts = ({ children }) => {
	return (
		<>
			<div className=" h-[100vh] w-[100vw]  overflow-y-hidden overflow-x-hidden ">
				<div className="">
					<Navbar className="sticky">
						<div className="scrollCustomize scrollbar bg-[#f5f7fd]">
							<Outlet className="" />
						</div>
					</Navbar>
				</div>
			</div>
		</>
	);
};
export default Layouts;
