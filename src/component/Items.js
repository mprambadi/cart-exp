import React from "react";
import Item from "./Item";

const Items = ({ addItem, state, removeChart }) => {
   const filterItems = state.items.filter(item=>[item.name].join(' ').indexOf(state.filter)!==-1) 

	return filterItems.map(item => (
		<Item key={item.id} addItem={addItem} item={item} state={state} removeChart={removeChart}/>
	));
};

export default Items;
