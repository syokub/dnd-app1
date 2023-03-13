import { Draggable } from "react-beautiful-dnd";
import CardComponent from "../../../components/Card";
import { memo, useCallback } from "react";

const MemoizedCardComponent = memo(CardComponent);

export const RenderDraggable = () => {

const renderDraggable = useCallback((el, index) => {
	return (
		<Draggable key={el.id} index={index} draggableId={el.id}>
			{(provided, snapshot) => {
				return (
					<MemoizedCardComponent
						provided={provided}
						snapshot={snapshot}
						el={el}
					/>
				);
			}}
		</Draggable>
	);
},[])


  return {renderDraggable}
}

export default RenderDraggable;