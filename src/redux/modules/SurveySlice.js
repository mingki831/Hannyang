import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getInstance from "../../shared/api/Request";
//import { basePath } from "../../shared/api/Request";

axios.defaults.withCredentials = true;

export const __postStep1 = async (Url) => {
    const res =
      await getInstance().post(
          `/survey-requests/step1`,
          JSON.stringify({
              "googleFormLink": Url}));
    return res;
}

export const __postStep2 = async (arg) => {
    console.log(arg);
    console.log(JSON.stringify({
      "participantCount": arg.people,
      "rewardPoints": arg.point,
      "deadline": arg.endDate,
      //시작일 추가
      //결제금액 추가
    }))
    const res =
      await getInstance().put(
          `/survey-requests/step2/${arg.surveyId}`,
          JSON.stringify({
              "participantCount": arg.people,
              "rewardPoints": arg.point,
              "deadline": arg.endDate,
              //시작일 추가
              //결제금액 추가
            }));
    return res;
}

export const __postStep3 = async (arg) => {
  console.log(arg);
  console.log(JSON.stringify({
    "accountHolderName": arg.accountOwner,
    "account": arg.account,
  }))
  const res =
    await getInstance().put(
        `/survey-requests/step3/${arg.surveyId}`,
        JSON.stringify({
            "accountHolderName": arg.accountOwner,
            "account": arg.account,
          }));
  return res;
}

  const initialState = {
    //step: { data: {}, loading: false, error: null, fulfilled: false },
    id: null,
    googleFormLink: null,
    participantCount: null,
    rewardPoints: null,
    deadline: null,
    accountHolderName: null,
    account: null,
  };

  export const surveySlice = createSlice({
    name: 'survey', //모듈의 이름
    initialState,
    reducers: {
      SET_SURVEY: (state, action) => {
        state.id = action.payload.id;
        state.googleFormLink = action.payload.googleFormLink;
        state.participantCount = action.payload.participantCount;
        state.rewardPoints = action.payload.rewardPoints;
        state.deadline = action.payload.deadline;
        state.accountHolderName = action.payload.accountHolderName;
        state.account = action.payload.account;
      },
    //   CLEAR_STEP: (state) => {
    //     state.step = {
    //       data: [],
    //       loading: false,
    //       error: null,
    //     };
    //   },
    },
  });
  
  export const { SET_SURVEY } = surveySlice.actions;
  export default surveySlice.reducer;
  