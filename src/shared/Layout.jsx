import React from "react";
import SideBar from "./SideBar";
import Dashboard from "../components/Dashboard";

const Layout = () => {
	return (
		<>
			<div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
				<SideBar />

				<Dashboard />
			</div>
		</>
	);
};

export default Layout;
