import React from "react";
import { ReactComponent as More } from "../assets/icons/More.svg";
import { ReactComponent as Users } from "../assets/icons/tabler_users.svg";
import { ReactComponent as Docs } from "../assets/icons/tabler_file-description.svg";

export const CardComponent = ({ snapshot, provided, el }) => {
	const statusColor =
		el.status === 1
			? "bg-violet-50"
			: el.status === 2
			? "bg-sky-50"
			: el.status === 3
			? "bg-red-50"
			: "";
	const textColor =
		el.status === 1
			? "text-violet-500"
			: el.status === 2
			? "text-sky-400"
			: el.status === 3
			? "text-red-400"
			: "";
	const text =
		el.status === 1
			? "В приоритете"
			: el.status === 2
			? "Второстепенная"
			: el.status === 3
			? "Срочная заявка"
			: "";

	return (
		<>
			<div
				className={`item bg-white mb-3 ${
					snapshot.isDragging && "dragging"
				} w-64 rounded shadow-md`}
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				<div className="flex flex-col gap-3 p-3">
					<div className="flex justify-between items-start">
						<div>
							<span className="text-sm font-semibold block">{el.jobTitle}</span>
							<span className="text-xs font-normal text-slate-500">
								{el.department}
							</span>
						</div>
						<button onClick={() => alert("clicked!")}>
							<More />
						</button>
					</div>
					<div className="flex items-center justify-start gap-2">
						<span
							className={`${statusColor} rounded-lg p-2 text-xs font-medium ${textColor}`}
						>
							{text}
						</span>
						<span className="flex  border-2 border-slate-100 p-1 rounded bg-[#FAFFFC]">
							<Users />
							<span className="text-xs font-medium">{el.vacancies}</span>
						</span>
						<span className="flex  border-2 border-slate-100 p-1 rounded bg-[#FAFFFC]">
							<Docs />
							<span className="text-xs font-medium">{el.applicants}</span>
						</span>
					</div>
					<div className="flex gap-2 items-center">
						<img
							className="w-8 h-8 rounded-full  outline outline-offset-0 outline-1 outline-slate-300"
							src={el.recruiter.profilePicture}
							alt="Rounded avatar"
							loading="lazy"
						/>
						<div className="flex flex-col justify-center">
							<p className="text-slate-400 text-xs font-normal">Рекруитер</p>
							<p className="text-xs font-medium">{el.recruiter.fullname}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardComponent;
