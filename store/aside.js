export const state = () => ({
	isOpen: false,
});

export const mutations = {
	openMenu(state) {
		state.isOpen = true;
		console.log("it");
	},
	closeMenu(state) {
		state.isOpen = false;
	},
};
