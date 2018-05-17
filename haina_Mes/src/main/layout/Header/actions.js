
//actionTypes
const actionTypes = {
	changeMenu:"CHANGE_MENU"
};





//actions
const changeMenu = (menu) => ({
	type: actionTypes.changeMenu,
	menu:menu
})







export { actionTypes };
export { changeMenu };

