import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
	const response = await fetch('/test').then((response) => response.json());
	return response.data;
});

const initialState = {
	movies: [],
	status: 'idle',
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				console.log(action.payload);
				state.movies = action.payload;
				state.status = 'idle';
			});
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = movieSlice.actions;

export default movieSlice.reducer;
