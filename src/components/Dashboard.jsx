import React from "react";

const Dashboard = () => {
	return (
		<>
			<div className="flex-1 bg-sky-800 h-screen w-screen ">
				<h1 className="text-center text-2xl font-bold pt-4 text-dark-500 hover:text-green-500">
					Main Dashboard
				</h1>

				<div className="relative border  h-5/6 mt-5">
					<div className="bg-blue-500 w-20 h-5/6 absolute bottom-0 ml-4 rounded-lg">
						<span className="font-bold">Facebook</span>
					</div>
					<div className="bg-red-600 w-20 h-4/6 absolute bottom-0 ml-40 rounded-lg">
						<span className="font-bold">Youtube</span>
					</div>
					<div className="bg-yellow-600 w-20 h-3/6 absolute bottom-0 ml-80 rounded-lg">
						<span className="font-bold text-center">Coding</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
