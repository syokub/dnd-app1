import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "../Pages/AddPost/AddPost";
import Layout from "./components/Layout/Layout";

const MainRoutes = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Layout />} />
			</Routes>
		</div>
	);
};
export default MainRoutes;
