import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  role: null,
  nickname: null,
  email: null,
  point: null,
  profileURL: null,
  // gifticon: null,
  // mySurvey: null,
  // resSurvey: null,
};

export const userSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.point = action.payload.point;
      state.profileURL = action.payload.profileURL;
      // state.gifticon = action.payload.gifticon;
      // state.mySurvey = action.payload.mySurvey;
      // state.resSurvey = action.payload.resSurvey;
    },
    DELETE_USER: (state) => {
      state.id = null;
      state.role = null;
      state.nickname = null;
      state.email = null;
      state.point = null;
      state.profileURL = null;
      // state.gifticon = null;
      // state.mySurvey = null;
      // state.resSurvey = null;
    },
    UPDATE_USER: (state, action) => {
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.point = action.payload.point;
      state.profileURL = action.payload.profileURL;
      // state.gifticon = action.payload.gifticon;
      // state.mySurvey = action.payload.mySurvey;
      // state.resSurvey = action.payload.resSurvey;
    },
  },
});

export const { SET_USER, DELETE_USER, UPDATE_USER } = userSlice.actions;
export default userSlice.reducer;
