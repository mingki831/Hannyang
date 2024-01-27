import { createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 60 * 60 * 60; //1시간?

export const tokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        authenticated: false, //로그인 여부
        accessToken: null, //Access Token 저장
        expireTime: null //Access Token 만료시간
    },
    reducers: {
        //Access Token 정보 저장
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload;
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        //초기화, 삭제
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null;
        },
    }
})

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;
export default tokenSlice.reducer;