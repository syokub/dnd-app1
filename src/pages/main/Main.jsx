import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import CardComponent from "../../components/Card";
import { initialState } from "../../_mock/initialState";
import "../../App.css";

function Main() {
	const [state, setState] = useState(initialState[0]);

	const handleDragEnd = ({ destination, source }) => {
		if (!destination) {
			return;
		}

		if (
			destination.index === source.index &&
			destination.droppableId === source.droppableId
		) {
			return;
		}

		// Creating a copy of item before removing it from state
		const itemCopy = { ...state[source.droppableId].items[source.index] };

		setState((prev) => {
			prev = { ...prev };
			// Remove from previous items array
			prev[source.droppableId].items.splice(source.index, 1);

			// Adding to new items array location
			prev[destination.droppableId].items.splice(
				destination.index,
				0,
				itemCopy
			);

			return prev;
		});
	};

	return (
		<div className="App">
			<DragDropContext onDragEnd={handleDragEnd}>
				{_.map(state, (data, key) => {
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
											className={`droppable-col ${
												data.items.length === 0
													? "item bg-center bg-origin-content bg-clip-content bg-contain bg-no-repeat opacity-40 bg-add"
													: ``
											}`}
										>
											{data.items.map((el, index) => {
												return (
													<Draggable
														key={el.id}
														index={index}
														draggableId={el.id}
													>
														{(provided, snapshot) => {
															return (
																<>
																	<CardComponent
																		provided={provided}
																		snapshot={snapshot}
																		el={el}
																	/>
																</>
															);
														}}
													</Draggable>
												);
											})}
											{provided.placeholder}
										</div>
									);
								}}
							</Droppable>
						</div>
					);
				})}
			</DragDropContext>
		</div>
	);
}

export default Main;
