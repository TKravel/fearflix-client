import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hoverModal: {
		open: false,
		details: {},
		id: null,
	},
	fullPageModal: {
		open: false,
		id: null,
	},
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openHover: (state, action) => {
			console.log(action.payload);
			state.hoverModal.open = true;
			state.hoverModal.id = action.payload.id;
			state.hoverModal.details = action.payload.pos;
		},
		closeHover: (state, action) => {
			state.hoverModal.open = false;
			state.hoverModal.id = null;
			state.hoverModal.details = action.payload.pos;
		},
		openFullPageModal: (state, action) => {
			state.fullPageModal.open = true;
			state.fullPageModal.id = action.payload.id;
		},
		closeFullPageModal: (state) => {
			state.fullPageModal.open = false;
			state.fullPageModal.id = null;
		},
	},
});

export const { openHover, closeHover, openFullPageModal, closeFullPageModal } =
	modalSlice.actions;

export default modalSlice.reducer;
