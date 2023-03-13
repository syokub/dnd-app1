import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import "../../App.css";
import RenderDroppable from "./hooks/RenderDroppable";
import HandleDragEnd from "./hooks/HandleDragEnd";

const Main = () => {
    const {state,handleDragEnd} = HandleDragEnd();
    const {renderDroppable} = RenderDroppable()

	const renderColumns = () => {
		return _.map(state, renderDroppable);
	};

	return (
		<div className="App">
			<DragDropContext onDragEnd={handleDragEnd}>
				{renderColumns()}
			</DragDropContext>
		</div>
	);
}

export default Main;
