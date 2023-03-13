import { useState } from "react";
import { initialState } from "../../../_mock/initialState";

export const HandleDragEnd = () => {
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
			prev = prev.slice();
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
	return { handleDragEnd, state };
};

export default HandleDragEnd;
