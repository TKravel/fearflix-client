import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlice';
import modalReducer from '../features/modals/modalSlice';

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		modal: modalReducer,
	},
});
