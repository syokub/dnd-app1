import React from "react";

export const Sidebar = () => {
	return (
		<>
			<div
				class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen"
			>
				<div class="text-gray-100 text-xl">
					<div class="p-2.5 mt-1 flex items-center rounded-md ">
						<i class="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
						<h1 class="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
							Tailwindbar
						</h1>
						<i
							class="bi bi-x ml-20 cursor-pointer lg:hidden"
							onclick="Openbar()"
						></i>
					</div>
					<hr class="my-2 text-gray-600" />

					<div>
						<div
							class="p-2.5 mt-3 flex items-center rounded-md 
        px-4 duration-300 cursor-pointer  bg-gray-700"
						>
							<i class="bi bi-search text-sm"></i>
							<input
								class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
								placeholder="Serach"
							/>
						</div>

						<div
							class=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto"
							id="submenu"
						>
							<h1 class="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
								Social
							</h1>
							<h1 class="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
								Personal
							</h1>
							<h1 class="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
								Friends
							</h1>
						</div>
						<div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
							<i class="bi bi-box-arrow-in-right"></i>
							<span class="text-[15px] ml-4 text-gray-200">Logout</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
