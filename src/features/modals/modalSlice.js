import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hoverModal: {
		open: false,
		details: {},
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
	},
});

export const { openHover, closeHover } = modalSlice.actions;

export default modalSlice.reducer;
