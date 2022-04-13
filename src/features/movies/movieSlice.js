import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
	const response = await fetch('/getmovies').then((response) =>
		response.json()
	);
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
		loadMovies: (state, action) => {
			state.movies = [...action.payload];
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
export const { loadMovies } = movieSlice.actions;

export default movieSlice.reducer;
