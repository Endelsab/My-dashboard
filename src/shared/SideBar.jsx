import React from "react";
import {
	Recycle,
	Gauge,
	CalendarBlank,
	HourglassLow,
	Smiley,
} from "phosphor-react";

const SideBar = () => {
	return (
		<>
			<div className="flex flex-col bg-neutral-900 w-32 p-3 text-white lg:w-48">
				<div className="flex items-center gap-1 px-2 py-3">
					<Recycle className="text-pink-500" size={32} />{" "}
					<span className="text-xl text-green-500">My Life Cycle</span>
				</div>

				<div className="flex-1 mt-7">
					<div className="flex ml-1 text-sm  text-blue-500 hover:text-sky-200 ">
						<Gauge className="" size={20} weight="bold" />
						<span className="ml-2">Dashboard</span>
					</div>
					<div className="flex ml-1 text-sm mt-1 text-red-500 hover:text-sky-200 ">
						<CalendarBlank size={20} />
						<span className="ml-2">Days</span>
					</div>
					<div className="flex ml-1 text-sm mt-1 text-yellow-500 hover:text-sky-200 ">
						<HourglassLow size={20} />
						<span className="ml-2">Time</span>
					</div>
				</div>

				<div className="text-green-500">
					<Smiley size={32} /> <span> Enjoy Life !</span>
				</div>
			</div>
		</>
	);
};

export default SideBar;
