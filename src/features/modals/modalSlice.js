import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hoverModal: {
		open: false,
		details: {},
		id: null,
		isTransitioning: false,
	},
	fullPageModal: {
		open: false,
		id: null,
		coords: {},
	},
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openHover: (state, action) => {
			state.hoverModal.open = true;
			state.hoverModal.id = action.payload.id;
			state.hoverModal.details = action.payload.pos;
		},
		closeHover: (state, action) => {
			state.hoverModal.open = false;
			state.hoverModal.id = null;
			state.hoverModal.details = action.payload.pos;
		},
		setHoverStatus: (state, action) => {
			if (action.payload === true) {
				state.hoverModal.isTransitioning = true;
			} else {
				state.hoverModal.isTransitioning = false;
			}
		},
		openFullPageModal: (state, action) => {
			state.fullPageModal.open = true;
			state.fullPageModal.id = action.payload.id;
			state.fullPageModal.coords = action.payload.pos;
		},
		closeFullPageModal: (state) => {
			state.fullPageModal.open = false;
			state.fullPageModal.id = null;
			state.fullPageModal.coords = {};
		},
	},
});

export const {
	openHover,
	closeHover,
	setHoverStatus,
	openFullPageModal,
	closeFullPageModal,
} = modalSlice.actions;

export default modalSlice.reducer;
