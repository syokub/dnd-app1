import React from "react";
import { ReactComponent as MoreIcon } from "../assets/icons/More.svg";
import { ReactComponent as UsersIcon } from "../assets/icons/tabler_users.svg";
import { ReactComponent as DocsIcon } from "../assets/icons/tabler_file-description.svg";

const CARD_STATUSES = [
	{
		status: 1,
		text: "В приоритете",
		color: "bg-violet-50",
		textColor: "text-violet-500",
	},
	{
		status: 2,
		text: "Второстепенная",
		color: "bg-sky-50",
		textColor: "text-sky-400",
	},
	{
		status: 3,
		text: "Срочная заявка",
		color: "bg-red-50",
		textColor: "text-red-400",
	},
];

const CardComponent = ({ snapshot, provided, el }) => {
	const { status, jobTitle, department, vacancies, applicants, recruiter } = el;
	const { text, color, textColor } = CARD_STATUSES.find(
		(s) => s.status === status
	);

	const handleClickMore = () => {
		alert("clicked!");
	};

	return (
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
						<span className="text-sm font-semibold block">{jobTitle}</span>
						<span className="text-xs font-normal text-slate-500">
							{department}
						</span>
					</div>
					<button onClick={handleClickMore}>
						<MoreIcon />
					</button>
				</div>
				<div className="flex items-center justify-start gap-2">
					<span
						className={`${color} rounded-lg p-2 text-xs font-medium ${textColor}`}
					>
						{text}
					</span>
					<span className="flex  border-2 border-slate-100 p-1 rounded bg-[#FAFFFC]">
						<UsersIcon />
						<span className="text-xs font-medium">{vacancies}</span>
					</span>
					<span className="flex  border-2 border-slate-100 p-1 rounded bg-[#FAFFFC]">
						<DocsIcon />
						<span className="text-xs font-medium">{applicants}</span>
					</span>
				</div>
				<div className="flex gap-2 items-center">
					<img
						className="w-8 h-8 rounded-full  outline outline-offset-0 outline-1 outline-slate-300"
						src={recruiter.profilePicture}
						alt="Rounded avatar"
						loading="lazy"
					/>
					<div className="flex flex-col justify-center">
						<p className="text-slate-400 text-xs font-normal">Рекруитер</p>
						<p className="text-xs font-medium">{recruiter.fullname}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
