import React from "react";
import Item from "./Item";

const Items = ({ addItem, state, removeChart, items }) => {
	return (
		<div className="container content">
			<div className="row">
				{items.map(item => (
					<Item
						key={item.id}
						addItem={addItem}
						item={item}
						state={state}
						removeChart={removeChart}
					/>
				))}
			</div>
		</div>
	);
};

export default Items;
