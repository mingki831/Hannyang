import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getInstance from "../../shared/api/Request";
//import { basePath } from "../../shared/api/Request";

export const __postStep1 = createAsyncThunk(
    'POST_STEP1', //action value
    async (arg, thunkAPI) => {
      try {
        const data = await getInstance().post(
            `/survey-requests/step1`,
            JSON.stringify({
                "googleFormLink": arg})
            );
        console.log(data.data);
        return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.code);
      }
    }
  );

  const initialState = {
    step: { data: {}, loading: false, error: null, fulfilled: false },
    servey: { data: {}, Loading: false, error: null, fulfilled: false },
  };

  export const surveySlice = createSlice({
    name: 'survey', //모듈의 이름
    initialState,
    reducers: {
    //   CLEAR_STEP: (state) => {
    //     state.step = {
    //       data: [],
    //       loading: false,
    //       error: null,
    //     };
    //   },
    },
    extraReducers: (builder) => {
      builder
        .addCase(__postStep1.pending, (state) => {
            state.step.loading = true;
            state.step.fulfilled = false;
        })
        .addCase(__postStep1.fulfilled, (state, action) => {
            state.step.data = action.payload;
            console.log(state.step);
            state.step.loading = false;
            state.step.fulfilled = true;
        })
        .addCase(__postStep1.rejected, (state, action) => {
            state.step.error = action.payload;
            state.step.loading = false;
            state.step.fulfilled = false;
        })
    },
  });
  
  export const { SET_STEP } = surveySlice.actions;
  export default surveySlice.reducer;
  