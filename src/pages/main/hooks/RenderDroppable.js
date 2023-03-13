import { Droppable } from "react-beautiful-dnd";
import RenderDraggable from "./RenderDraggable";

import React, { useCallback } from "react";

export const RenderDroppable = () => {
	const {renderDraggable} = RenderDraggable();

	const renderDroppable = useCallback((data, key) => {
		const isEmpty = data.items.length === 0;
		const classNames = `droppable-col ${
			isEmpty
				? "item bg-center bg-origin-content bg-clip-content bg-contain bg-no-repeat opacity-40 bg-add"
				: ""
		}`;

		return (
			<div key={key} className="column rounded">
				<h3 className="bg-[#F2FAF6] p-2 border-b-2 border-[#C9D2CE] sticky top-0">
					{data.title} {data.items.length}
				</h3>
				<Droppable droppableId={key} className="p-3">
					{(provided, snapshot) => {
						return (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className={classNames}
							>
								{data.items.map(renderDraggable)}
								{provided.placeholder}
							</div>
						);
					}}
				</Droppable>
			</div>
		);
	}, []);
	return { renderDroppable };
};

export default RenderDroppable;
