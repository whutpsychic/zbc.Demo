
//actionTypes
const actionTypes = {
	showTips: "SHOW_TIPS"
};

//actions

const showTips = (txt) => ({
	type: actionTypes.showTips,
	show: txt
})

export { actionTypes };
export { showTips};

