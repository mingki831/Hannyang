import { createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 3600 * 1000; // 만료 시간 (1시간을 밀리 초로 표현)

export const tokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        authenticated: false, //로그인 여부
        accessToken: null, //Access Token 저장
        expireTime: null //Access Token 만료시간
    },
    //리듀서 : 데이터를 실제로 바꾸는 함수
    //dispatch된 action을 바탕으로 데이터 수정함
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