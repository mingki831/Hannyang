import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from '../modules/AuthSlice';
import userReducer from '../modules/UserSlice';
import surveyReducer from '../modules/SurveySlice';

const store = configureStore ({
    reducer: {
        token: tokenReducer,
        user: userReducer,
        survey: surveyReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;