import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Layouts from "./components/layouts/Layout";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layouts />}>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<div>404 ERROR</div>} />
			</Route>
		</Routes>
	);
};

export default App;
